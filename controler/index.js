const express = require("express");

const user = require("../model/model");

async function handlegetuser(req,res){
    const User = await user.find({});
    return res.send(User);
};

async function handlepost(req,res){
   const body = req.body;
   const result = await user.create({
    first_name : body.first_name,
    last_name : body.last_name,
    email : body.email,
    gender : body.gender,
   }); 
   console.log(result);
   return res.json({status :"sucess"});

};

async function handlegetbyid(req,res){
    const User =await user.findbyId(req.params.id);
    return res.json(User);
};

async function handleupdateuserbyid(req,res){
    await user.findByIdAndUpdate(req.params.id,{});
    return res.json({status : "sucess"});
};

async function handledeleteuserbyid(req,res){
    await user.findByIdAndDelete(req.params.id);
    return res.json({status : "sucess"});
};

module.exports = {
    handlegetbyid,
    handlegetuser,
    handleupdateuserbyid,
    handledeleteuserbyid,
    handlepost,
};