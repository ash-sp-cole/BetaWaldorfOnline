const mongoose = require('mongoose');



const storeSchema = new mongoose.Schema({
    tags:[
        String
    ],

    grade: {

        type: String,
        required: true

    },
    subject: {

        type: String,
        required: true
    },

    lessonType: {

        type: String,
        required: true

    },
    images:
    {

        type: String,
        required: false

    },
    songs:
    {

        type: String,
        required: false

    },
    songAuthor:
    {

        type: String,
        required: false

    },
    stories:
    {

        type: String,
        required: false

    },
    openingExercises:
    {

        type: String,
        required: false

    },
    poems:
    {

        type: String,
        required: false

    },
    verses:
    {

        type: String,
        required: false

    },
    verseAuthor:
    {

        type: String,
        required: false

    },
    lessonPlans:{
            lessonName: {

                type: String,
                required: false
            },
            lessonGuide: {

                type: String,
                required: false
            }

    },
   
    introduction:{
        type:String,
        required: false
    }
})

module.exports = mongoose.model('lesson', storeSchema);














