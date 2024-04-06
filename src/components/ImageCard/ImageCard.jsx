const ImageCard = ({ alt, regular }) => {
  return (
    <div>
      <img src={regular} alt={alt} />
    </div>
  );
};

export default ImageCard;
