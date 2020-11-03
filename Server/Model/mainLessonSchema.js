const mongoose = require('mongoose');



const storeSchema = new mongoose.Schema({

    grade:{

        type: String,
        required: true

    }
})

    module.exports = mongoose.model('lesson',storeSchema);














