const express = require("express")
const app = express()
const path = require("path");
const { nextTick } = require("process");
const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "/public")))

// Support POST requests
app.use(express.urlencoded({extended: true})); 
app.use(express.json());     


const currencies = require("./currencies")    // Import Coinbase Available Currencies
const fiat = require("./fiat")           // Import Coinbase Availble Fiat

const coinbase = require("./coinbase")  // Wrapper object to contain all functions needed for Coinbase API

// app.use((req, res, next) => {
//     console.log(curr)
//     next()
// })


app.get("/", async (req, res) => {

    const currPrice = await coinbase.getPrice("BTC", "USD")

    const data = {
        "coin": "BTC",
        "curr": "USD",
        "price": currPrice,
        "allCurrencies": currencies,
        "allFiat": fiat,
    }

    res.render("index.ejs", data)
})

app.post("/", async (req, res) => {

    console.log(req.body)
    const currPrice = await coinbase.getPrice(req.body.coin, req.body.curr)
    console.log(`${req.body.coin + req.body.curr}: ${currPrice}`);

    const data = {
        "coin": req.body.coin,
        "curr": req.body.curr,
        "price": currPrice,
        "allCurrencies": currencies,
        "allFiat": fiat,
    }

    res.render("index.ejs", data)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})