const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src/css'),
                use: ['style-loader', 'css-loader', 'postcss-loader']
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
        new HtmlWebpackPlugin({template: './src/index.html'})
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
