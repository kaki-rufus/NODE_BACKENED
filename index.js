const express = require("express")
const mongoose =  require("mongoose")
const dotenv = require("dotenv").config()
const errorHandler = require("./middleware/errorHandler") 
const connectDB = require("./config/dbConnection")

connectDB();

const app = express()

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`I am running on port ${port}`)
})
