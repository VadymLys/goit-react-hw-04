const ImageCard = ({ alt, imageUrl, onClick }) => {
  return (
    <li>
      <div>
        <img
          src={imageUrl}
          alt={alt}
          onClick={onClick}
          width="320"
          height="200"
        />
      </div>
    </li>
  );
};

export default ImageCard;
