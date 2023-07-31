const express = require('express')
const connection = require('./config/connection')
const User = require("./routes/userRoute")
const fileUpload = require("express-fileupload");

const app = express();
const cors = require("cors");

const PORT = 4000;
// database connection
connection();

//middleware 
app.use(cors())
app.use(express.json())
app.use(fileUpload({useTempFiles:true})) ;

//router middleware
app.use('/api/user',User)


app.listen(PORT, (error) =>{
	if(!error){
        console.log(`server start successfully at port ${PORT}`)
    }		
	else
		console.log("Error occurred, server can't start", error);
	}
);

