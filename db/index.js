const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://react-native-blog:Icui4cu1998@blogapp.rghnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log("db connection failed:", err.message || err));
