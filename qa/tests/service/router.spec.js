const axios = require("axios");

describe("Node服务自动化测试脚本", function () {
    it("404测试", function (done) {
        axios.get("http://localhost/xx").then(function (response) {
            console.log(response)
        }).catch(error)
        {
            done(error);
        }
    });
});