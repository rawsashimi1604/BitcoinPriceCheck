const express = require("express")
const app = express()
const path = require("path");
const { nextTick } = require("process");
const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "/public")))


const curr = require("./currencies")    // Import Coinbase Available Currencies
const fiat = require("./fiat")          // Import Coinbase Availble Fiat

app.use((req, res, next) => {
    console.log(curr)
    next()
})

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})