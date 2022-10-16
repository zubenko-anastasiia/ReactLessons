const router = require('express').Router();
const { request, response } = require('express');
let Worker = require('../models/worker.model');

router.route('/').get((request,response)=>{
    Worker.find()
        .then(users=>response.json(users))
        .catch(error=>response.status(400).json(`server find worker error: ${error}`));

});

router.route('/add').post((request,response)=>{
    const FullName = request.body.fullName;
    const departament = request.body.departament;
    const dateOfBirth = request.body.dateOfBirth;
    const experience = request.body.experience;

    const newWorker= new Worker({FullName,departament,dateOfBirth,experience});
    newWorker.save()
        .then(()=>response.json('Worker added!'))
        .catch(error=>response.status(400).json(`server add worker error: ${error}`));

})

module.exports=router;