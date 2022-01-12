const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const addressSchema = new Schema({
   city:String,
   state:String,
   pincode:Number,
   _id :false
});

const companySchema = new Schema({
   name:String,
   catchPhrase:String,
   bs :String,
   _id :false
   
})

const userSchema = new Schema({
   
   name: String,
   email:String,
   phone:Number,
   website:String,
   address:addressSchema,
   company:companySchema,
   todos: [{
      type: Schema.Types.ObjectId,
      ref: 'Todo'
   }],

},
{timestamps: true});

// userSchema.virtual('todolist', {
//     ref: 'Todo', //The Model to use
//     localField: '_id', //Find in Model, where localField 
//     foreignField: 'user', // is equal to foreignField
//  });

// userSchema.set('toObject', { virtuals: true });
// userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);