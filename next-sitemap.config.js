const siteMetadata = require('./src/utils/siteMetaData');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: siteMetadata.siteUrl,
    generateRobotsTxt: true,
    sitemapSize: 7000,
  }