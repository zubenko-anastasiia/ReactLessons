const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const contactSchema=new Schema({
    name:{type:String,required:true,minlength:2,maxlength:50},
    lastName:{type:String,required:true,minlength:2,maxlength:50},
    phoneNumber:{type:String,required:true,minlength:10,maxlength:11},
    notes:{type:String,maxlength:150}},

    {timestamps:true}
);

const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;