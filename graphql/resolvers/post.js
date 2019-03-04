export default {
  user: async (parent, args, { User }) => {
    try {
      return await User.findById(parent.user);
    } catch (e) {
      throw new Error(e);
    }
  }
};
