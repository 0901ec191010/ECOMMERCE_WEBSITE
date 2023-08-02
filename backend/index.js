const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const connection = require("./config/connection");
const User = require("./routes/userRoute");
const Bollywood = require("./routes/Bollywood/BollywoodRoute");
const Hollywood = require("./routes/Hollywood/HollywoodRoute");
// const fileUpload = require("express-fileupload");
const mediaRoutes = require("./routes/MediaRoute/Media");

const app = express();
const PORT = 4000;
// database connection
connection();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(fileUpload({ useTempFiles: true }));

//router middleware
app.use("/api/v1/media", mediaRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api/user", User);
app.use("/api/bollywood", Bollywood);
app.use("/api/hollywood", Hollywood);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server start successfully at port ${PORT}`);
  } else console.log("Error occurred, server can't start", error);
});
