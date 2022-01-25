const router = require("express").Router();
const multer = require("multer");
const upload = multer();
const uploadController = require("./uploadController");

const cpUpload = upload.fields([
  { name: "uploaded_file" },
  { name: "title" },
]);

router.post("/upload", cpUpload, uploadController.uploadImg);

module.exports = router;
