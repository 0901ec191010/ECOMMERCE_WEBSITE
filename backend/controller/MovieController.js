const Movies = require("../model/MovieModel") 
const cloudinary = require("cloudinary")

const MovieName = async(req,res)=>{
    console.log("hello movie bhau")
    try {
      cloudinary.config({
        cloud_name:"djgkxj1rc",
        api_key:"729711687136723",
        api_secret:"AjO39Z9bIWrrbfIVQ5OIdOYQErc",
    });  
    console.log("file",req)
    const file =  await req.files.moviephoto; 
    console.log("file:",file);
    cloudinary.uploader.upload(file.tempFilePath,async(presult,err)=>{
    console.log("Result huu",presult);

      const MovieData = {
        moviename : req.body.moviename,
        movieyear : req.body.movieyear,
        moviephoto: {url:presult.url, public_id:presult.public_id}
      }
      
      // console.log("here",moviename,movieyear)
      const SaveData =  await Movies.create(MovieData)
      const result = JSON.stringify(SaveData)
      console.log("result",SaveData)
    })
      res.status(201).send({msg:"Record Inserted", SaveData});

  }
    
catch(error) {
  console.log("error",error)
}
}



const searchByid = async(req,res)=>{
const _id = req.params.mid ;
console.log("jumbooo", _id)
try {
    searchData = await Movies.findOne({_id})
    NewData = res.json(searchData)
    console.log("ID DATA",searchData)
} catch (error) {
    console.log("ERROR:-->",error)
}
}
const DeleteByid = async(req,res)=>{
console.log("jumboo")
const _id = req.params.did;
console.log("iddd",_id)
try {
    DeleteData = await Movies.findOneAndDelete(_id)
    NewData_2 = res.json(DeleteData)
    console.log("data deleted successfully",DeleteData)
} catch (error) {
    console.log("Error catched",error)
}
}

const MovieUpdate = async(req,res)=>{
    const data = req.params.uid
    const{moviename,movieyear}=req.body
    console.log("id",data)
    // const {moviename,movieyear} = req.body
    try {
        UpdateData = await Movies.findByIdAndUpdate(data,{moviename,movieyear})
        NewData_3 = res.json(UpdateData)
        console.log("update data",UpdateData)
        // res.status(200).json(UpdateData);

    } catch (error) {
        console.log("error",error)
    }
}

const AllShow = async(req,res)=>{
try {
  const GetAll = await Movies.find()
  GetFinal = res.json(GetAll)
  console.log("detaa",GetAll)
} catch (error) {
  console.log("error",error)
}
}
module.exports = {MovieName,searchByid,DeleteByid , MovieUpdate ,AllShow}