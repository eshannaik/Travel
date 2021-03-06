import Log from './tables.js';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import SL from './login.js';
import bcrypt from 'bcrypt';
// import axios from 'axios';
// require("dotenv").config()
import dotenv from 'dotenv';

dotenv.config();
// const bcrypt = require('bcrypt');
// const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../travel/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../travel/build', 'index.html'));
    });
}


// const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/travel', {
//     useNewUrlParser: true
//     }).then(() => {
//     console.log('Database connected sucessfully !')
//     },
//     error => {
//         console.log('Database could not be connected : ' + error)
//     }
// )

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

app.delete('/main/remove',async (req,res) => {
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

app.post('/main/view/logs',async (req,res) => {
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
    // console.log(uname)
    // console.log(pword)

    if(!uname || !pword){
        return res.status(400).json({msg:'Please enter all fields',res:false})
    }

    SL.findOne({Username : uname})
        .then( user => {
            // console.log(bcrypt.compare(pword,user.Password))
            if(!user){
                return res.status(400).json({msg:'User does not exists',res:false})
            }
            else{
                bcrypt.compare(pword,user.Password)
                    .then(isMatch => {
                        // console.log(isMatch)
                        // console.log(user.Password)
                        // console.log(pword)
                        if(!isMatch)
                            return res.status(400).json({ msg:'Invalid credentials',res:false});
                        else
                            return res.status(400).json({msg:'Logged in',res:true,name:uname})
                    })
            }
        })
})

app.post('/main/signup',async(req,res) => {
    // console.log(req.body)
    
    const uname = req.body.Username;
    const pword = req.body.Password;

    if(!uname || !pword){
        return res.status(400).json({msg: ' Please enter all fields',res:false})
    }

    SL.findOne({Username : uname})
        .then(user => {
            if(user){
                res.status(400).json({msg:'User already exists',res:false})
            }
            else{
                if(pword.length > 7){
                    const myData = new SL(req.body);

                    bcrypt.genSalt(10,(err,salt) => {
                        bcrypt.hash(pword,salt,(err,hash)=>{
                            if(err)
                                throw err;

                            myData.Password = hash;
                            myData.Name = pword;
                            // console.log(myData.Password)
                            let result = myData.save();

                            if(result){
                                // console.log(result)
                                res.status(400).json({msg:'User added',res:true});
                            }
                            else{
                                res.status(400).json({msg : err,res:false});
                            }
                        })
                    })                    
                }
                else{
                    res.status(400).json({msg:"Password must be atleast 8 characters long",res:false})
                }
            }
        })
})

app.post('/main/forgot',async(req,res) => {
    const uname = req.body.Username;
    const pword = req.body.Password;

    if(!uname || !pword){
        return res.status(400).json({msg: 'Please enter your username',res:false})
    }

    if(pword.length > 7){
        SL.findOne({Username:uname})
            .then(user => {
                if(!user){
                    res.status(400).json({msg:'User doesn\'t exists',res:false})
                }
                else{
                    bcrypt.genSalt(10,(err,salt) => {
                        bcrypt.hash(pword,salt,(err,hash)=>{
                            if(err)
                                throw err;

                            req.body.Password = hash;

                            SL.findByIdAndUpdate({_id : user._id},req.body)
                                .then(u => {
                                    if(u){
                                        res.json({msg :"Your password has been updated",res:true})
                                    }
                                }
                            )
                        })
                    }) 
                }
            }
        )
    }
    else{
        res.status(400).json({msg:"Password must be atleast 8 characters long",res:false})
    }
})

app.delete('/main/removeUser',async (req,res) => {
    const u = req.body.Username
    // console.log(u)
    SL.findOne({Username : u})
    .then( item => {
        // console.log(item.Username)
        if(item){
            SL.deleteOne({Username: u})
            .then(i => {
                res.json({msg :"User remove from the database",res:true});
            })
        }
        else{
            res.status(400).json({msg :"No user with this username exists",res:false});
        }
    });
})

app.listen(port,() => {
    console.log("Server listening on port:" + port)
})