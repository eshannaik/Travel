import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import MinusIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delete_log } from './Redux/actions/generalActions'

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

export default function RemoveLog(props) {
  const classes = useStyles();

  let dispatch = useDispatch();
  let mesg = '';

  const [Title,setTitle] = useState("");

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    let Username = props.name
    let result = await fetch(
      'http://localhost:5000/main/remove',{
        method: "delete",
        body: JSON.stringify({Username,Title}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    result = await result.json();
    if(result){
      alert(result.msg)
      // console.log(result.msg);
      setTitle("");
      mesg = result.msg
    }

    dispatch(delete_log({
      Username: Username,
      Title: Title,
      msg: mesg,
    }))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <MinusIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Remove a Log
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
              id="Title"
              label="Title"
              name="Title"
              autoFocus
              value={Title}
              onChange = {(e) => setTitle(e.target.value)}
            />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onHandleSubmit}
          >
            Remove from Log
          </Button>
          
        </form>
      </div>
    </Container>
  );
}