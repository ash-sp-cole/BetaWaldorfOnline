import {Component} from "react";
import React from 'react';
import Search from "../SidebarHome";

class Home extends Component {
    render(){
        return(
            <div>
                <h1> Home </h1>
                <Search/>
            </div>
        )
    }
}

export default Home;