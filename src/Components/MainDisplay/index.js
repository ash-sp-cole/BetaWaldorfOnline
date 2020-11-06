import { Divider, Button, Container, Typography, Paper, Grid, GridList } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteFromSaved, addToSaved, getSaved } from "../../Actions/savedActivities";
import Axios from "axios";
import CardProp from "./CardDisplayProp";
import "./styles.css";

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





        if (this.state.apiCalled === false) {
            return (
                <div>
                    <Typography variant="h4"  component="p">
                        Main Lesson Suggestions
        </Typography>
                    <h1> {this.props.savedActivities}</h1>
                    <Divider />
                    <Button variant="contained" color="secondary"
                        onClick={handleApiCall}
                    >
                        CAll API
                           </Button>


                </div>
            )
        }



        else if (this.state.apiCalled === true) {

            return (
                <div  style={{ margin: 'auto' }}>
                    <Typography variant="h4"  component="p">
                        Main Lesson Suggestions
        </Typography>
                    <Divider />

                    <h1> {this.props.savedActivities}</h1>
              
                    <Divider />
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                      
                        alignItems="flex-start"
                    >
                        {this.state.responseArr.map((data, index) => {
                            return (

                                <Grid item xs={12} sm={6} md={6} lg={4} key={index}  style={{ margin: 'auto' }}>
                                    <Paper elevation={14}  style={{ margin: 'auto' }}>
                                        <CardProp
                                         style={{ margin: 'auto'
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