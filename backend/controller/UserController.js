// const catchAsyncError = require("../middleware/catchAsyncError");
// const ErrorHandler = require("../utils/errorhandler");
const User = require("../model/UserModel");
const MailFile = require("../middleware/MailFile");
// const generateToken = require('../dbconnection/generateToken')
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  if (!name || !email || !mobile || !password) {
    // return next(new ErrorHandler(`Please Enter all the Feilds`, 400))
    return res.json({ data: "fields are required" });
  }else{

  const userExists = await User.findOne({ email });
  if (userExists) {
    // return next(new ErrorHandler(`User already exits`, 400))
    return res.json({data:"user already exits"})
    // console.log("user already exits");
  }else{
  const user = await User.create({
    name,
    email,
    mobile,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      password: user.password,
      // pic: user.pic,
      // token: generateToken(user._id),
    });
  }else{
    return res.status(404).json({ data: "user not found" });
  }
}}
  // return next(new ErrorHandler(`user not found`, 404))
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  // if (user && (await user.matchPassword(password)))
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      data: "Login sucessful",
    });
  } else {
    // return next(new ErrorHandler(`Invalid Email or Password`, 404))
    return res.status(404).json({ data: "Invalid Email or Password" });
  }
};

const getAllUser = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "" } },
          { email: { $regex: req.query.search, $options: "" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find();
  res.send(users);
};

const Forget = async (req, res) => {
  const { email } = req.body;
  const MatchMail = await User.findOne({ email: email });
  if (MatchMail.email == email) {
    console.log("matchMail", MatchMail);
    res
      .status(200)
      .json({ msg: "successfully sent password in your email id" });

    MailFile(
      MatchMail.email,    
      "SkyTechsoft Pvt.Ltd",
      `Dear  ${MatchMail.name} click here the link to change the password http://localhost:3000/change/password/${MatchMail._id} `
    );
  } else {
    res.status(404).json("email not found");
  }
};

// Update user password
const changePassword = async (req, res) => {
  console.log("hooo")
  const { id } = req.params;
  console.log("idddd",id)
  const { password, confirmpassword } = req.body;
  console.log("passs",password ,"confirm",confirmpassword)
  try {
    if (password == confirmpassword) {
      const user = await User.findById({ _id: id });
      if (user) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        await User.findByIdAndUpdate({ _id: id }, { password: hashedPassword });
        res.status(200).json({ msg: "successfullly updated field " });
      } else {
        return res.status(404).json({ data: "user not found" });
      }
    }
  } catch (error) {
    console.log("error", error);
    res
      .status(404)
      .json({ msg: "can not be updated something went wrong here" });
  }
};


module.exports = { registerUser, authUser, getAllUser, Forget, changePassword};
