const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app=express();
const port =process.env.PORT||5000;

app.use(cors());
app.use(express.json());

//db connection(mongodb-atlas)
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{
    useNewUrlParser:true, useUnifiedTopology:true
});
//
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection is OK');
});

const contactRouter=require('./api_routes/contact_api');
app.use('/contacts',contactRouter);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})