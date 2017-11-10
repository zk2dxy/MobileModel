# App

> App 
### [https://github.com/zk2dxy/MobileModel.git](https://github.com/zk2dxy/MobileModel.git)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

> Use packages
```
"axios": "^0.16.2",
"babel-plugin-component": "^0.10.1",
"better-scroll": "^1.4.1",
"lockr": "^0.8.4",
"lodash": "^4.17.4",
"mint-ui": "^2.2.9",
"moment": "^2.18.1",
"node-uuid": "^1.4.8",
"stylus": "^0.54.5",
"stylus-loader": "^3.0.1",
"vue": "^2.5.2",
"vue-router": "^3.0.1",
"vuex": "^2.4.1",
"vue-lazyload": "^1.0.3"
```
> Webpack plugin 

```
# webpack.dev.conf.js => 

...声明 = >
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

...定义 = >

new BundleAnalyzerPlugin({
// Can be `server`, `static` or `disabled`.
// In `server` mode analyzer will start HTTP server to show bundle report.
// In `static` mode single HTML file with bundle report will be generated.
// In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
analyzerMode: 'server',
// Host that will be used in `server` mode to start HTTP server.
analyzerHost: 'localhost',
// Port that will be used in `server` mode to start HTTP server.
analyzerPort: 9999,
// Path to bundle report file that will be generated in `static` mode.
// Relative to bundles output directory.
reportFilename: 'report.html',
// Module sizes to show in report by default.
// Should be one of `stat`, `parsed` or `gzip`.
// See "Definitions" section for more information.
defaultSizes: 'parsed',
// Automatically open report in default browser
openAnalyzer: true,
// If `true`, Webpack Stats JSON file will be generated in bundles output directory
generateStatsFile: true,
// Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
// Relative to bundles output directory.
statsFilename: 'stats.json',
// Options for `stats.toJson()` method.
// For example you can exclude sources of your modules from stats file with `source: false` option.
// See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
statsOptions: null,
// Log level. Can be 'info', 'warn', 'error' or 'silent'.
logLevel: 'info'
})
```

> Vue lazy load
```
  <img style="margin:0 auto;display: block" v-lazy="imgSrc" width="240" height="120"/>
```

