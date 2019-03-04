export default {
  user: async (parent, args, { User }) => {
    try {
      return await User.findById(args.id);
    } catch (e) {
      throw new Error(e);
    }
  },
  users: async (parent, args, { User }) => {
    try {
      return await User.find();
    } catch (e) {
      throw new Error(e);
    }
  }
};
