const mongoose=require('mongoose');
const url=process.env.DATABASE_URL;
mongoose.connect(url).then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log("error in database connevtion",e);
})