export default {
  register: async (parent, { data: { username, password } }, { User }) => {
    try {
      const user = await User.findOne({ username });
      if (user) throw new Error("User already exists.");
      return await User({ username, password }).save();
    } catch (e) {
      throw new Error(e);
    }
  },

  login: async (parent, { data: { username, password } }, { User }) => {
    try {
      return await User.findOne({ username });
    } catch (e) {
      throw new Error(e);
    }
  }
};
