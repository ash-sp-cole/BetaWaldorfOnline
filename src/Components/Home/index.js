import {Component} from "react";
import React from 'react';
import Search from "../SidebarHome";
import {Grid, Paper } from "@material-ui/core";

class Home extends Component {
    render(){
        return(
            <div>
              
                <Search/>
            </div>
        )
    }
}

export default Home;