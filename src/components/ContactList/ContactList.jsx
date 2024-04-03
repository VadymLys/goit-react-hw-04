import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ users, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {users.map((user) => (
        <Contact key={user.id} {...user} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
