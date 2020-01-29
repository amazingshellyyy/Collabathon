const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname, lastName: {
        type: String,
        required: [true, 'first name is required'],
        match: [/^[A-Za-z]+$/, 'No numbers or special characters allowed.'],
        minlength: 2,
    },
    // lastname: {
    //     type: String,
    //     required: [true, 'last name is required'],
    //     pattern: [/^[A-Za-z]+$/, 'No numbers or special characters allowed'],
    //     minlength: 2,
    //},
    email: {
        type: String,
        required: [true, 'email is required'],
        match: [/^[A-Za-z0-9._+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{3}$/, 'one @ and one . required']
        // regex from regular-expressions.com/email
    },
})

const user = mongoose.model('user', userSchema);

module.exports = user;

// ●	I want the user to provide their first and last name.
    // ○	First and last name is required
    // ○	Name cannot contain a number
    // ○	Name cannot contain a special character
    // ○	Name must be at least two letters
// ●	I want the user to provide their email address.
    // ○	Email address is required
    // ○	The email address must contain exactly one @
    // ○	The email address must contain at least one period (.)