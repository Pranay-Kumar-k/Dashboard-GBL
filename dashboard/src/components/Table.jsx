import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.inherit,
      color: theme.palette.common.black,
      fontWeight:"600"
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const headings = [
    { id: 1, label: 'CASE NO.'},
    { id: 2, label: 'BRANCH' , options:["BRANCH 1", "BRANCH 2", "BRANCH 3"]},
    {id: 3,label: 'REPORTING METHOD',align: 'left',},
    {id: 4,label: 'DATE',align: 'left',},
    {id: 5,label: 'TIME',align: 'left',},
    { id: 6, label: 'CATEGORY', options:["Grievance", "Employment", "Security", "General"]},
    { id: 7, label: 'SUB CATEGORY', options:["Complaints","Query"]},
    { id: 8, label: 'PRIORITY', options:["High","Medium", "Low"]},
    { id: 9, label: 'NATURE', options:["Health","Transport", "Property"]},
    { id: 10, label: 'CASE MANAGER'},
    { id: 11, label: 'CASE REPORTER',options:["Tanner", "Clinton"]},
    { id: 12, label: 'CASE STATUS', options:["Not Prepared","Progress", "Completed"]},
  ];

const useStyles = makeStyles((theme) => ({
  root:{
      margin:"-2%",
      flexGrow:1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  bullet:{
      height:50,
      width:50,
      borderRadius:"50%",
      fill:"red"
  }
}));

export default function TableData({data}) {
    console.log(data,"TableData")
  const classes = useStyles();
  const rows =data;
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
              {headings && headings.map(({id,label,options}) => {
                return(<StyledTableCell key={id}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
                        <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        disableUnderline
                        style={{textDecoration:"none", border:"none"}}
                        >
                        <option aria-label="None" value="" />
                        {options && options.map((option) => {
                            return(<option value={option}>{option}</option>)
                        })}
                        </Select>
                    </FormControl>
                </StyledTableCell>)
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" style={{minWidth:150}}>
                <p>{row.case_number}</p>
              </StyledTableCell>
              <StyledTableCell>{row.branch}</StyledTableCell>
              <StyledTableCell>{row.reporting_method}</StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
              <StyledTableCell style={{minWidth:120}}>{row.time}</StyledTableCell>
              <StyledTableCell>{row.category}</StyledTableCell>
              <StyledTableCell>{row.sub_category}</StyledTableCell>
              <StyledTableCell>
                  <Button style={{background:(row.priority === "High") ? "red" : (row.priority === "Medium") ? "#ff8533" : "#f5b942",color:"white" }}>
                    {row.priority}
                    <Select
                    native
                    disableUnderline
                    label={row.priority}
                    >
                    <option aria-label="None" value="" />
                    </Select>
                </Button>
              </StyledTableCell>
              <StyledTableCell>{row.nature}</StyledTableCell>
              <StyledTableCell>{row.manager}</StyledTableCell>
              <StyledTableCell>{row.reporter}</StyledTableCell>
              <StyledTableCell style={{minWidth:120, display:"flex", flexDirection:"row", border:'none'}}>
                  <FiberManualRecordIcon color={row.status === "Not Prepared" ? "secondary": (row.status === "Progress") ? 'primary' : "standard" }/>
                  {row.status}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
