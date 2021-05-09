const webpack_config = require("../webpack.config");
module.exports = {
    configureWebpack: webpack_config,
    devServer:{
        proxy: {
            '/api': {     //这里最好有一个 /
                target: 'http://192.168.43.58',  // 后台接口域名
                ws: true,        //如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}