const path = require('path');
module.exports = {
    resolve: {
        alias: {
            'g-public': path.resolve(__dirname, 'public\\src'),
            "mutations": path.resolve(__dirname, 'space\\src\\vuex\\mutation-types'),
            // "@": path.resolve(__dirname, 'space\\src')
        },
    }
}