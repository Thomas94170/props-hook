import React from "react";

const ListContact = ({ contacts }) => {
  return (
    <>
      <h2>Boite de réception des messages </h2>
      <div className="border border-black">
        <ul className="bg-white">
          {contacts.map((contact, index) => (
            <li key={index}>
              <div className="flex justify-around border border-black bg-slate-200 m-5">
                <div className="m-10">
                  <img
                    src="../public/img/imageUne.jpg"
                    alt="photo react"
                    width={150}
                    height={150}
                    className=""
                  />
                </div>
                <p className="m-4">Nom {contact.formData.nom}</p>
                <p className="m-4">Sujet {contact.formData.sujet}</p>
                <p className="m-4">Message {contact.formData.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListContact;
