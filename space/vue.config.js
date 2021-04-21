const path = require('path');
const webpack_config = require("../webpack.config");
webpack_config.resolve.alias["mutations"]= path.resolve(__dirname, 'src\\vuex\\mutation-types')
webpack_config.resolve.alias["@"]= path.resolve(__dirname, 'src')
module.exports = {
    configureWebpack: webpack_config
}