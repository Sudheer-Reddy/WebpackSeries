const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
}
module.exports = {
    entry: {
        main: PATHS.src + '/js'
    },
    output: {
        path: PATHS.dist,
        filename: 'js/[name][hash].js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
                to: 'assets'
            },
            {
                from: 'src/css/*.css',
                to: 'css'
            }
        ])
    ]
}