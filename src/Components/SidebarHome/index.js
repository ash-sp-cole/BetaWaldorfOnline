import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Display from '../MainDisplay/index.js';
import {connect} from 'react-redux';
import {deleteFromSaved, addToSaved, getSaved} from "../../Actions/savedActivities";


const gradeChoices = [
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
const seasonChoices = [
    {
        value: 'Spring',
        label: 'Spring',
    },
    {
        value: 'Summer',
        label: 'Summer',
    },
    {
        value: 'Autumn',
        label: 'Autumn',
    },
    {
        value: 'Winter',
        label: 'Winter',
    }

];
const other = [
    {
        value: 'Festival',
        label: 'Festival',
    },
    {
        value: 'Author',
        label: 'Author',
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



const Search = ({savedActivities, dispatchAddToSaved}) => {

    const classes = useStyles();
  

    const handleChange = (event) => {
        
        let choice = event.target.value;
      
        dispatchAddToSaved(choice)
        
    };




    return (
        <div className={classes.root}>

            <Grid container spacing={3} style={{ width: '90%', margin: 'auto' }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>  <Typography variant="h3">
                        Search for Main lesson suggestions
            </Typography></Paper>
                </Grid>
                <Grid item xs={12} sm={4} style={{ width: '35v' }}>
                    <Paper className={classes.paper}>  <form noValidate autoComplete="off">

                        <TextField
                            id="standard-select-currency"
                            select
                            label="Grade"
                            value=""
                            onChange={handleChange}
                            helperText="Please select your Grade"
                        >
                            {gradeChoices.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            id="standard-select-currency"
                            select
                            label="Season"
                                value=""
                            onChange={handleChange}
                            helperText="Choose by Season"
                        >
                            {seasonChoices.map((option) => (
                                 <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            id="standard-select-currency"
                            select
                            label="Other"
                            value=""
                            onChange={handleChange}
                            helperText="Select your option"
                        >
                            {other.map((option) => (
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
                        <Display/>
                    </Paper>
                </Grid>
            </Grid>


        </div>
    )

}

const mapStatetoProps = (state) =>{

    return {
        savedActivities: state.store.userChoice
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchAddToSaved:   (e) => dispatch(addToSaved(e))
    }
  }


export default connect (mapStatetoProps, mapDispatchToProps ) (Search);