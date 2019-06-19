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
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
    <List className={classes.root}>
    <Typography style={{fontSize: '10px', backgroundColor: '#F6F8FF', color: '#7857FF', marginRight: '25px', height: '40px', textAlign: 'center', paddingTop: '30px'}}>
      + CREATE TASK
    </Typography>
         <List component="nav" className={classes.root}>
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
