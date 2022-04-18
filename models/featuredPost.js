const mongoose = require("mongoose");
const featuredPostSchema = mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("featuredPost", featuredPostSchema);
