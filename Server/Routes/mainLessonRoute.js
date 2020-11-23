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


router.get("/mainsearch/:tag/:tag2?/:tag3?", async (req,res)=>{

    if(!req.params.tag2 && !req.params.tag3) {
    try{
        console.log("route hit for find by tag")
        const data = await mainLesson.find({tags:(req.params.tag)})
  
        res.json(data)
    }

    catch (err) {

        res.status(500).json({
            message:err.message
        })

    }
    }
    else  if(req.params.tag2===true && !req.params.tag3) {
    try{
        console.log("route hit for find by tag")

        const data = await mainLesson.find({$or:[{tags:(req.params.tag)}, {tags:(req.params.tag2)}]})
        res.json(data)
    }
    catch (err) {

        res.status(500).json({
            message:err.message
        })

    }
    }
    else   {
        try{
            console.log("route hit for find by tag")
    
            const data = await mainLesson.find({$or:[{tags:(req.params.tag)}, {tags:(req.params.tag2)}, {tags:(req.params.tag3)}]})
            res.json(data)
        }
        catch (err) {
    
            res.status(500).json({
                message:err.message
            })
    
        }
        }
})



router.post('/:id', async (req, res)=>{
 
    const newMainLesson = new mainLesson({
        subject:req.body.subject,
        grade: req.body.grade,
        lessonType: req.body.lessonType,
        images: req.body.images,
        songs: req.body.songs,
        songAuthor: req.body.songAuthor,
        introduction:req.body.introduction,
        openingExercises:req.body.openingExercises,
        stories: req.body.stories,
        videos: req.body.videos,
        poems: req.body.poems,
        verses: req.body.verses,
        verseAuthor:req.body.verseAuthor,
        lessonName:req.body.lessonName,
        lessonGuide:req.body.lessonGuide,
        tags:req.body.tags
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