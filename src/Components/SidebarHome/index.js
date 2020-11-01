import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Display from '../MainDisplay/index.js';

const currencies = [
    {
        value: 'KinderGarten',
        label: 'KinderGarten',
    },
    {
        value: '1st Grade',
        label: '1st Grade',
    },
    {
        value: '2nd Grade',
        label: '2nd Grade',
    },
    {
        value: '3rd Grade',
        label: '3rd Grade',
    },
    {
        value: '4th Grade',
        label: '4th Grade',
    },
    {
        value: '5th Grade',
        label: '5th Grade',
    },
    {
        value: '6th Grade',
        label: '6th Grade',
    },
    {
        value: '7th Grade',
        label: '7th Grade',
    },
    {
        value: '8th Grade',
        label: '8th Grade',
    },
    {
        value: '9th Grade',
        label: '9th Grade',
    },
    {
        value: '10th Grade',
        label: '10th Grade',
    },
    {
        value: '11th Grade',
        label: '11th Grade',
    },
    {
        value: '12th Grade',
        label: '12th Grade',
    }

];


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            flexGrow: 1,
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



const Search = () => {

    const classes = useStyles();
    const [gradeSelection, setGrade] = React.useState('');

    const handleChange = (event) => {
        setGrade(event.target.value);

    };




    return (
        <div className={classes.root}>
          
            <Grid container spacing={3} style={{width:'90%', margin:'auto'}}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>  <Typography variant="h2">
                Search for Main lesson suggestions 
            </Typography></Paper>
                </Grid>
                <Grid item xs={12} sm={4} style={{width:'35v'}}>
                    <Paper className={classes.paper}>  <form noValidate autoComplete="off">

                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={gradeSelection}
                            onChange={handleChange}
                            helperText="Please select your Grade"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}> 
                    <Display grade={gradeSelection}/>
                    </Paper>
                </Grid>
            </Grid>


        </div>
    )

}
export default Search;