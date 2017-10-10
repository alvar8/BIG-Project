const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const selfieSchema = new mongoose.Schema({
  refToOlderBrother:{type:Schema.Types.ObjectId, ref:'User'},
  refToYoungerBrother:{type:Schema.Types.ObjectId, ref:'User'},
  selfie:String,
  name:String,
},{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }

});

const Selfie = mongoose.model('Selfie', selfieSchema);

module.exports = Selfie;
