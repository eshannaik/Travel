import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import MinusIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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

export default function RemoveLog() {
  const classes = useStyles();

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
        <Grid container>
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
        </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Remove from Log
          </Button>
          
        </form>
      </div>
    </Container>
  );
}