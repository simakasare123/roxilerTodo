const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const todoSchema = new Schema({
   
   Title: String,
   completed:String,
   id:Number,
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
},
{timestamps: true});

todoSchema.methods.toJSON =
function(){
   var obj = this.toObject();
   delete obj.user;
   return obj;
}



module.exports = mongoose.model('Todo', todoSchema);