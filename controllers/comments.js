
const Comment = require("../models/Comment");

module.exports = {
  
  createComment: async (req, res) => {
    try {
      // Upload image to cloudinary
        await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      });
    
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
      res.render("post.ejs", { comment: comment, likes: like, post:post,createdAt:createdAt });
    } catch (err) {
      console.log(err);
    }
  },
  likeComment: async (req, res) => {
    try {
     console.log(req.params.cid)
      await Comment.findOneAndUpdate(
        { _id: req.params.cid },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  }
  // deletePost: async (req, res) => {
  //   try {
  //     // Find post by id
  //     let post = await Post.findById({ _id: req.params.id });
  //     // Delete image from cloudinary
  //     await cloudinary.uploader.destroy(post.cloudinaryId);
  //     // Delete post from db
  //     await Post.remove({ _id: req.params.id });
  //     console.log("Deleted Post");
  //     res.redirect("/profile");
  //   } catch (err) {
  //     res.redirect("/profile");
  //   }
  // },
};
