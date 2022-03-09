import Log from './tables.js';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Cors from 'cors';

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
    let result = await myData.save()
    result = result.toObject();
    if(result){
            console.log(result)
            res.send("item saved to database");
        }
    else{
            res.status(400).send(err);
        }
})

// app.delete('/main/remove/:date',(req,res) => {
//     Log.find({_date : req.params.id})
//         .then(item => {
//             res.send("item removed from database");
//         })
//         .catch(err => {
//             res.status(400).send("unable to remove item from database");
//         });
// })

app.get('/main/view',(req,res) => {
    Log.find().sort({date:-1})
        .then(item => {
            res.json(item);
        })
        .catch(err => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            res.status(400).send("unable to remove item from database");
        });
})

app.listen(port,() => {
    console.log("Server listening on port:" + port)
})