const router = require('express').Router();
const { request, response } = require('express');
let Departament = require('../models/departament.model');

router.route('/').get((request,response)=>{
    Departament.find()
        .then(departaments=>response.json(departaments))
        .catch(error=>response.status(400).json(`server find departament error: ${error}`));

});

router.route('/add').post((request,response)=>{
    const depart = request.body.departament;
    
    const newDepart= new Departament({depart});
    newWorker.save()
        .then(()=>response.json('departament added!'))
        .catch(error=>response.status(400).json(`server add departament error: ${error}`));

})

module.exports=router;