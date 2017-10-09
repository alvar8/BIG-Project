const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const selfieSchema = new mongoose.Schema({
  refToOlderBrother:String,
  refToYoungerBrother:String,
  selfie:{
    type:String
  },
  name:String,
  date: { type: Date, default: Date.now },
},{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }

});

const Selfie = mongoose.model('Selfie', selfieSchema);

module.exports = Selfie;
