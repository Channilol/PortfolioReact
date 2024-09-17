import "./Contacts.css";
import ContactsItem from "./ContactsItem/ContactsItem";

const Contacts = () => {
  return (
    <>
      <p className="category-item-text">social networks:</p>
      <div className="contacts-sns">
        <ContactsItem icon="bi bi-github" text="github" link="https://github.com/FrancescoCannizzo" />
        <ContactsItem
          icon="bi bi-linkedin"
          text="linkedin"
          link="https://www.linkedin.com/in/francesco-cannizzo-39313a181/"
        />
        <ContactsItem icon="bi bi-envelope-at-fill" text="email" link="mailto:fcannizzo97@gmail.com" />
      </div>
    </>
  );
};

export default Contacts;
