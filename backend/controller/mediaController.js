const Media = require("../model/MediaModel");

const getAll = async (req, res) => {
  try {
    const media = await Media.find();

    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
// Backendurl/public/videos/file_name.mp4
 const createVideo = async (req, res) => {

  console.log("jii  controller")
  const { name } = req.body;
  console.log("name",name)
  let videosPaths = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videosPaths.push("/" + video.path);
    }
  }

  try {
    const createdMedia = await Media.create({
      name,
      videos: videosPaths,
    });
    res.json({ message: "Media created successfully", createdMedia });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports =  {createVideo, getAll}
