import React from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  // FormLabel,
  // RadioGroup,
  // Radio,
  } from '@material-ui/core';



// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//     '& p': {
//       fontSize: '.5rem',
//     },
//   },
//
// }));

// export default function CheckboxList() {
//   const classes = useStyles();
//
//   return (
//     <div>
//     <List className={classes.root}>
//     <Typography style={{fontSize: '10px', backgroundColor: '#F6F8FF', color: '#7857FF', marginRight: '25px', height: '40px', textAlign: 'center', paddingTop: '30px'}}>
//       + CREATE TASK
//     </Typography>
//          <List component="nav" className={classes.root}>
//       <ListItem button>
//         <FormControlLabel
//           value="bottom"
//           control={<Checkbox color="primary" />}
//         />
//           <li>
//             <Typography
//               style={{marginBottom: '-10px'}}
//               color="textSecondary"
//               display="block"
//               variant="caption"
//             >Birdseye Application
//             </Typography>
//             <ListItemText primary="V1 Interview Scripts" />
//           </li>
//         <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
//         <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
//         <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
//         <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
//         <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
//       </ListItem>
//       <Divider style={{width: '335px'}} />
//       <ListItem button>
//         <FormControlLabel
//           value="bottom"
//           control={<Checkbox color="primary" />}
//         />
//           <li>
//             <Typography
//               style={{marginBottom: '-10px'}}
//               color="textSecondary"
//               display="block"
//               variant="caption"
//             >Birdseye Application
//             </Typography>
//             <ListItemText primary="Review Scripts" />
//           </li>
//         <Typography color="textSecondary" style={{fontSize: '10px', position: 'absolute', right: '50px'}}>Today</Typography>
//         <ListItemText style={{fontSize: '.5rem', marginTop: '11px', position: 'absolute', right: '50px'}} secondary="8:00 am" />
//         <img style={{height: '20px', width: '18px', position: 'absolute', right: '30px'}} alt='' src='./images/taskIcon.png' />
//       </ListItem>
//       <Divider style={{width: '335px'}} />
//       </List>
//       </List>
//       </div>
//     )
//   }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F2F4F5',
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: 'none',
    },
}))

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} style={{margin: 'none', width: '0%'}}>
        <Grid container justify="flex-end" style={{position: 'absolute', top: '64px'}}>
            <Grid item>
               <div style={{width: '600px'}}>
                  <List className={classes.root}>
                  <Typography style={{fontSize: '10px', backgroundColor: '#F6F8FF', color: '#7857FF', height: '40px', textAlign: 'center', paddingTop: '30px'}}>
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
                    </List>
                    </List>
                    </div>
            </Grid>

            <Grid  item>
               <div style={{marginLeft: '20px', marginRight: '20px', width: '400px'}}>
                  <List className={classes.root}>
                  <Typography style={{fontSize: '10px', backgroundColor: '#F6F8FF', color: '#7857FF', height: '40px', textAlign: 'center', paddingTop: '30px'}}>
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
                    </List>
                    </List>
                    </div>
            </Grid>


        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
