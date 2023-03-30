import mongoose from "mongoose"
require('dotenv').config()

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true
})
    .then(db => console.log("Connected to DB: " + db.connections[0].name))
    .catch(error => console.log(error))