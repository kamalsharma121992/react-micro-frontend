const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig =  {
    mode: 'development',
    devServer:{
        port: 8080,
        historyApiFallback:{
            index:'index.html'
        }
    },

    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                cart:'cart@http://localhost:8082/remoteEntry.js',
                productModule: 'products@http://localhost:8081/remoteEntry.js'
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