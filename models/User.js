const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'first name is required'],
        validate: [/^[A-Za-z]+$/, 'No numbers or special characters allowed. Please fill in First Name again'],
        minlength: 2,
    },
    lastName: {
        type: String,
        required: [true, 'last name is required!'],
        validate: [/^[A-Za-z]+$/, 'No numbers or special characters allowed. Please fill in Last Name again'],
        minlength: 2,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        validate: [/^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/, 'at least one @ and one . required']
        // regex from regular-expressions.com/email
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;

// ●	I want the user to provide their first and last name.
    // ○	First and last name is required
    // ○	Name cannot contain a number
    // ○	Name cannot contain a special character
    // ○	Name must be at least two letters
// ●	I want the user to provide their email address.
    // ○	Email address is required
    // ○	The email address must contain exactly one @
    // ○	The email address must contain at least one period (.)