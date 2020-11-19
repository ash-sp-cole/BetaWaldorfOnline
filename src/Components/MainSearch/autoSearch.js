/* eslint-disable no-use-before-define */
import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {callApi} from "../../Actions/savedActivities";
import { connect } from 'react-redux';
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CardActionArea from "@material-ui/core/CardActionArea";
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
   
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));


 const AutoSearch = ({dispatchCallApi})=> {
    const [search, setSearch] = useState([]);
    const classes = useStyles();
    console.log(search, "array satae")

  return (
    
      <div className={classes.root}>
      <Autocomplete
        onChange={(event, value) => setSearch(value)} 
      style={{width:'90%', margin:'auto'}}
        multiple
        id="tags-outlined"
        options={autoList}
        getOptionLabel={(option) => option.title}
       
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Search The MiddleSpace"
            placeholder="Search"
          />
          
            

        )}
      />
      <CardActionArea      
    onClick={() => {
      dispatchCallApi(search)
  }}>
      <IconButton aria-label="delete">
  <ArrowForwardIcon/>
</IconButton>
</CardActionArea>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const autoList = [
  { title: 'Grade One'},
  { title: 'Grade Two'},
  { title: 'Grade Three'},
  { title: 'Grade Four'},
  { title: 'Grade Five'},
  { title: 'Grade Six'},
  { title: 'Grade Seven'},
  { title: 'Grade Eight'},
  { title: 'Grade Nine'},
  { title: 'Grade Ten'},
  { title: 'Grade Eleven'},
  { title: 'Grade Twelve'},
  { title: 'First Grade'},
  { title: 'Second Grade'},
  { title: 'Third Grade'},
  { title: 'Fourth Grade'},
  { title: 'Fifth Grade'},
  { title: 'Sixth Grade'},
  { title: 'Seventh Grade'},
  { title: 'Eighth Grade'},
  { title: 'Ninth Grade'},
  { title: 'Tenth Grade'},
  { title: 'Eleventh Grade'},
  { title: 'Songs'},
  { title: 'Poems'},
  { title: 'Spring'},
  { title: 'Summer'},
  { title: 'Fall'},
  { title: 'Winter'},
];
const mapStatetoProps = (state) => {

    return {
       
      apiBoolRedux: state.store.apiBool,
      apiResponse: state.store.apiMainLessonQuery
    }
  
  
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
  
      dispatchCallApi : (e) => dispatch(callApi(e))
    }
  }
  
  
  export default connect(mapStatetoProps, mapDispatchToProps)(AutoSearch); 