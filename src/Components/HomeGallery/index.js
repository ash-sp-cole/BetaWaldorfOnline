
import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slideOne from "../../Assets/slideFour.jpg"
import slideThree from "../../Assets/slideOne.jpg";
import slideFour from "../../Assets/slideFive.jpg";
import slideTwo from "../../Assets/sildeTwo.jpg";
import styles from  "./styles.css";
import CardOne from "../GalleryCard/cardOne";
import CardTwo from "../GalleryCard/cardTwo";



class HomeGallery extends React.Component {



    render() {
        return <AwesomeSlider 
        organicArrows={true}
        cssModule={styles}
        fillParent={false}
        organicArrows
        bullets={false}
            style={{backgroundColor:'white'}}
        >

            <div data-src={slideOne} />
            <div data-src={slideTwo} />
            <div data-src={slideThree} />
            <div data-src={slideFour} />

         
        </AwesomeSlider>
    }
}


export default HomeGallery;