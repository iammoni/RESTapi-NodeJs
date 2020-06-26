const express=require('express');
const router=express.Router();
const Person=require('C:/Users/DHANDA/Desktop/nodeRESTAPI/models/person.js');

router.get('/',(req,res)=>{
Person.find()
.then(response=>{
    if(response)
    res.send(response);
})
.catch(err=>console.log(err));


});

router.post('/',(req,res)=>{

    var newPerson=new Person({
        name:req.body.name,
        username:req.body.username
    });

    newPerson.save(newPerson)
    .then(response=>res.send(response))
    .catch(err=>console.log(err));
    
   //res.redirect('http://google.com');
});


module.exports=router;

