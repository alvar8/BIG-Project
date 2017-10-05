const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'The name brand is required']
  },
  role : {
    type : String,
    enum : ["Admin", "Tutor", "Student"],
    default : "Student"
  },
  email:String,
  password: {
    type: String,
    required: [true, 'The password brand is required']
  },
  refToBrother:{
    type: String,
    default:""
  },
  message:[{type: String}],
  picture: {
    pic_path: String,
    pic_name: String
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
