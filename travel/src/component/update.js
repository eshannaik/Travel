import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import { useState } from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './View.css'

class UpdateLog extends Component{
  constructor() {
    super();
    this.state = {
        logs:[],
        _id:'',
        Title: '',
        Description: '',
        Date_added: ''
    };

    fetch('http://localhost:8001/main/view')
        .then(data => data.json())
        .then((data) => {
            // console.log(data);
            this.setState({
                logs: data
            })
        });
  }   

  render() {
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      <div className="paper">

        <Typography component="h1" variant="h4">
          <center>View Logs</center>
          <br></br>
        </Typography>

        <form className="form" noValidate>
          <Grid
            container
            spacing={3} 
            columns={3}
            // direction="row"
          >
            {this.state.logs.map(l => (
              <Grid item xs={12} key = {l._id}>
                <Card sx={{ maxWidth: 345}}>
                  <CardContent>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                      {l.Title}
                    </Typography>
                    <Typography  component="div">
                      {l.Date_added}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="textPrimary">
                      <br></br>{l.Description}
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
            ))};
          </Grid>
        </form>

      </div>

    </Container> 

  )};
}

export default UpdateLog