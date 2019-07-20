let glob = require("glob");
let path = require("path");
let pagePath = path.resolve(__dirname, `./src/pages/*/*.html`);
let bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let targetName = process.argv.length > 3 ? process.argv[process.argv.length-1] || '' : ''
let entry = function() {
  let entryHtml = glob.sync(pagePath);
  let entryMap = {};
  entryHtml.forEach(filePath => {
    let fileName = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    entryMap[fileName] = {
      entry: "src/pages/" + fileName + "/main.js",
      template: "src/pages/" + fileName + "/" + fileName + ".html",
      fileName: fileName + ".html"
    };
  });
  if(targetName && entryMap[targetName]) {
    let assignBuild = {}
    assignBuild[targetName] = entryMap[targetName]
    return assignBuild;
  }else {
    return entryMap;
  }
};
const configureWebpack = {
  devServer: {
    open: true,
    proxy: {
      "/json": {
        target: "http://localhost:8082"
      }
    }
  },
  resolve: {
    alias: {
      "@assets": "@/assets",
      "@view": "@/views",
      "@components": "@/components",
      "@util": "@/util"
    }
  },
  plugins: [new bundleAnalyzerPlugin()],
  devtool: "cheap-module-eval-source-map"
};

module.exports = {
  configureWebpack,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [__dirname + "/src/assets/css/*.less"]
    }
  },
  pages: entry()
};
