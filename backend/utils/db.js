const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Load dotenv files
dotenv.config();

module.exports.dbConnect = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('Database Connected🟢')
    }catch (error) {
        console.log(error.message)
    }
}