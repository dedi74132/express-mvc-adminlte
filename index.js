const express = require("express")
const app = express()
var methodOverride = require("method-override")
const path = require("path")
const con = require("./config/db.js")

// Using pug template engine
app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')

// connecting route to database
app.use(function (req, res, next) {
  req.con = con
  next()
})

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router
const defaultRouter = require("./routes/defaultRouter")
const userRouter = require("./routes/userRouter")

app.use(express.static(path.join(__dirname, 'public')))
// routing
app.use("/", defaultRouter)
app.use("/users", userRouter)

// starting server

app.listen(3000, () => console.log("App is listened by port 3000 and url http://localhost:3000"))