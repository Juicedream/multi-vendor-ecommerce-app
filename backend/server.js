const express = require("express");
const dotenv = require("dotenv");

//Initalize dotenv and load env files
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;




// Start server
app.listen(port, () => console.log(`Server is running on port ${port}`));