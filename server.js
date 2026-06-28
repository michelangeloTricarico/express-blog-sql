const express = require("express")
const app = express()
const port = 3000
const postsRouter = require("./routers/postRouters.js")
const logRequest = require("./middleware/logRequest.js")
const serverError = require("./middleware/serverError.js")
const notFound = require("./middleware/notFound.js")


//register static asset
app.use(express.static("public"))
app.use(express.json())
app.use(logRequest)

//start the server listener
app.listen(port, () =>{console.log(`Server listening http://localhost:${port}`)})

// Routes definition
app.get("/",(req,res)=>{
    res.json({
        message: "Welcome in my server blog"
    })
})

app.use("/posts",postsRouter)

app.use(serverError)
app.use(notFound)