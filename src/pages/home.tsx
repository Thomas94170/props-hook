import { useState } from "react";
import ContactForm from "../components/contactForm";
import ListContact from "../components/listContact";
import "./home.css";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  const handleSendContact = (info: any, formData: any) => {
    console.log("Info envoyées :", info);
    console.log("Données du formulaire :", formData);

    setContacts([...contacts, { info, formData }]);
  };

  return (
    <>
      <div class="parent">
        <div class="div1">
          <ListContact contacts={contacts} />
        </div>
        <div class="div2">
          <ContactForm sendContact={handleSendContact} />
        </div>
      </div>
    </>
  );
};

export default Home;
