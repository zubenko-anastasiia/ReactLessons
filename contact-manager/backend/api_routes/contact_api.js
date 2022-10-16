const router = require('express').Router();
let Contact = require('../models/contact_model');
const { request, response } = require('express');

router.route('/').get((request,response)=>{
    Contact.find()
            .then(contacts=>response.json(contacts))
            .catch(error=>response.status(400).json(`Server get_contact-error:${error}`));

});

router.route('/add').post((request,response)=>{
    const Name=request.body.name;
    const LastName=request.body.lastName;
    const PhoneNumber=request.body.phoneNumber;
    const Notes=request.body.notes;

    const newContact=new Contact({Name,LastName,PhoneNumber,Notes});

    newContact.save()
                .then(contacts=>response.json('New contact succesfully added!'))
                .catch(error=>response.status(400).json(`Server add_contact-error:${error}`));
});

module.exports=router;
