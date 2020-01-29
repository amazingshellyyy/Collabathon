const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'first name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'last name is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],

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