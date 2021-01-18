const request = require("supertest");
const expect = require("chai").expect;
describe(`接口测试`, function(){
    it("图书接口测试", function(done){
        request("http://localhost:3000")
            .get("/api/getBooksList")
            .expect(200)
            .end(function(err, res){
                expect(res.body.data.length).equal(4);
                expect(res.body.data[0].name).equal("三国演义");
                // 一定记得要结束掉测试
                done();
            })
    });
});
