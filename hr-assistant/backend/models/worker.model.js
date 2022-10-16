const { default: mongoose } = require('mongoose');
const mpngoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
    
    fullName:{
        type:String,
        required:true
    },departament:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    
    experience:{
        type:String,
        required:true
    }

},{
    timestamps:true
});

const Worker=mongoose.model('Worker',workerSchema);

module.exports=Worker;