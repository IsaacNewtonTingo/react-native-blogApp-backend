const router = require("express").Router();
const {
  createPost,
  deletPost,
  updatePost,
  getPost,
  getFeaturedPosts,
  getPosts,
  searchPost,
  relatedPosts,
  uploadImage,
} = require("../controllers/post");
const multer = require("../midleware/multer");
const { postValidator, validate } = require("../midleware/postValidator");
const { parseData } = require("../midleware/index");

// router.post(
//   "/create",
//   multer.single("thumbnail"),
//   parseData,
//   postValidator,
//   validate,
//   createPost
// );

// router.put(
//   "/:postId",
//   multer.single("thumbnail"),
//   parseData,
//   postValidator,
//   validate,
//   updatePost
// );

// router.delete("/:postId", deletPost);
router.get("/single/:slug", getPost);
router.get("/featured-posts", getFeaturedPosts);
router.get("/posts", getPosts);
router.get("/search", searchPost);
router.get("/related-posts/:postId", relatedPosts);

// router.post("/upload-image", multer.single("image"), uploadImage);

module.exports = router;
