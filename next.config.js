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
const withFonts = require('next-fonts')
const withImages = require('next-images')
const optimizedImages = require('next-optimized-images')
const withTM = require('next-transpile-modules')([
  'drei',
  'three',
  'postprocessing',
  'react-three-gui',
  'react-spring/three',
  '@react-spring/web',
  'three-trackballcontrols-ts',
])
// const withWorkers = require('@zeit/next-workers')

console.log('NextJs Config Environment:', process.env.NODE_ENV)

// const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
// const port = process.env.NODE_ENV === 'production' ? 8081 : 3000
// console.log('Client API is running on port', port, 'and protocol', protocol)

const nextConfig = {
  distDir: '_next',
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
    const { dev } = options
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        include: [path.resolve('components'), path.resolve('pages')],
        exclude: ['/node_modules/', '/.next/', '/out/'],
        options: {
          // Compile, but with a warning
          emitWarning: true,
        },
        loader: 'eslint-loader',
      })

      config.module.rules.push({
        test: /\.(frag|fragment|vert|vertex|glsl)$/,
        use: [
          {
            loader: 'glsl-shader-loader',
            options: {},
          },
        ],
      })
    }
    return config
  },
}

module.exports = withPlugins(
  [
    [withTM, {}],
    [withFonts, {}],
    [withImages, {}],
    [optimizedImages, {}],
  ],
  nextConfig
)
