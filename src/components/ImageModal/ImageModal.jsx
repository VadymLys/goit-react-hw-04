import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ images: { regular, alt }, open, close }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
      ariaHideApp={false}
    >
      <img src={regular} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
