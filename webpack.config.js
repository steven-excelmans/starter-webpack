const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
    entry: ['./src/index'],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                include: path.resolve(__dirname, 'src/css'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: 'styles.css'})
    ],
    devServer: {
        open: true,
        port: 3000,
        static: path.resolve(__dirname, 'dist'),
        watchFiles: ['src/**/*']
    }
}

module.exports = (env, args) => {
    if (args.mode === 'development') {
        config.devtool = 'source-map'
    }

    return config;
}
