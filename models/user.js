const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    dob: String,          
    address1: String,   
    address2: String,   
    city: String,       
    postalCode: String, 
    country: String,    
    phoneNumber: String,
    email: String,      
    userNotes: String   
});

userSchema.methods.setFormattedDob = function () {
    this.dob = this.dateOfBirth.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
