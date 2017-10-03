const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The name brand is required']
  },
  rol : {
    type : String,
    enum : ["Admin", "Older Brother", "Younger Brother"],
    default : "Younger Brother"
  },
  email:String,
  password: {
    type: String,
    required: [true, 'The password brand is required']
  },
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
