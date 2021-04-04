import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      800,
      800,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });

const resizeImgs = async (files) => {
  let resizedFiles = [];
  let imageUrls = [];
  if (files && files.length) {
    for (const file of files) {
      // const url = URL.createObjectURL(file);
      // console.log(url);
      // imageUrls.push(url);
      const resizedImg = await resizeFile(file);
      const url = URL.createObjectURL(resizedImg);
      console.log(url);
      imageUrls.push(url);
      resizedFiles.push(resizedImg);
    }
  }

  return { resizedFiles, imageUrls };
};

export default resizeImgs;
