let glob = require("glob");
let path = require("path");
let pagePath = path.resolve(__dirname, "./src/pages");

let entry = function() {
  let entryHtml = glob.sync(pagePath + "/*/*.html");
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
  return entryMap;
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
