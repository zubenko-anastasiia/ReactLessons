//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const departSchema = new Schema({
    departament:{
        type:String,
        required:true,
        unique:true
    }

},{
    timestamps:true
});

const Departament=mongoose.model('Departament',departSchema);

module.exports=Departament;