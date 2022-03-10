import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import { Component } from 'react';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddLog(){
  const classes = useStyles();

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Date_added, setDate] = useState("");

  const handleOnSubmit = async (e) =>{
    e.preventDefault();

    let result = await fetch (
      'http://localhost:8001/main/add',{
        method: "post",
        body: JSON.stringify({Title,Description,Date_added}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    // console.log(result);
    result = await result.json();
    console.log(result);
    if(result){
      console.log("Data is added");
      setTitle("");
      setDescription("");
      setDate("");
    }
  }

  return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <AddIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Add a Log
        </Typography>

        <form className={classes.form} noValidate>

        {/* <Grid container>
            <Grid item xs>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="From"
                label="From"
                name="From"
                autoFocus
                />
            </Grid>

            <Grid item xs>
              <Link href="#" variant="body2">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="To"
                    label="To"
                    name="To"
                    autoFocus
                />
              </Link>
            </Grid>
        </Grid> */}
        
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Date"
            // label="Date"
            name="Date"
            autoComplete="Date"
            autoFocus
            value={Date_added}
            onChange = {(e) => setDate(e.target.value)}
            type="date" 
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Title"
            label="Title"
            name="Title"
            autoComplete="Title"
            autoFocus
            value={Title}
            onChange = {(e) => setTitle(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Description"
            label="Description"
            type="Description"
            id="outlined-multiline-static"
            multiline
            rows={7}
            value={Description}
            onChange = {(e) => setDescription(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={handleOnSubmit}
          >
            Add the Log
          </Button>
          
        </form>
      </div>
    </Container>
  );
}