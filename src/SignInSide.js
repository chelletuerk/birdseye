import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    '& input': {
      height: '25px',
      color: 'black',
      backgroundColor: 'white',
      boxShadow: 'none',
      border: 'solid lightgray 1px',
      borderRadius: '1px',
      marginTop: '-10px',
      marginBottom: '12px',
      paddingLeft: '15px',
      fontFamily: 'Verdana, Geneva, sans-serif',
      fontSize: '12px',
    },
    '& button': {
      color: 'black',
      backgroundColor: 'white',
      height: '35px',
      fontSize: '10px',
      boxShadow: 'none',
      border: 'solid black 1px',
      borderRadius: '1px',
        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
        },
    },
      '& a': {
        color: 'gray',
        lineHeight: '6',
        fontSize: '8px',
        textDecoration: 'none',
      },
      '& h1': {
        fontFamily: 'Verdana, Geneva, sans-serif',
        fontSize: '20px',
      },
  },
  image: {
    backgroundImage: 'url(./images/loginImage.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(10, 10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    fontSize: '12px',
    fontFamily: 'Verdana, Geneva, sans-serif',
  },
  avatar: {
    margin: theme.spacing(-6, 0, 6),
    height: '35px',
    width: '40px',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));



export default function SignInSide() {
  const classes = useStyles()
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar
            src="./images/birdseye.png"
            className={classes.avatar}
          />
          <Typography component="h1" variant="h5">
            Welcome to Birdseye!
          </Typography>
          <form className={classes.form} noValidate>
            Email Address
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{disableUnderline: true}}
            />Password
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{disableUnderline: true}}
            />
            <Router>
              <Button
                component={Link} to="/tasks"
                type="submit"
                fullWidth
                className={classes.submit}
                onClick={() => {window.location.replace('/tasks')}}
              >SIGN IN
              </Button>
            </Router>
            <Button
              fullWidth
            >CREATE AN ACCOUNT
            </Button>
            <Grid container
              direction="column"
              alignItems="center"
            >
              <Grid item xs>
                <Link href="/" variant="body2">
                  FORGOT PASSWORD
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
