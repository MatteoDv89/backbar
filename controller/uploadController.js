const fs = require("fs");
const { endianness } = require("os");
const { nextTick } = require("process");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadImg = async (req, res, next) => {
  const title = req.body.title + ".jpg";
  try {
    await pipeline(
      req.files["uploaded_file"][0].stream,
      fs.createWriteStream(
        `${__dirname}../../../essentiel_app/public/uploads/${title}`
      )
    );
  
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
