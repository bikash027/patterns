const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /\.file.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.file.css$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ],
    },
    watchOptions: {
        poll: 1000,
        ignored: ['**/node_modules', '**/dist']
    },
};