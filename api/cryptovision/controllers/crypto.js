'use strict'
const axios = require('axios')

module.exports = {
  index: async ctx => {
    var limit = ctx.query.limit
    const res = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=89024383-44de-4936-8e08-0d1e60e6b386&limit=${limit}&convert=USD`)
    ctx.send(res.data)

  },
};
