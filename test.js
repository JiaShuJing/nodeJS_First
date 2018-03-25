/**
 * Created by jsj on 2018/3/25.
 * 自定义模块 测试用的
 */
function test() {
    console.log('这是我自定义的一个模块...')
}
//公开该方法到node模块
exports.test=test;
//在modules.js文件中进行测试