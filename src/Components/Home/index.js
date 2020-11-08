
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { deleteFromSaved, addToSaved, getSaved, callApi } from "../../Actions/savedActivities";
import Typography from "@material-ui/core/Typography";
import ModalTriggerSearch from "../ModalTriggerSearch/index.js";
import TermsModal from "../Disclaimer/index.js";
import HomeGallery from "../HomeGallery/index.js";
import DailyCard from "../DailyCard";


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





    return (
        <div className={classes.root}>

            <Grid container spacing={3} style={{ width: '90%', margin: 'auto' }}>
                <Grid item xs={12}>

                </Grid>


                <Grid item xs={12} sm={6} md={6} lg={6} style={{ margin: 'auto', borderRadius: '25px' }} >
                    <Paper className={classes.paper} elevation={22}>  <form noValidate autoComplete="off">
                        <Typography variant="h4" style={{ marginBottom: '15px' }}>

                            <ModalTriggerSearch />


                        </Typography>


                        <TermsModal />

                        <Grid item xs={4} sm={4}>

                        </Grid>

                    </form>
                    </Paper>

                </Grid>

                
                <Grid item xs={12} sm={6} lg={6} style={{margin:'auto'}}>
                    <Paper className={classes.paper} elevation={14} >
                    <DailyCard/>
                    
                    </Paper>
                    <Paper className={classes.paper} elevation={14} 
                        style={{marginTop:'10%'}}
                    >
                    
                    
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