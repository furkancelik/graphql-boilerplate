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
  },

  editPost: async (
    parent,
    { data: { id, title, desciption } },
    { Post, activeUser }
  ) => {
    if (!activeUser) throw new Error("You are not authenticated!");
    try {
      const post = await Post.findById(id);
      if (post.user.toString() === activeUser.id.toString()) {
        const update = await Post.findByIdAndUpdate(id, {
          $set: { title, desciption }
        });
        if (update) {
          return await Post.findById(id);
        } else {
          throw new Error("Bir hata meydana geldi!");
        }
      } else {
        throw new Error("Yetkiniz olmayan gönderiyi güncelleyemezsiniz!");
      }
    } catch (e) {
      throw new Error(e);
    }
  }
};
