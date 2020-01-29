const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/collabathon';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Mongodb connected...')
  })
  .catch(err => console.log(err));

module.exports = {
  User: require('./User')
}