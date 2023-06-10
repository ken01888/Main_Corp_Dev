// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
// const nodeExternals = require("webpack-node-externals");


const isProduction = process.env.NODE_ENV = "development";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  mode: 'development',
  entry: {
    frontend: './src/FRONTEND/index.tsx',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    asyncChunks: true,

  },

  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    open: true,
    port: 3000,
    historyApiFallback: true,

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', hash: false,
      filename: './index.html',
      favicon: './public/favicon.ico',
      minify: 'auto',
      inject: true
    }),

    new MiniCssExtractPlugin(),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: '/' // can modify `static` to another name or get it from `process`
    })


  ],
  module: {
    rules: [{
      test: /\.(ts|tsx)$/i,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        configFile: 'tsconfig.multi.json'
      }
    },
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader',]
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      type: 'javascript/auto'
    },

    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript",]
        }
      }
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader',
      },],
    }, {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },


      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".tsx", ".ts", ".jsx", ".js", ".less", ".png", ".svg", ".sass"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
    }
  },


};

// module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";

//     config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
//   } else {
//     config.mode = "development";
//   }
//   return config;
// };

module.exports = config
