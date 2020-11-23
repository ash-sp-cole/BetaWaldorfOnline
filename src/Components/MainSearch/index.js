import React, { Component } from 'react';
import { Grid , Paper} from "@material-ui/core";
import FullWidthGrid from './grid';
import PropCard from "./propCard";
import PropCardBlue from './propCardBlue';
import PropCardRed from './propCardRed';
import SideBar from './swipeableDrawer';
import {apiBool} from "../../Actions/savedActivities";
import { connect } from 'react-redux';
import TestProp from "./testProp";
import Axios from "axios";
import SearchHeader from './searchHeader';

class MainSearch extends Component {
    state = {
        searchBool: false
    }


    render() {

        console.log(this.props.apiResponse, "working")
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


          

        if (this.props.apiBoolRedux === false) {
            return (
                <div >
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
         <SearchHeader/>
        </Grid>

                        
                    </Grid>


                </div>
            )
        }

        else {
         
            return (
                <Grid
                container
                spacing={3}
                direction="row"

                alignItems="flex-start"
            >
                   <Grid item xs={12}>
                            <SideBar />
                        </Grid>
                {this.props.apiResponse.map((data, index) => {
                    return (

                        <Grid item xs={12} sm={6} md={6} lg={4} key={index} style={{ margin: 'auto' }}>
                           
                            <TestProp
                                    style={{
                                        margin: 'auto'
                                    }}
                                    id={data._id}
                                    elevation={16}
                                    subject={data.subject}
                                    introduction={data.introduction}
                                    openingExercises={data.openingExercises}
                                    grade={data.grade}
                                    lessonType={data.lessonType}
                                    imageUrl={data.images}
                                    songs={data.songs}
                                    songAuthor={data.songAuthor}
                                    verses={data.verses}
                                    verseAuthor={data.verseAuthor}
                                    lessonPlans={data.lessonName}
                                    lessonGuide = {data.lessonGuide}
                                    poems={data.poems}
                                    stories={data.stories}
                                />
                       
                        </Grid>


                    )

                })}
            </Grid>
            )
        }
        
    }
}

const mapStatetoProps = (state) => {

    return {
  
      
      apiBoolRedux: state.store.apiBool,
      apiResponse: Object.values(state.store.apiMainLessonQuery)
    }
  
  
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
  
      dispatchApiBool: (bool) => dispatch(apiBool(bool))
    }
  }


export default connect(mapStatetoProps, mapDispatchToProps)(MainSearch); 