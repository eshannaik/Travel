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

class View extends Component{
  constructor() {
    super();
    this.state = {
        logs:[],
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
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {this.state.logs.map(l => (
              <Grid item xs={12} sm={6} md={12}>
                <Card sx={{ maxWidth: 345}}>
                  <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                      {l.Title}
                    </Typography>
                    <Typography  component="div">
                      {l.Date_added}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
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

export default View