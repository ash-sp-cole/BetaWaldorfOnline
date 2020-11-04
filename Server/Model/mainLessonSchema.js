const mongoose = require('mongoose');



const storeSchema = new mongoose.Schema({

    grade: {

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
    stories:
    {

        type: String,
        required: false

    },
    videos:
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
    lessonPlans:
    {

        type: String,
        required: true
    }
})

module.exports = mongoose.model('lesson', storeSchema);














