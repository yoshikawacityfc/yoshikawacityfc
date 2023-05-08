/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://yoshikawa-fc.com/",
  generateRobotsTxt: process.env.ALLOW_ROBOT_TXT === "true",
  sitemapSize: 7000,
  transform: async (config, path) => {
    if (exclude.includes(path)) {
      // nullを返すとサイトマップから除外できる
      return null;
    }

    return {
      // エンコードしたURLを返す
      loc: encodeURI(path),
      // 現在日時を反映
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    };
  },
};

const exclude = ["/contact/complete"];
