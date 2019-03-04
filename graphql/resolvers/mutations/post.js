export default {
  createPost: async (
    parent,
    { data: { title, desciption } },
    { Post, activeUser }
  ) => {
    if (!activeUser) throw new Error("You are not authenticated!");
    const user = activeUser.id;
    try {
      return await Post({
        title,
        desciption,
        user
      }).save();
    } catch (e) {
      throw new Error(e);
    }
  }
};
