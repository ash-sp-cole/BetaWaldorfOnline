import { Divider, Button, Container, Typography, Paper, Grid, IconButton,  GridList } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { deleteFromSaved, addToSaved, getSaved } from "../../Actions/savedActivities";
import Axios from "axios";
import CardProp from "./propDisplay";
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


class ModalDisplay extends Component {

    state = {
        responseArr: [],
        apiCalled: false
    }


    render() {


        console.log(this.props.apiCalledStore + "modal")
        const handleApiCall = () => {
            if (this.props.savedUsedChoice === "") {
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
                    
                    <Divider />
                  
                    <Typography variant="h3">
                       
                        {this.props.savedUsedChoice}
                    </Typography>
                
                    <IconButton aria-label="delete"
                                  
                                  >
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleApiCall}
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
                                        Clear Results
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

                                <Grid item xs={12} sm={6} md={6} lg={6} key={index} style={{ margin: 'auto' }}>
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
       
        savedUsedChoice: state.store.modalSearchChoice,
        apiCalledStore : state.store.apiBool
    }


}


export default connect(mapStatetoProps, { getSaved, deleteFromSaved, addToSaved })(ModalDisplay);