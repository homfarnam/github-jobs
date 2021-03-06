const withCss = require("@zeit/next-css")
const withPurgeCss = require("next-purgecss")
const withSass = require("@zeit/next-sass")
const withTM = require("next-transpile-modules")
const path = require('path')

const withBabelMinify = require("next-babel-minify")({
  comments: false,
})

module.exports = withBabelMinify({
  webpack(config, options) {
    return config
  },
})

module.exports = withCss(
  withPurgeCss({
    purgeCssPaths: [
      "pages/**/*",
      "components/**/*", // also scan other-components folder
    ],
  }),
)

module.exports = withCss(
  withSass(
    withTM({
      transpileModules: ["react-bulma-components"],
      sassLoaderOptions: {
        includePaths: ["./components"],
      },
    }),
  ),
)

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      "/": { page: "/" },
    }
  },
}

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    // Important: return the modified config
    return config
  },
}


module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}