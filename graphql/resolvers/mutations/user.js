import bcrypt from "bcrypt";
import Token from "../../../helpers/token";

export default {
  register: async (
    parent,
    { data: { fullName, username, password } },
    { User }
  ) => {
    try {
      const user = await User.findOne({ username });
      if (user) throw new Error("User already exists.");
      const newUser = await User({ username, password, fullName }).save();
      return { token: Token.generate(newUser) };
    } catch (e) {
      throw new Error(e);
    }
  },

  login: async (parent, { data: { username, password } }, { User }) => {
    try {
      const user = await User.findOne({ username });
      if (!user) throw new Error("User does not exists!");
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) throw new Error("Wrong password!");
      return { token: Token.generate(user) };
    } catch (e) {
      throw new Error(e);
    }
  },

  updateProfile: async (
    parent,
    { data: { fullName } },
    { User, activeUser }
  ) => {
    if (!activeUser) throw new Error("You are not authenticated!");
    try {
      await User.findByIdAndUpdate(activeUser.id, { $set: { fullName } });
      return await User.findById(activeUser.id);
    } catch (e) {
      throw new Error(e);
    }
  }
};
