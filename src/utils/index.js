export const fetchPhotos = async (setPhotos) => {
  try {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    setPhotos(data);
  } catch (error) {
    console.log(error);
  }
};
