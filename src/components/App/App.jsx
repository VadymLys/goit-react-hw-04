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
    async function loadData() {
      const results = await searchImages(query, (pageNum = 1));
      setImages(results);
    }
    loadData();
  }, []);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
};

export default App;
