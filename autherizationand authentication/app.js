const express=require('express');
const app=express();
app.use(express.json());
require('dotenv').config();
const dbconection=require('./config/database');
const port=process.env.PORT || 4000;

const routes=require('./routes/router');
app.use('/api/v1',routes);


app.listen(port,()=>{
    console.log(`listening port is ${port}`)
})

//database connection
dbconection();