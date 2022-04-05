import axios from 'axios';

var data = JSON.stringify({
    "collection": "sls",
    "database": "myFirstDatabase",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-xziqh/endpoint/data/beta/main/signin',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': '92wPoOkYVA4OPbjB9SS7CuSsGkbk5o4jxUyb8yrlfunnFL08Q1ATk8kvB1iTCdY3'
    },
    data : data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
