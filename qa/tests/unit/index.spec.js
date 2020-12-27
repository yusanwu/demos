// 断言库提供语法
// describe - it 规范
describe("测试基本函数API", function(){
    it("+1测试应用", function(){
        expect(add(67)).toBe(68);
        // expect(add(100)).toBe(101);
    });
});