import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    background:"#00e6ac",
    // padding:"30px",
  },
  menu:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    margin:"5%"
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
                                <DescriptionIcon style={{color:"white",}}/>
                            </Button>
                        </CardContent>
                        <Button variant="contained" size="medium" style={{background:"white",color:"#00e6ac",fontWeight:"bold"}}>Case Upload</Button>
                    </Card>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Button className={classes.Icon}>
                                <DescriptionIcon style={{color:"white",}}/>
                            </Button>
                        </CardContent>
                        <Button variant="contained" size="medium" style={{background:"white",color:"#00e6ac",fontWeight:"bold"}}>Case Upload</Button>
                    </Card>
                </Grid>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Button className={classes.Icon}>
                                <DescriptionIcon style={{color:"white",}}/>
                            </Button>
                        </CardContent>
                        <Button variant="contained" size="medium" style={{background:"white",color:"#00e6ac",fontWeight:"bold"}}>Case Upload</Button>
                    </Card>
                </Grid>
           </Grid>
       </Grid>
    )
}