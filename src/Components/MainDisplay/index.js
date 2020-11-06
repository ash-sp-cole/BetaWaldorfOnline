import { Divider, Button, Container, Typography, Paper, Grid, IconButton,  GridList } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteFromSaved, addToSaved, getSaved } from "../../Actions/savedActivities";
import Axios from "axios";
import CardProp from "./CardDisplayProp";
import "./styles.css";
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


class Display extends Component {

    state = {
        responseArr: [],
        apiCalled: false
    }


    render() {


        console.log(this.state.responseArr)
        const handleApiCall = () => {
            if (this.props.savedActivities === "") {
                alert("please select a search option")
            }
            else {
                Axios.get("http://localhost:3001/mainlesson")
                    .then(data => this.setState({
                        responseArr: data.data,
                        apiCalled: true

                    }))
                    .then(console.log(this.state.responseArr))
            }
        }

        const handleClearSearch = () =>{
            this.setState({
                apiCalled:false
            })
        }



        if (this.state.apiCalled === false) {
            return (
                <div>
                    <Typography variant="h4"  color='textPrimary' >
                        Welcome to The Middle Space
        </Typography>
                    <Typography variant="h6" component="p" style={{marginBottom:'25px'}}>
                        A Resource for Educators and Parents.
                       <br>
                        </br>
                       To view main lesson suggestion or content help , please use our interactive search feature.
        </Typography>
        <Typography variant="h4" color='textPrimary'  style={{marginBottom:'25px'}}>
                        Selection : {this.props.savedActivities}
        </Typography>
                    <Divider />
                  
                    <IconButton aria-label="delete"
                        onClick={handleApiCall}
                    >

                        <Button
                            variant="contained"
                            color="default"

                            startIcon={<SearchIcon />}
                        >
                            Search
 </Button>
                    </IconButton>

                </div>
            )
        }



        else if (this.state.apiCalled === true) {

            return (
                <div style={{ margin: 'auto' }}>
                    <Typography variant="h4" component="p">
                        Main Lesson Suggestions
        </Typography>
                    <Divider />
                    <IconButton aria-label="delete"
                                    onClick={handleClearSearch}
                                  
                                >
                                    <Button
                                        variant="contained"
                                        color="default"

                                        startIcon={<HighlightOffIcon />}
                                    >
                                        Clear Search
 </Button>
                                </IconButton>

                    <Divider />
                    <Grid
                        container
                        spacing={3}
                        direction="row"

                        alignItems="flex-start"
                    >
                        {this.state.responseArr.map((data, index) => {
                            return (

                                <Grid item xs={12} sm={6} md={6} lg={4} key={index} style={{ margin: 'auto' }}>
                                    <Paper elevation={14} style={{ margin: 'auto' }}>
                                        <CardProp
                                            style={{
                                                margin: 'auto'
                                            }}
                                            elevation={16}
                                            grade={data.grade}
                                            lessonType={data.lessonType}
                                            imageUrl={data.images}
                                            songs={data.songs}
                                            verses={data.verses}
                                            poems={data.poems}
                                            stories={data.stories}
                                        />
                                    </Paper>

                                </Grid>


                            )

                        })}
                    </Grid>


                </div>
            )


        }



    }
}


const mapStatetoProps = (state) => {

    return {
        savedActivities: state.store.globalSaved,
        apiStoredData: state.store.apiMainLessonQuery
    }


}


export default connect(mapStatetoProps, { getSaved, deleteFromSaved, addToSaved })(Display);