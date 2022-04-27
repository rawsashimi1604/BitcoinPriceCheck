/*
    Collection of functions used to access the coinbase API.
*/
const axios = require("axios");

// Get Price for specific fiat currencies based on selected cryptocurrency.
async function getPrice(coin, fiat) {
    const url = `https://api.coinbase.com/v2/exchange-rates?currency=${coin}`;
    return axios.get(url).then(resp => resp.data).then(resp => {
        rates = resp.data.rates;
        return parseFloat(rates[fiat]).toFixed(2);
    }).catch(err => {
        return null;
    })
}

module.exports = { getPrice }