const path = require("path");

let config = {
    viewDir: path.join(__dirname, '..', 'views'),
    staticDir: path.join(__dirname, '..', 'assets'),
}

if(false){
    console.log("无用代码清洗测试");
}

if(process.env.NODE_ENV === "development"){
    const devConfig = {
        port: 3000,
        cache: false
    }
    config = {...config, ...devConfig};
}

if(process.env.NODE_ENV === "production"){
    const prodConfig = {
        port: 80,
        cache: "memory"
    }
    config = {...config, ...prodConfig};
}

export default config;