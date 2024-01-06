const express=require('express');
const {conectDB}=require('./config/database');
const {cloudinaryConfig}=require('./config/cloudinary');
const fileUpload=require('express-fileupload');
const app=express();
require("dotenv").config();
const port=process.env.port || 5000;

//port listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})    
//middleware
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'

})); 

//routes mounting
const fileRoutes=require('./router/routes');
app.use('/api/v1',fileRoutes);

//connection with database
conectDB();

//cloudinary configuration
cloudinaryConfig();

