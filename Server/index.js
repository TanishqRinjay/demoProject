const express=require('express');
const {conectDB}=require('./config/database');
const {cloudinaryConfig}=require('./config/cloudinary');
const fileUpload=require('express-fileupload');
const cors = require('cors');

const app=express();
require("dotenv").config();
const port=process.env.port || 5000;

//port listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})    
//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'

})); 

//routes mounting
const fileRoutes=require('./router/routes');
const routes=require('./router/router');
app.use('/api/v1',routes);
app.use('/api/v1',fileRoutes);

//connection with file database
conectDB();

//cloudinary configuration
cloudinaryConfig();

//authDatabase
