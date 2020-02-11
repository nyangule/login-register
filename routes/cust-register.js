 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 const datb = require('../database/database');


 router.post ('/cust_register',(req,res)=>{
  
   
    let customer={
      "name":req.body.name,
      "surname":req.body.surname,
      "email":req.body.email,
      "password":req.body.password,
      "cell_phone":req.body.cell_phone,
      "address":req.body.address
      
    }
    datb.query('INSERT INTO tblcust SET ?',customer, function (error, results, fields) {
    if (error) 
    {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })

    }
    else
    {
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
  
    });
  });
 
  module.exports =router;
