const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const messageSchema = new mongoose.Schema({
    refToOlderBrother:Schema.Types.ObjectId,
    refToYoungerBrother:Schema.Types.ObjectId,
    message:String,
    refToWriter:Schema.Types.ObjectId,
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
