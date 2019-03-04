export default {
  createPost: async (parent, args, { Post }) => {
    try {
      return await Post(args.data).save();
    } catch (e) {
      throw new Error(e);
    }
  }
};
