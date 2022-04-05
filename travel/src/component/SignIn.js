import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://eshan-naik.netlify.app/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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

export default function SignIn({setUserName,setLoginUser}) {
  const classes = useStyles();

  // const {user,setUser] = userState({
  //   Username:"",
  //   Password:"",
  // })
  let navigate = useNavigate();
  const [Username,setEmail] = useState('');
  const [Password,setPassword] = useState('');

  const validateForm = async () => {
    return Username.length > 0 && Password.length > 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // var data = JSON.stringify({
    //     "collection": "sls",
    //     "database": "myFirstDatabase",
    //     "dataSource": "Cluster0",
    //     "projection": {
    //         "_id": 1
    //     }
    // });
                
    // var config = {
    //     // method: 'post',
    //     // url: 'https://data.mongodb-api.com/app/data-xziqh/endpoint/data/beta/main/signin',
    //     // headers: {
            // 'Content-Type': 'application/json',
            // 'Access-Control-Request-Headers': '*',
            // 'api-key': '92wPoOkYVA4OPbjB9SS7CuSsGkbk5o4jxUyb8yrlfunnFL08Q1ATk8kvB1iTCdY3'
    //     // },
    //     data : data
    // };
            
    // axios(config)
    //   .then(function (response) {
    //       console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //       console.log(error);
    //   });

    

    // let r = await fetch (
    //   'https://data.mongodb-api.com/app/data-xziqh/endpoint/data/beta/main/signin',{
    //   mode: 'no-cors',
    //   method: 'post',
    //   body: JSON.stringify({Username,Password}),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Request-Headers': '*',
    //     'api-key': '92wPoOkYVA4OPbjB9SS7CuSsGkbk5o4jxUyb8yrlfunnFL08Q1ATk8kvB1iTCdY3'
    //   }
    // })

    let r = await fetch(
      '/main/signin',{
        method: "post",
        body: JSON.stringify({Username,Password}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    // .then(r => console.log(r.json()))
    // .then(r => {
    //   alert(r.msg)
    //   setLoginUser(r.res)
    //   setUserName(r.name)
    //   setEmail("");
    //   setPassword("");
    // })

    r = await r.json();
    if(r){
      alert(r.msg)
      setLoginUser(r.res)
      setUserName(r.name)
      setEmail("");
      setPassword("");
    }

    let path = "/main/add"
    navigate(path)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value = {Username}
            onChange = {(e) => setEmail(e.target.value)}
            type = "email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {Password}
            onChange = {(e) => setPassword(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled = {!validateForm}
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="/main/forgot" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/main/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}