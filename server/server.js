const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 5000;
const url1= "mongodb+srv://mustapha01:ouhassiP352615@cluster0.6drfkxf.mongodb.net/?retryWrites=true&w=majority";
const url = process.env.URL;
mongoose.set('strictQuery', false);
mongoose.connect(url1, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("connected"))
    .catch((err)=>console.log(err))
app.listen(port, ()=>console.log(`http://localhost:${port}`));