import "./ContactsItem.css";

const ContactsItem = ({ icon, text, link }) => {
  return (
    <a className="contacts-item" href={link} target="_blank" rel="noreferrer">
      <i class={icon}></i>
      <p>{text}</p>
    </a>
  );
};

export default ContactsItem;
