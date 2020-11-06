  
import { Paper } from "@material-ui/core";
import React from "react";

import logo from "../../Assets/logo1.png";
import NavigationBar from "./navBAr";
const Header = () => {

    return (


        <div>
              <NavigationBar/>
            <img id="logo" alt="logo" src={logo}
                style={{
                      margin:'auto',
                      maxWidth:'75%',
                      marginLeft:'2%',
                      marginTop:'-60px',
                      marginBottom:'-60px'

                }}
            
            ></img>
        
        </div>

    )

}


export default Header;
