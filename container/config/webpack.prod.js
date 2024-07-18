const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    devServer:{
        port: 8082
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'cart',
            filename: 'remoteEntry.js',
            exposes:{
                './CartShow': './src/index'
            },
            shared:['@faker-js/faker']
        }),
        
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}