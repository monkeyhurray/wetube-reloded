import Video from "../models/Video";

/*

Video.find({}, (error, videos) => {
  if(error) {
    return res.render("server-error");
  }
  return res.render("home", { pageTitle: "Home", videos });
});
  callback 방식으로 작성하면
*/

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos); //db에 저장된걸 볼 수 있음
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};

export const watch = (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: `Watching` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error_message,
    });
  }
};
