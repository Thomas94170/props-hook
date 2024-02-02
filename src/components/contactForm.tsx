import React, { useState } from "react";

const ContactForm = (props) => {
  const { sendContact } = props;

  const [formData, setFormData] = useState({
    nom: "",
    sujet: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter les données du formulaire
    console.log("Formulaire soumis :", formData);

    sendContact("info qui seront envoyés ", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="nom"
          className="block text-sm font-medium text-gray-600"
        >
          Nom :
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="sujet"
          className="block text-sm font-medium text-gray-600"
        >
          Sujet :
        </label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          value={formData.sujet}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-600"
        >
          Message :
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
