const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // This plugin handles all the HTML stuff
// This plugin extracts the app's css and injects it in a single file
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");
const environment = process.env.NODE_ENV;

// ========= Check what environment we are in and set the values acordingly ========= \\

let cssConfig;

const cssDev = [ // for dev environment
    "style-loader",
    "css-loader",
    "sass-loader",
];
const cssProd = ExtractTextPlugin.extract({ // for prod environment
    fallback: "style-loader",
    use: ["css-loader", "sass-loader"],
    publicPath: "../", // This helped getting the images in the css files ( url(bla bla) )
});

switch (environment) {
case "local":
    cssConfig = cssDev;
    break;

case "development":
    cssConfig = cssDev;
    break;

default:
    cssConfig = cssProd;
    break;
}

// =================== Configuration Object =================== \\

module.exports = {
    entry: {
        app: ["babel-polyfill", "whatwg-fetch", `${SRC_DIR}/app/index.jsx`],
    },
    output: {
        path: DIST_DIR,
        filename: "js/[name].bundle.js", // THis goes to the dist folder and contains all the compiled js code
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(s?)css$/,
                use: cssConfig,
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix: true
                }
            },
            {
                test: /\.jsx?$/, // replace by jsx
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                    // "file-loader?name=[name].[ext]&outputPath=img/&publicPath=img/",
                    // this will collect all the img and move them to dist
                    "file-loader?name=[hash:6].[ext]&outputPath=img/",
                    "image-webpack-loader", // image optimization
                ],
            },
            {
                test: /\.mp3$/,
                use: "file-loader?name=audio/[name].[ext]"
            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: "file-loader?name=fonts/[name].[ext]",
            },
        ],
    },
    devServer: { // Development server configuration
        contentBase: DIST_DIR,
        compress: true,
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 9000,
        hot: true,
        stats: "minimal",
        open: true,
        historyApiFallback: true,
        openPage: "", // Workaround to prevent the addition of "undefined" in the URL
        // Link to issue on webpack-dev-server version: https://github.com/webpack/webpack-dev-server/issues/960
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Test Project", // The title for the HTML file
            minify: {
                collapseWhitespace: true, // Minify the HTML
            },
            hash: true, // Add a hash at the end of the script/link URL
            chunks: ["app"], // this is just in case we run multiple entries. It picks up only app's chunks
            template: `${SRC_DIR}/index.html`
        }),
        new ExtractTextPlugin({
            filename: "./css/[name].min.css",
            disable: environment === "local",
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
