import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import { useState } from 'react';
import { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from "@material-ui/core/CardActions";
// import Button from "@material-ui/core/Button";
import './View.css'

class View extends Component{
  constructor(props) {
    super(props);
    this.state = {
        logs:[],
        _id:'',
        Title: '',
        Description: '',
        Date_added: ''
    };
    let Username = props.name
    console.log(JSON.stringify({Username}))
    fetch(
      'http://localhost:8001/main/view/logs/:Username',{
        method: "post",
        body: JSON.stringify({Username}),
        headers: {
          'Accepted': 'applciation/json',
          'Content-Type': 'application/json'
        }
      })
        .then(data => data.json())
        .then((data) => {
            // console.log(data);
            this.setState({
                logs: data
            })
        });

    
      // console.log(this.props.name)
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {    
  //   this.setState({value: event.target.value});  
  // }   

  render() {
    return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      
      <div className="paper">

        <Typography component="h1" variant="h4">
          <center>View Logs</center>
          <br></br>
        </Typography>

        <form className="form">
          <Grid
            container
            spacing={3} 
          >
            {this.state.logs.map(l => (
              <Grid item xs={12} md={6} lg={4} key = {l._id}>
                <Card sx={{ maxWidth: 345}} elevation={15}>
                  <CardContent>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                      {l.Title}
                    </Typography>
                    <Typography  component="div">
                      {l.Date_added}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="textSecondary">
                      <br></br>{l.Description}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small" outline="true" color="secondary" onClick={this.handleChange}>
                    Edit
                  </Button>
                </CardActions> */}
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