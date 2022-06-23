const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./Routes/emp');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


app.get('/', (req, res)=>{
    res.send("App is running fine successfully....")
});


 app.use("/emp", router);

const db = "mongodb+srv://Rajeswari:raje1992@cluster1.wm1nl.mongodb.net/server-test"

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("UNABLE TO CONNECT DB");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
