const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

const AuthRouter = require("./routes/authRoutes");
const { dbConnect } = require("./utils/db");

//Initalize dotenv and load env files
dotenv.config();

const app = express();
const port = process.env.PORT;

// use for server
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(bodyParser.json());
app.use(cookieParser())

//Routes
app.use('/api', AuthRouter)


app.get("/", (req, res) => res.send("Multi Vendor Ecommerce Backend Server is Up and running"));

// Connect to Db
dbConnect();

// Start server
app.listen(port, () => console.log(`Server is running on port ${port}`));