const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


const PATHS = {
    app: path.join(__dirname, "app"),
    build: path.join(__dirname, "build")
}

module.exports = {
    entry: {
        main: './app/main.js',
        main1: './app/main1.js',
        // chunk: [ "./app/chunk1", "./app/chunk2"],
        // vendor: ['jquery'],
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack try splitting'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            // name: ["vendor", "chunk"],
            // filename: "chunk.js"
            name: "jquery",
            minChunk: 2,
        })
    ]
};
