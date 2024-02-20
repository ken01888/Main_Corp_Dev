// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const nodeExternals = require("webpack-node-externals");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');





const isProduction = "development";

const stylesHandler = MiniCssExtractPlugin.loader;

const $FRONTEND = {
  mode: 'development',
  entry: {
    frontend: './src/index.tsx', // file to enter into
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
    asyncChunks: true,

  },

  devtool: 'inline-source-map',

  devServer: {
    compress: true,
    open: true,
    port: 4000,
    historyApiFallback: true,


  },


  plugins: [
    new NodePolyfillPlugin(),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/service-worker.ts",
      swDest: "service-worker.js",
      maximumFileSizeToCacheInBytes: 50000000
    }),
    new HtmlWebpackPlugin({
      template: './Client/index.html', hash: false,
      favicon: './Client/favicon.ico',
      minify: 'auto',
      inject: true,
      meta: {

        'viewport': 'content=width=device-width, initial-scale=1',
        'description': 'KMC Inc provides a range of B2B services tailored to meet diverse business needs across various sectors. Our services include inventory management, nutritional analysis, business funding, lead generation, and more. We are committed to delivering personalized solutions to our clients while upholding standards of professionalism, reliability, and quality service. Additionally, we prioritize the wellbeing of stakeholders.',
        "theme-color": "#849FD1",
        "facebook-domain-verification": "hr1ncpfxe8yuk1tyvpcww99ucsobbi",
      },


    }),


    new MiniCssExtractPlugin(),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: 'https://www.kcminc.io' // can modify `static` to another name or get it from `process`
    }),
    new WebpackManifestPlugin({
      seed: {
        short_name: "Kcm Inc",
        name: "K.C. Morris Inc A Stakeholder Intelligence Corporation",
        icons: [
          {
            src: "favicon.ico",
            sizes: "48x48",
            type: "image/x-icon"
          },
          {
            src: "Large512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            "src": "Large512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ],
        display_override: ["window-control-overlay", "minimal-ui"],
        display: "standalone",
        theme_color: "#849FD1",
        background_color: "#ffffff",
        prefer_related_applications: true,
        id: '/',
        scope: 'https://www.kcminc.io/',
        start_url: '/'
      }

    }
    ),

    new HtmlWebpackTagsPlugin({

      scripts: [
        {
          path: 'service-worker.js',
          append: true,
        },
      ]
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "Client/*.ico",
          to: "[name][ext]",
        },
        {
          from: "Client/*.png",
          to: "[name][ext]",
        },
        {
          from: "Client/*.txt",
          to: "[name][ext]",
        },
        {
          from: "Client/*.js",
          to: "[name][ext]",
        },
      ],
    }),

  ],
  module: {

    rules: [

      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.front.json',
          transpileOnly: true
        }
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader',]
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
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'javascript/auto',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,

        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
        },
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
    path: path.resolve(__dirname, 'compile_backend'),
    clean: true
  },

  module: {
    rules: [{
      test: /\.ts?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        configFile: 'tsconfig.back.json',
        transpileOnly: true
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
  externals: [nodeExternals(), {
    react: 'React',
    'react-dom': 'ReactDOM',
  }]
}
module.exports = () => {
  if (isProduction == 'production') {
    // $FRONTEND.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    return [$FRONTEND, $BACKEND]

  } else {
    return [$FRONTEND, $BACKEND]

  }
};

