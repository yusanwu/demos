const { join } = require("path");
module.exports = {
    output: {
        path: join(__dirname, '../dist/assets'),
        filename: 'scripts/[name].bundle.js'
    }
}