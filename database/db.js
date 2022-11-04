import mongoose from 'mongoose';
import dotenv from 'dotenv';




const Connection=async (URL)=>{
    
    try{
     await mongoose.connect(URL,{useUnifiedTopology:true});
     console.log("database connected successfuly")
    }catch(error){
        console.log('Error while connecting with the database ',error.message)
    }
}
export default Connection;