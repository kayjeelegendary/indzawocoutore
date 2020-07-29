var mongoose = require('mongoose');

var GroupSchema = new mongoose.Schema({

  groupName:    String ,
  email:   String ,
  name:   String ,
  surname :   String ,
  password:   String ,
  address:   String ,
  lat:   String ,
  lng:   String ,
  path:   String 

  
  
  
});

module.exports = mongoose.model('Group', GroupSchema);
