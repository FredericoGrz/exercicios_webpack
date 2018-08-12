//Arquivo de Configuracao do WebPack

//Diz que Requer as bibliotecas do WebPack
const webpack = require('webpack')
//Requer a biblioteca para conseguir ler arquivos css
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//Expoe o objeto que representa toda a configuracao do webpack
module.exports = {
    //Arquivo de ponto de entrada de toda aplicacao
    entry: './ex/index.js',
    //Onde sera gerado a saida do arquivo js
    output: {
        //Caminho (__dirname variavel do node que mostra o caminho atual)
        path: __dirname + '/public',
        //Nome do arquivo
        filename: './bundle.js'
    },
    //Servidor que sera criado
    devServer: {
        //Porta que sera criado
        port: 8080,
        //Pasta onde estara os arquivos que ele ira gerado
        contentBase: './public'
    },
    plugins: [
        //Qual arquivo css ele ira gerar depois de compilar
        new ExtractTextPlugin('app.css')
    ],
    module: {
        //Cara que vai carregar os arquivos
        loaders: [{
            //Ira carregar apenas arquivos js
            test: /.js?$/,
            //Ira usar o loader do babel
            loader: 'babel-loader',
            //Nao ira ler os js dentro da pasta node modules
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },//Novo Loader para CSS
    {
        //Apenas arquivos .css
        test: /\.css$/,
        //Loaders necessarios para arquivos css
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
    }
}