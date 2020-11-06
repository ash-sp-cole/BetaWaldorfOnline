import { Divider, Button, Container, Grid, GridList } from "@material-ui/core";
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
                    <h1> Main Lesson Suggestions </h1>\
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
                <div>

                    <h1> Main Lesson Suggestions </h1>
                    <Divider />

                    <h1> {this.props.savedActivities}</h1>
                    <h2> grade = {this.state.responseArr[1].grade}</h2>
                    <Divider />
                    <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                style={{margin:'auto'}}
                alignItems="flex-start"
            >
                        {this.state.responseArr.map((data, index) => {
                            return (
                             
                                   <Grid item xs={12} sm={6} md={3} key={index}>
                                   
                                   <CardProp
                                       grade={data.grade}
                                       lessonType={data.lessonType}
                                       imageUrl={data.images}
                                       songs={data.songs}
                                       verses={data.verses}
                                       poems={data.poems}
                                       stories={data.stories}
                                   />
                    
                             
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