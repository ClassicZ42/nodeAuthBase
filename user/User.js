var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  date: Date
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');