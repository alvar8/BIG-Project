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
  point:{
    type:Number,
    default:0
  },
  password: {
    type: String,
    required: [true, 'The password brand is required']
  },
  alias:String,
  email:String,
  birthday:Date,
  refToBrother:{type:Schema.Types.ObjectId, ref:'User'},
  picture: String,
  pictureName:String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
