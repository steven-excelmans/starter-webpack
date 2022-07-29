const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin: WebpackBundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const DEV = 'development';
const PRD = 'production';

let config = {
    entry: ['./src/index'],
    mode: DEV,
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                use: 'html-loader'
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    filename: "images/[hash][name][ext]"
                }
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
        new MiniCssExtractPlugin({filename: 'styles.css'}),
    ],
    devServer: {
        open: true,
        port: 3000,
        static: path.resolve(__dirname, 'dist'),
        watchFiles: ['src/**/*']
    }
}

module.exports = (env, args) => {
    if (args.mode === DEV) {
        config.devtool = 'source-map'
    }

    if (args.mode === PRD) {
        config.plugins = [
            ...config.plugins,
            new WebpackBundleAnalyzerPlugin()
        ]
    }

    return config;
}
