/**
 * next.config.js
 * Next JS configuration file
 * The following helps to use multiple plugins
 * @see https://github.com/JerryCauser/next-compose
 */
/**
* Web Workers
* @see https://github.com/zeit/next-plugins/tree/master/packages/next-workers
* Using Fonts
* @see https://github.com/rohanray/next-fonts
* Environment variables
* @see https://stackoverflow.com/questions/50416138/nextjs-set-dynamic-environment-variables-at-the-start-of-the-application
*/

/**
 * Exclude tests and stories from being compiled.
 * @see https://github.com/zeit/next.js/issues/1914
 * via
 * excludeFile: ... (see below)
 */
const withPlugins = require('next-compose-plugins')
// const withImages = require('next-images')
// const withFonts = require('next-fonts')
// const optimizedImages = require('next-optimized-images')
const withTM = require('next-transpile-modules') // Useful for threejs modules
// const withWorkers = require('@zeit/next-workers')

console.log('NextJs Config Environment:', process.env.NODE_ENV)

// const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
// const port = process.env.NODE_ENV === 'production' ? 8081 : 3000
// console.log('Client API is running on port', port, 'and protocol', protocol)

const nextConfig = {
  // distDir: '_next',
  // serverRuntimeConfig: { // Will only be available on the server side
  //   wordpressApiUrl: process.env.WORDPRESS_API_URL
  // },
  // publicRuntimeConfig: { // Will be available on both server and client
  //   staticFolder: '/public',
  //   port: 8081 // The server port
  // },
  // pageExtensions: ['jsx', 'js'],
  // Removes the [BABEL] Note: The code generator has deoptimised the styling of
  compact: true,
  webpack: (config, options) => {
    const { entry: originalEntry } = config
    const { isServer, buildId, dev } = options
    // Fixes npm packages that depend on `fs` module
    // config.node = {
    //   fs: 'empty',
    // };

    if (dev) {
      // Skip tests and stories from being compiled during development
      // Note: This speeds up compilation.
      config.module.rules.push(
        {
          test: /\.(spec,test,stories)\.(js|jsx)$/,
          loader: 'ignore-loader'
        },
      )
    }

    // Load polyfills
    // @see https://github.com/zeit/next.js/blob/canary/examples/with-polyfills
    // config.entry = async () => {
    //   const entries = await originalEntry()
    //   if (
    //     entries['main.js'] &&
    //     !entries['main.js'].includes('./client/polyfills.js')
    //   ) {
    //     entries['main.js'].unshift('./client/polyfills.js')
    //   }
    //   return entries
    // }

    return config
  },
}

module.exports = withPlugins([
  [withTM, {
    transpileModules: [
      'three/examples/jsm/postprocessing',
      'three/examples/jsm/shaders',
      'three/examples/jsm/lights',
      'three/examples/jsm/loaders',
      // 'three/src/loaders',
      // 'react-spring/three',
      // 'lodash-es/flatten',
    ]
  }],
  // [withImages, {}],
  // [optimizedImages, {}],
  // [withFonts, {}],
  // [withCSS, {}],
  // [withWorkers, {
  //   workerLoaderOptions: { inline: true }
  // }],
], nextConfig)
