const express = require("express");
const router = express.Router();
const mainLesson = require("../Model/mainLessonSchema.js");




router.get ("/", async (req, res) =>{


    try{
        console.log("/ route for main lesson success")
        const data = await mainLesson.find() 
            res.json(data)
        
    }

    catch (err) {

        res.status(500).json({
            message:err.message
        })
    }

})



router.post('/:id', async (req, res)=>{
 
    const newMainLesson = new mainLesson({
        grade: req.body.grade,
        lessonType: req.body.lessonType,
        images: req.body.images,
        songs: req.body.songs,
        stories: req.body.stories,
        videos: req.body.videos,
        poems: req.body.poems,
        verses: req.body.verses,
        lessonPlans: req.body.lessonPlans,
    })
    try {
        const newlesson = await newMainLesson.save()
        res.status(201).json(newlesson)
    }
    catch (err){
        res.status(400).json({
            message: err.message
        })
    }
    
    })

module.exports = router;