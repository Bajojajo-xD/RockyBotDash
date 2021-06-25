const info = require('./info')
require('dotenv').config()

module.exports = {

    beta: true,

    releasedate: info.releasedate,
    version: info.version,
    github: info.github,
    changelog: info.changelog,
    author: info.author,

    discord: {
      betatoken: process.env.BETATOKEN,
      token: process.env.TOKEN,
      myBetaID: process.env.myBetaID,
      myID: process.env.myID,
      BetaClientSecret: process.env.BETAclientSECRET,
      clientSecret: process.env.clientSECRET
    },

    dashboard: {
      domain: process.env.DOMAIN,
      port: process.env.PORT || 8080,
      usingCustomDomain: process.env.NotUseCustomDom?false:true
    }
}