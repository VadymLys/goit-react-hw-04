import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={css.imageGallery}>
      {items.length > 0 &&
        items.map((item) => {
          return (
            <li key={item.id}>
              <ImageCard
                imageUrl={item.small}
                alt={item.alt}
                onClick={() => onClick(item)}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
