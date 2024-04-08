import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={css.loadMoreButton} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
