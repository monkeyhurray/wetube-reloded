export const trending = (req, res) => {
  res.send(
    "<!DOYCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Home</h1><footer></footer>&copy; 2022Wetube - All rights reserved</body></html>"
  );
};

export const see = (req, res) => {
  return res.send(
    `<!DOYCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Watch video #${req.params.id}</h1><footer></footer>&copy; 2022Wetube - All rights reserved</body></html>`
  );
};

export const edit = (req, res) => {
  return res.send(
    `<!DOYCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Edit video #${req.params.id}</h1><footer></footer>&copy; 2022Wetube - All rights reserved</body></html>`
  );
};

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("DeleteVideo");
};
