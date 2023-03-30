import app from "./app"
// import "./database"
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) { console.log(err); }
    else { console.log(`Server is listening on port ${PORT}`); }
});

app.get("/", (req, res) =>{
    res.json({message:"Welcome to AI_POWERED_TRANSLATOR"})
})