export const PhotoBox = ({ photo }) => {
  return (
    <div>
      <p>{photo.author}</p>
      <img src={photo.download_url} alt="Lorem Picsum fetch grab" />
    </div>
  );
};
