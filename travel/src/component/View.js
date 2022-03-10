import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';

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

export default function View() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          View a Log
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
            label="Date"
            name="Date"
            autoComplete="Date"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>
          
        </form>
      </div>
    </Container>
  );
}