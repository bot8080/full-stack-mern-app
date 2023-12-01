// Name: Abhinav Khanna
// C0873411

const mongoose = require('mongoose'); 
require('dotenv').config(); 

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB'); 
    } catch (error) {
        console.error('Error while connecting to MongoDB:', error); 
    }
};

module.exports = connectDB;
