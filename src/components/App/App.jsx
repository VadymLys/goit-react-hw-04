import { useState, useEffect } from "react";
import "modern-normalize";
import { searchImages } from "../../api/searchImages";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [query, setQuery] = useState("");
  const [hasMoreImages, setHasMoreImages] = useState(false);
  const [clickImage, setClickImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  async function handleSearch(query) {
    setLoading(true);

    setError(false);

    setImages([]);

    setPageNum(1);

    setQuery(query);
  }

  useEffect(() => {
    if (!query) return;
    async function loadData() {
      try {
        const data = await searchImages(query, pageNum);

        const normalizeData = data.results.map(({ description, id, urls }) => {
          return {
            alt: description,
            id,
            small: urls.small,
            regular: urls.regular,
          };
        });

        setImages((prevImages) => [...prevImages, ...normalizeData]);

        if (data.results.length === 0) {
          setHasMoreImages(false);
        }

        setHasMoreImages(data.total_pages !== pageNum);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    }

    loadData();
  }, [query, pageNum]);

  const loadMore = () => {
    setLoading(true);
    setPageNum(pageNum + 1);
  };

  const open = (image) => {
    setIsOpen(true);
    setClickImage(image);
  };

  const close = () => {
    setIsOpen(false);
    setClickImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} onClick={open} />}
      {hasMoreImages && images.length > 0 && (
        <LoadMoreBtn onClick={loadMore} page={pageNum} items={images} />
      )}
      {clickImage && (
        <ImageModal images={clickImage} open={isOpen} close={close} />
      )}
    </div>
  );
};

export default App;
