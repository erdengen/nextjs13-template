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
    domains: [
      "cdn.sorsware.com",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sorsware.com',
        port: '',
        pathname: '/perspective/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.theculturetrip.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
}

module.exports = nextConfig
