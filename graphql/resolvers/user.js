export default {
  posts: async (parent, args, { Post }) => {
    try {
      return await Post.find({ user: parent._id });
    } catch (e) {
      throw new Error(e);
    }
  }
};
