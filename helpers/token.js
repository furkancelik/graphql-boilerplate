import jwt from "jsonwebtoken";

export default {
  generate: ({ _id, username }, expiresIn = "1h") => {
    return jwt.sign({ id: _id, username }, process.env.SECRET_KEY, {
      expiresIn
    });
  },
  verify: async token => {
    try {
      return await jwt.verify(token, process.env.SECRET_KEY);
    } catch (e) {
      throw new Error(e);
    }
  }
};
