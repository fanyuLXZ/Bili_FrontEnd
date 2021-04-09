const path = require('path');
module.exports = {
    resolve: {
        alias: {
            'g-public': path.resolve(__dirname, 'public\\src')
        },
    }
}