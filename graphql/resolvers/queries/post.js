export default {
  post: async (parent, args, { Post }) => {
    try {
      return await Post.findById(args.id); //.populate("user");
    } catch (e) {
      throw new Error(e);
    }
  },
  posts: async (parent, args, { Post }) => {
    try {
      return await Post.find(); //.populate("user");
    } catch (e) {
      throw new Error(e);
    }
  }
};
