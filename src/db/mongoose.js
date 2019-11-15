const mongoose = require('mongoose')
const validator = require('validator')
const connectionURL = "mongodb+srv://admin:admin@cluster0-57ekf.mongodb.net/GameofThrones?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true, //crear indexes
    useUnifiedTopology: true
})

