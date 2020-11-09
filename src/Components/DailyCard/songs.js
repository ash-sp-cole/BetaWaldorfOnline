import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import FsLightbox from 'fslightbox-react'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

export default function SongGrid() {
    const classes = useStyles();
    const [toggler, setToggler] = useState(false);
    return (
        <div>
            <CardActionArea    onClick={() => setToggler(!toggler)}>
            <CardMedia
             
                className={classes.media}
                image="http://i3.ytimg.com/vi/0LSQeg3qW8U/maxresdefault.jpg"
                title="Contemplative Reptile"
            />
</CardActionArea>
            <FsLightbox
                toggler={toggler}
                sources={[
                 
                 
                    "https://www.youtube.com/embed/0LSQeg3qW8U",
                    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                ]}
            />
        </div>
    )
}