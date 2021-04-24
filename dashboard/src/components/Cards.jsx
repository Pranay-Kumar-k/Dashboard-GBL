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
menu:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    flexFlow:"row wrap",
    margin:"2% 0% 2% -10%",
  },
  root: {
    background:"#00e6ac",
    opacity:"0.8",
    margin:"5%",
    padding:"5%",
    minWidth:300,
    maxWidth:500,
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
                <Grid item xl={2} lg={2} md={6} sm={6} xs={12}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Button className={classes.Icon}>
                                <NoteAddIcon style={{color:"white",}}/>
                            </Button>
                        </CardContent>
                        <Button variant="contained" size="medium" style={{background:"white",color:"#00e6ac",fontWeight:"bold"}}>Case Upload</Button>
                    </Card>
                </Grid>
                <Grid item xl={2} lg={2} md={6} sm={6} xs={12}>
                    <Card className={classes.root} style={{background:"#1a53ff"}}>
                        <CardContent>
                            <Button className={classes.Icon} style={{background:"#4d79ff"}}>
                                <DescriptionIcon style={{color:"white",}}/>
                            </Button>
                        </CardContent>
                        <Button variant="contained" size="medium" style={{background:"white",color:"#1a53ff",fontWeight:"bold"}}>Generate Report</Button>
                    </Card>
                </Grid>
                <Grid item xl={2} lg={2} md={6} sm={6} xs={12}>
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
