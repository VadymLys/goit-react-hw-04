import { useState } from "react";

const LoadMoreBtn = ({ items, page }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [pageBtn, setPageBtn] = useState(1);

  const loadMore = () => {
    setPageBtn(pageBtn + 1);
  };

  if (items.length === 0) {
    setShowBtn(false);
  }

  if (items > page) {
    showBtn(true);
  } else {
    setShowBtn(false);
  }
};
export default LoadMoreBtn;
