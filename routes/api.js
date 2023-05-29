'use strict';

var expect = require('chai').expect;
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId;
const request = require('request');
const app = require('../server');

let stockSchema = new mongoose.Schema({
  code: String,
  likes: {type: Number, default: 0},
})

let Stock = mongoose.model('Stock', stockSchema);


async function saveStock(code, like, ip){
  return Stock.findOne({code: code})
  .then(stock => {
    if (!stock){
      let newStock = new Stock({code: code, likes: like ? [ip] : []})
      return newStock.save()
    }else {
      if (like && stock.likes.indexOf(ip) == -1){
        stock.likes.push(ip)
      }
      return stock.save()
    }
  })
}

async function parseData(data){
   let i = 0;
   let stockData = [];
   let likes = [];
   while (i < data.length){
    let stock = {stock: data[i].code, price: JSON.parse(data[i+1][1]).close};
    likes.push(data[i].likes.length);
    stockData.push(stock);
    i += 2;
    
   }
   
   if (likes.length > 1){
    stockData[0].rel_likes = likes[0] - likes[1];
    stockData[1].rel_likes = likes[1] - likes[0];
   }else{
    stockData[0].likes = likes[0];
    stockData = stockData[0];
   }
   return stockData;
}


module.exports = function (app) {
  
  app.get('/api/testing', (req, re) => {
    res.json({IP: req.ip})
   })
   

  app.route('/api/stock-prices')
    .get(function (req, res){
      let code = req.query.stock || '';
      if(!Array.isArray(code)){
         code = [code];

      }
      let promises = [];
      code.forEach(code => {
        promises.push(saveStock(code.toUpperCase(),
        req.query.like, req.ip));
        let url = `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${code.toUpperCase()}/quote`;
        promises.push(request(url))
      })   

      Promise.all(promises)
      .then(async data => {
        let stockData = await parseData(data);
        res.json({stockData})
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })

      
    });
    
};
