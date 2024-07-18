const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig =  {
    mode: 'development',
    devServer:{
        port: 8082,
        historyApiFallback:{
            index:'index.html'
        }
    },

    plugins:[
        new ModuleFederationPlugin({
            name:'cart',
            filename: 'remoteEntry.js',
            exposes:{
                './CartShow': './src/bootstrap'
            },
            shared:['@faker-js/faker']
        }),
        
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
      },
}

module.exports = merge(commonConfig,devConfig)