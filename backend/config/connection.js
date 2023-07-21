const mongoose = require('mongoose')

const connection = async ()=>{
    const DB_STR =
    "mongodb+srv://aahirwar251:Ahirwar@cluster1.fhz3pps.mongodb.net/?retryWrites=true&w=majority"; 
    // "mongodb+srv://aahirwar:aahirwar@cluster0.ofdeiew.mongodb.net/?retryWrites=true&w=majority"; 
    mongoose
        .connect(DB_STR,{useNewUrlParser: true,useUnifiedTopology:true})
        .then(()=>console.log("Database connected")) 
        .catch((err)=>console.error("Database connection error:", err));

        // try {
        //     await mongoose.connect('mongodb://127.0.0.1:27017/E-com');
        //     console.log("Connection sucessfull")
        //   } catch (error) {
        //     handleError(error);
        //   }
    
}    

module.exports = connection

