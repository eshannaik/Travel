import Log from './tables.js';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Cors from 'cors';
import SL from './login.js';

// const express = require('express')
const app = express()
const port = process.env.PORT || 8001

app.use(express.json())
app.use(Cors());

// const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/travel', {
    useNewUrlParser: true
    }).then(() => {
    console.log('Database connected sucessfully !')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)
// const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/',(req,res) => {
//     // console.log('H')
//     res.status(500).json({message:"Error"})
//     // res.send('Hi')
// })

app.post('/main/add',async (req,res) => {
    const myData = new Log(req.body);
    if(!req.body.Title){
        return res.status(400).json({msg : "Please fill Title field"});
    }
    let result = await myData.save()
    result = result.toObject();
    if(result){
        // console.log(result)
        res.json({msg :"item saved to database"});
    }
    else{
        res.status(400).json({msg : err});
    }
})

app.delete('/main/remove/:Username/:Title',async (req,res) => {
    const u = req.body.Username
    const t = req.body.Title
    // console.log(t)
    Log.findOne({Username : u,Title : t})
    .then( item => {
        // console.log(item.Username)
        if(item){
            Log.deleteOne({Title: t})
            .then(i => {
                res.json({msg :"Item remove from the database"});
            })
        }
        else{
            res.status(400).json({msg :"No log with that title exists"});
        }
    });
})

app.post('/main/view/logs/:Username',async (req,res) => {
    const u = req.body.Username
    // console.log(u)
    Log.find({Username : u})
    .exec(function(err,l){
        if(err){
            res.json({msg : "Error retrieving logs:" + err })
        }else{
            res.json(l);
        }
    });
})

app.get('/main/view/items',async (req,res) => {
    Log.find({})
    .exec(function(err,l){
        if(err){
            res.json({msg : "Error retrieving logs"})
        }else{
            res.json(l);
        }
    });
})

app.get('/main/view/user',async (req,res) => {
    SL.find({})
    .exec(function(err,l){
        if(err){
            console.log("Error retrieving logs")
        }else{
            res.json(l);
        }
    });
})

app.post('/main/signin',async(req,res) => {
    const uname = req.body.Username;
    const pword = req.body.Password;

    if(!uname || !pword){
        return res.status(400).json({msg: ' Please enter all fields',res:false})
    }

    SL.findOne({Username : uname})
        .then( user => {
            if(!user){
                return res.status(400).json({msg:'User does not exists',res:false})
            }
            else{
                if(pword == user.Password)
                    return res.status(400).json({msg:'Logged in',res:true,name:uname})
                else
                    return res.status(400).json({ msg: 'Invalid credentials',res:false});
            }
        })
})

app.post('/main/signup',async(req,res) => {
    // console.log(req.body)
    const myData = new SL(req.body);
    const uname = req.body.Username;
    const pword = req.body.Password;

    if(!uname || !pword){
        return res.status(400).json({msg: ' Please enter all fields'})
    }

    SL.findOne({Username : uname})
        .then(user => {
            if(user){
                res.status(400).json({msg:'User already exists'})
            }
            else{
                if(pword.length > 8){
                    let result = myData.save();

                    if(result){
                        // console.log(result)
                        res.status(400).json({msg:'User added'});
                    }
                    else{
                        res.status(400).json({msg : err});
                    }
                }
                else{
                    res.status(400).json({msg:"Password must be atleast 8 characters long"})
                }
            }
        })
})

app.post('/main/forgot',async(req,res) => {
    const uname = req.body.Username;

    if(!uname){
        return res.status(400).json({msg: ' Please enter your username'})
    }

    SL.findOne({Username : uname})
        .then(user => {
            if(user){
                const pword = user.Password
                res.json({msg :"Your password is : " + pword})
            }
            else{
                res.status(400).json({msg:"Password must be atleast 8 characters long"})
            }
        })
})

app.listen(port,() => {
    console.log("Server listening on port:" + port)
})