import css from "../Contact/Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <li>
        <p className={css.userdata}>
          <FaUserLarge />
          {name}
        </p>
        <p className={css.userdata}>
          <FaPhoneAlt />
          {number}
        </p>
      </li>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
