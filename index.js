import express from "express"
import axios from "axios"

const app = express()
const port = 3000

app.use(express.static("public"))

const API_URL = "https://meme-api.com/gimme"

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/get-meme", async (req, res) => {
    try {
        const result = await axios.get(API_URL)
        res.render("index.ejs", {meme: result.data})
    } catch (error) {
        res.render("index.ejs", {error: error.response.data})
    }
})

app.listen(port, () => {
    console.log("Server listened on port " + port + ".")
})