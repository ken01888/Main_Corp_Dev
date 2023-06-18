// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const nodeExternals = require("webpack-node-externals");


const isProduction = "development";

const stylesHandler = MiniCssExtractPlugin.loader;

const $FRONTEND = {
  mode: 'development',

  entry: {
    frontend: './src/FRONTEND/index.tsx', // file to enter into
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'compile_frontend'),
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
  performance: {
    hints: false,
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
        configFile: 'tsconfig.front.json'
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
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            "@babel/preset-typescript",]
        }
      }
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader',
      },],
    }, 
    {
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
    extensions: [".tsx", ".ts", ".jsx", ".js", ".png", ".svg"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
    }
  },
  

};
const $BACKEND = {
  mode: 'development',
  entry: './src/BACKEND/index.ts',
  devtool: 'inline-source-map',
  output: {
      filename: 'app.js',
      path: path.resolve(__dirname,'compile_backend'),
      clean: true
  },

  module: {
      rules: [{
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
              configFile: 'tsconfig.back.json'
          }
      }]
  },
  resolve: {
      extensions: ['.ts', '.js']
  },

  target: 'node',
  node: {
      __dirname: false
  },
  externals: [nodeExternals()]
}
module.exports = () => {
  if (isProduction == 'production') {
    $FRONTEND.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
   return [$FRONTEND,$BACKEND]

  }
  // return [$FRONTEND, $BACKEND];
};

