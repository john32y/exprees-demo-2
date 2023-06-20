import express from "express"
import cors from "cors"
import { addNewFlower, getFlowers } from "./src/flowers.js"
const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())


app.get("/flowers", getFlowers)
app.post("/flowers", addNewFlower)

app.listen(PORT, () => {
console.log(`Listening on http://localhost:${PORT}...`)

})