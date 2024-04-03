import { useState, useEffect } from "react";
import "modern-normalize";
import userData from "./users.json";
import css from "../App/App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) || userData
  );

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addContact = (newTask) => {
    const newContact = {
      ...newTask,
      id: nanoid(),
    };
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (taskId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== taskId);
    });
  };

  const handleSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox searchValue={searchValue} onChange={handleSearch} />
      <ContactList users={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
export default App;
