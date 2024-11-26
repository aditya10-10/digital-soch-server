const express = require("express");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

// Load environment variables for development
dotenv.config();

// Connect to Cloudinary
const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

// Connect to the database
database.connect();

//cloudinary connection
cloudinaryConnect();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Welcome to Digital Soch!",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
