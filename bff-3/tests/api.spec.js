// node自身带的断言  chai should expect tdd bdd 
// const assert = require('assert');
// describe('Array', function () {
//     describe('#indexOf()', function () {
//         it('should return -1 when the value is not present', function () {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });

const request = require('supertest');
const expect = require('chai').expect;
describe('nodejs api test', function () {
    it('图书接口测试', function (done) {
        request("http://localhost:3000")
            .get('/api/getBooksList')
            .expect(200)
            .end(function (err, res) {
                expect(res.body.data.length).equal(11)
                expect(res.body.data[0].name).equal('图书二')
                // console.log(res.body.data);
                done();
            });
    })
})