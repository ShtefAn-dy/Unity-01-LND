//import card from "../data/card-item.json" assert {type: 'json'};
import card from "../data/card-item.json";

const isProd = process.argv.includes("--prod");
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
    removeComments: isProd
  },

  gulppug: {
    pretty: isDev,
    data:{
      card: card
    },
  },
  webpack: {
    mode: isProd ? "production" : "development"
  },
  imagemin: {
    verbose: true
  },
  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  },
  favicons: {
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleSratup: false
    },
    path: "img/favicon"
  }

}