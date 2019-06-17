import React, { memo } from 'react';
import { AppBar, Toolbar, Typography, Paper, Grid,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    '& AppBar': {
      backgroundColor: 'white',
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



export default function Tasks(props) {
const classes = useStyles()
return (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa'}}
  >
    <AppBar
      position="static"
      style={{ height: 64, backgroundColor: '#ffffff', boxShadow: 'none' }}
    >
    <Toolbar style={{ height: 64, width: '75%', backgroundColor: '#061584', paddingTop: '10px', position: 'absolute', right: '0', top: '0' }}>
      <Typography
        color="inherit">
        <img alt='' height='65px' width='70px'src='./images/whiteLogo.png'/>
      </Typography>
    </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
  )
}
