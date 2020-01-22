const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
// import ExtractTextPlugin from 'mini-css-extract-plugin';
 
module.exports={
 
    entry:__dirname+"/react-client/src/index.js",
    module:{
 
     rules:[
         {          
          test:/\.(js|jsx)$/,
          exclude:/node_modules/,
          loader:"babel-loader"
         },
         {
             test:/\.css$/,
 
             use:["style-loader","css-loader"]
         },
 
{
    test:/\.(jpeg|gif|jpg|png|svg)$/,
    use:["file-loader"]
}] },
 
output:{
 
 
    path:__dirname+'/dist',
    filename:"bundle.js"
},
 
devServer:{
contentBase:__dirname+'/dist',
historyApiFallback:true,
hot:true,
proxy:{
    "/api": "http://localhost:8000"
}
},
 
plugins:[
     new HTMLWebpackPlugin(
    {
        template:'./dist/index.html',
        inject:'body'
    }
),

new webpack.HotModuleReplacementPlugin()
 
]
 
 
}