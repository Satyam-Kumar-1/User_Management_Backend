require('dotenv').config();
const express=require('express');
const app=express();
const cors = require('cors');
const port=process.env.PORT;
userRoutes=require('./Routes/Users');
adminRoutes=require('./Routes/Admin');
require('./config');

app.use(express.json());

app.use(cors());

// Routes
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})