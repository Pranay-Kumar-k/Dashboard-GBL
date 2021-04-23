import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles({
  root: {
    background:"#00e6ac",
    padding:"5%",
    margin:"5%",
    minWidth:320,
    opacity:"0.8"
  },
  menu:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    margin:"2%"
  },
  Icon:{
    background:"#00ffbf",
    padding:"15px",
  }
});

export default function Cards() {
    const classes = useStyles();
    return (
       <Grid>
           <Grid container className={classes.menu}>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Button className={classes.Icon}>
                                <NoteAddIcon style={{color:"white",}}/>
                            </Button>
                        </CardContent>
                        <Button variant="contained" size="medium" style={{background:"white",color:"#00e6ac",fontWeight:"bold"}}>Case Upload</Button>
                    </Card>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className={classes.root} style={{background:"#1a53ff"}}>
                        <CardContent>
                            <Button className={classes.Icon} style={{background:"#4d79ff"}}>
                                <DescriptionIcon style={{color:"white",}}/>
                            </Button>
                        </CardContent>
                        <Button variant="contained" size="medium" style={{background:"white",color:"#1a53ff",fontWeight:"bold"}}>Generate Report</Button>
                    </Card>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className={classes.root} style={{background:"#ff8533"}}>
                        <CardContent>
                            <Button className={classes.Icon} style={{background:"#ffa366"}}>
                                <DraftsIcon style={{color:"white"}}/>
                            </Button>
                        </CardContent>
                        <Button variant="contained" size="medium" style={{background:"white",color:"#ffa366",fontWeight:"bold"}}>Case Upload</Button>
                    </Card>
                </Grid>
           </Grid>
       </Grid>
    )
}
