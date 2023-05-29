// const chaiHttp = require('chai-http');
// const chai = require('chai');
// const assert = chai.assert;
// const server = require('../server');

// chai.use(chaiHttp);
 
// suite('Functional Tests', function() {
//     this.suites("5 functional get request tests", function(){
//         test("View one stock: GET request to /api/stock-prices/", function(done){
//             chai 
//               request(server)
//               .get("/api/stock-prices/")
//               .set("content-type", "application/json")
//               .query({stock: "goog"})
//               .end(function (err, res){
//                 assert.equal(res.status, 200);
//                 assert.equal(res.body.stockData.stock, "goog");
//                 assert.equal(res.body.stockData.price, "goog has a price");
//                 done();
//               });
//         });
//         test("View one stock and like it: GET request to /api/stock-prices/", function(done){
//             chai 
//               request(server)
//               .get("/api/stock-prices/")
//               .set("content-type", "application/json")
//               .query({stock: "GOLD", like: true})
//               .end(function (err, res){
//                 assert.equal(res.status, 200);
//                 assert.equal(res.body.stockData.stock, "GOLD");
//                 assert.equal(res.body.stockData.likes, 1)
//                 assert.equal(res.body.stockData.price, "GOLD has a price");
//                 done();
//               });
//         });
//         test("View same stock and like it again: GET request to /api/stock-prices/", function(done){
//             chai 
//               request(server)
//               .get("/api/stock-prices/")
//               .set("content-type", "application/json")
//               .query({stock: "GOLD"})
//               .end(function (err, res){
//                 assert.equal(res.status, 200);
//                 assert.equal(res.body.stockData.stock, "GOLD");
//                 assert.equal(res.body.stockData.likes, 1);
//                 assert.equal(res.body.stockData.price, "GOLD has a price");
//                 done();
//               });
//         });
//         test("View two stocks: GET request to /api/stock-prices/", function(done){
//             chai 
//               request(server)
//               .get("/api/stock-prices/")
//               .set("content-type", "application/json")
//               .query({stock: ["TSLA", "AMZN"]})
//               .end(function (err, res){
//                 assert.equal(res.status, 200);
//                 assert.equal(res.body.stockData[0].stock, "TSLA");
//                 assert.equal(res.body.stockData[1].stock, "AMZN")
//                 assert.equal(res.body.stockData[0].price, "TSLA has a price");
//                 assert.equal(res.body.stockData[1].price, "AMZN has a price");
//                 done();
//               });
//         });
//         test("View two stocks and liking them: GET request to /api/stock-prices/", function(done){
//             chai 
//               request(server)
//               .get("/api/stock-prices/")
//               .set("content-type", "application/json")
//               .query({stock: ["TSLA", "AMZN"], like: true})
//               .end(function (err, res){
//                 assert.equal(res.status, 200);
//                 assert.equal(res.body.stockData[0].stock, "TSLA");
//                 assert.equal(res.body.stockData[1].stock, "AMZN")
//                 assert.equal(res.body.stockData[0].price, "TSLA has a price");
//                 assert.equal(res.body.stockData[1].price, "AMZN has a price");
//                 assert.equal(res.body.stockData[0].rel_likes, "has rel_likes");
//                 assert.equal(res.body.stockData[1].rel_likes, "has rel_likes");
//                 done();
//               });
//         });


//     })

// });