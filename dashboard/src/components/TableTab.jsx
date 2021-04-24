import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import { Grid, Paper, Tabs } from '@material-ui/core';
import Filter from './Filter';
import Table from "./Table";

const data = require("../data.json");
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft:"50px",
    marginRight:"45px",
  },
  label:{
      fontWeight:"600",
      flexGrow:1
  },
}));

export default function TableTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
        <TabContext value={value}>
            <Grid item xl={12} lg={12} md={11} sm={12} xs={12}>
                <Paper square position="static" elevation={3}>
                    <Tabs 
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="icon tabs example"
                    >
                        <Tab label="New/Unread cases" value="1" className={classes.label}/>
                        <Tab label="Outstanding And closed cases" value="2" className={classes.label}/>
                        <Filter />
                    </Tabs>
                </Paper>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
                <TabPanel value="1">
                    {data && <Table data={data} />}
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </Grid>
      </TabContext>
    </Grid>
  );
}