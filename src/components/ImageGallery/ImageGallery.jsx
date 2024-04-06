import ImageCard from "../ImageCard/ImageCard";
const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <ImageCard key={item.id} {...item} />;
      })}
      <li>
        <div>
          <img src="" alt="" />
        </div>
      </li>
    </ul>
  );
};

export default ImageGallery;
