const HtmlWebPackPlugin = require("html-webpack-plugin")


module.exports = {
    devtool : "source-map",
    entry: "./src/index.js",
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/, // regex para indicar teste de todos os arquivos que tenham .js e .jsx no nome
            exclude: /node_modules/,
            use: {loader: "babel-loader"}
            },
            {
                test: /\.html$/,
                use: [{ loader : "html-loader"}]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader"]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx",]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        })
    ],
};

// as configuraçoes usadas foram retiradas da documentação do webpack
// o resolve trata de que arquivos o webpack vai trabalhar
// a parte de templete indica aonde sera exportado o codigo apos o webpack terminar com ele( no caso o index.html)