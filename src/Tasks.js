import React from 'react';
import AppBar from './AppBar'
import Today from './Today';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Checkbox,
  Divider,
  FormControlLabel
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '335px',
    minWidth: '335px',
    // zIndex: '999',
    // position: 'absolute',
    // top: '55px',
    position: 'relative',
    '& p': {
      fontSize: '.5rem',
    },
  },
}));

export default function CheckboxList() {
  const classes = useStyles();

  return (
    <div>
    <AppBar />
    <List className={classes.root} style={{margin: 'none'}}>
    <Typography style={{fontSize: '10px', backgroundColor: '#F6F8FF', color: '#7857FF', height: '40px', textAlign: 'center', paddingTop: '30px'}}>
      + CREATE TASK
    </Typography>
         <List component="nav" style={{width: '335px'}} className={classes.root}>
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="V1 Interview Scripts" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="Review Scripts" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="Customer Map" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="V1 DOB to web" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="Order Business Cards" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="Schedule Dribble Post" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="Send Invites" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="UX & Wireframing" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
      <ListItem button>
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
        />
          <li>
            <Typography
              style={{marginBottom: '-10px'}}
              color="textSecondary"
              display="block"
              variant="caption"
            >Birdseye Application
            </Typography>
            <ListItemText primary="Prototye Creation" />
          </li>
        <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
        <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
        <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
      </ListItem>
      <Divider style={{width: '335px'}} />
    </List>
    </List>
    <Today />
    </div>
  )
}
