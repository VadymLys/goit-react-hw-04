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

  async function handleSearch(query, pageNum = 1) {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await searchImages(query, pageNum);
      setImages(data);

      const normalizeData = data.results.map(({ description, id, urls }) => {
        return {
          alt: description,
          id,
          small: urls.small,
          regular: urls.regular,
        };
      });

      if (pageNum === 1) {
        setImages(normalizeData);
      } else {
        setImages((prevImages) => [...prevImages, ...normalizeData]);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (query !== "") {
      handleSearch(query, 1);
      setPageNum(1);
      setImages([]);
      setHasMoreImages(true);
    }
    if (pageNum > 1) {
      handleSearch(query, pageNum);
    }
  }, [query, pageNum]);

  const loadMore = () => {
    setPageNum(pageNum + 1);
  };

  console.log(hasMoreImages);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {hasMoreImages && images.length > 0 && (
        <LoadMoreBtn onClick={loadMore} page={pageNum} items={images} />
      )}
    </div>
  );
};

export default App;
