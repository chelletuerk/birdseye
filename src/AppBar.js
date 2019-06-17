import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
  '& input[type="text"], textarea': {
    backgroundColor: '#7857FF',
    width: '100%',
  },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  style={{ height: 64, backgroundColor: '#061584', boxShadow: 'none', flexDirection: 'inherit'}}>
        <Typography component="h1" style={{width: '300px', minWidth: '300px', fontSize: '30px', color: '#061584', backgroundColor: '#ffffff', paddingLeft: '35px', paddingTop: '10px'}}>
        <span>Tasks</span>
        </Typography>
        <Toolbar style={{width: '100%'}}>
          <Typography className={classes.title} variant="h6" noWrap>
            <img style={{marginTop: '10px', marginLeft: '-13px', marginRight: '10px'}} alt='' height='65px' width='70px' src='./images/whiteLogo.png'/>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
              style={{width: '30vw', borderRadius: '2px', backgroundcolor: '#7857FF'}}
            />
          </div>
            <Typography style={{width: '60px', fontStyle: 'italic', fontSize: '10px', color: '#7857FF', marginRight: '10px', marginLeft: '19vw'}}>10 Days Left</Typography>
            <Typography style={{fontSize: '10px', textDecoration: 'underline', marginRight: '5px'}}>Upgrade</Typography>
            <img style={{float: 'right'}} alt='' src='./images/settings.png' />
        </Toolbar>
      </AppBar>
    </div>
  );
}
