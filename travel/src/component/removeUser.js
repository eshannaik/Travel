import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  {useState} from 'react';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://travel-log-eshan-naik.netlify.app/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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

export default function RemoveUser() {
  const classes = useStyles();

  const [Username,setUsername] = useState('');

  const validateForm = async () => {
    return Username.length > 0;
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    let result = await fetch(
      'http://localhost:5000/main/removeUser',{
        method: "delete",
        body: JSON.stringify({Username}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    result = await result.json();
    if(result){
      alert(result.msg)
      console.log(result.msg);
      setUsername("");
    }

    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Remove User
        </Typography>
        <br></br>
          <h5>Please re-enter your email address to remove your account</h5>
        <form className={classes.form}>
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
            value={Username}
            onChange = {(e) => setUsername(e.target.value)}
            type="username" 
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled = {!validateForm}
            onClick={onHandleSubmit}
          >
            Remove User
          </Button>

          {/* <Grid container>
            <Grid item xs>
              <Link href="/main/signin" variant="body2">
                Go back
              </Link>
            </Grid>
            <Grid item>
              <Link href="/main/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}

        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}