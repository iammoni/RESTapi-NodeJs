const express=require('express');
const app=express();
require('dotenv').config(); //access .env data
const port=process.env.PORT;
const mongoose=require('mongoose');
const path=require('path');
var exphbs = require('express-handlebars');
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname+'/public')));


app.set('views',path.join(__dirname+'/views'));
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');


//connect to database
const db=require("./setup/myUrl");
mongoose.connect(db.url,{useNewUrlParser:true,useUnifiedTopology:true})
.then((res)=>console.log("User Successfully Connected to DataBase"))
.catch(err=>console.log(err));

//bring routes
const auth=require('./routes/api/auth');
app.use('/api/',auth);

//create server
app.listen(port,()=>console.log(`Server is running at port:${port}`));


