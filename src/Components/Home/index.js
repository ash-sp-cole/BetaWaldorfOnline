
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Display from '../MainDisplay/index.js';
import { connect } from 'react-redux';
import { deleteFromSaved, addToSaved, getSaved, callApi } from "../../Actions/savedActivities";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import { Divider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ModalTriggerSearch from "../ModalTriggerSearch/index.js";
import TermsModal from "../Disclaimer/index.js";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import searchLogo from "../../Assets/smallSearch.JPG";


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
    },



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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));



const Home = ({ dispatchAddToSaved }) => {

    const classes = useStyles();


    const handleChange = (event) => {

        let choice = event.target.value;

        dispatchAddToSaved(choice)


    };



    //   const handleApiCall = async () =>{


    // dispatchCallApi()
    //       }



    return (
        <div className={classes.root}>

            <Grid container spacing={3} style={{ width: '90%', margin: 'auto' }}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4} style={{ margin: 'auto', borderRadius:'25px'  }} >
                    <Paper className={classes.paper} elevation={22}>  <form noValidate autoComplete="off">
                        <Typography variant="h4" style={{ marginBottom: '15px' }}>

                            <ModalTriggerSearch/>


                        </Typography>


                        <TermsModal />

                        <Grid item xs={4} sm={4}>

                        </Grid>

                    </form>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm={6} lg={8}>
                    <Paper className={classes.paper} elevation={14} >
test
                    </Paper>
                </Grid>



            </Grid>


        </div>
    )

}

const mapStatetoProps = (state) => {

    return {
        savedActivities: state.store.userChoice
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddToSaved: (e) => dispatch(addToSaved(e)),
        dispatchCallApi: (choice) => dispatch(callApi(choice))
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Home);