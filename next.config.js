/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: false,
  compiler:{
    styledComponents:{
      displayName:true,
      ssr:true,
      fileName:true,
      topLevelImportPaths:[],
      meaninglessFileNames: ["index"],
      cssProp:true,
      namespace:"",
      minify:false,
      transpileTemplateLiterals:false,
      pure:false,

    }
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sorsware.com',
        port: '',
        pathname: '/perspective/**',
      },
    ],
  },
}

module.exports = nextConfig
