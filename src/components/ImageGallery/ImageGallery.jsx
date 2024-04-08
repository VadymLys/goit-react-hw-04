import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map((item) => {
        return (
          <ImageCard
            key={item.id}
            imageUrl={item.small}
            alt={item.alt}
            onClick={() => onClick(item)}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
