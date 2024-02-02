import { useState } from "react";

const Messages = (props) => {
  const { sendToApp } = props;

  const [article, setArticle] = useState({
    author: "",
    title: "",
    description: "",
    createdAt: new Date(),
  });

  // gere la value des champs de mon formulaire name est le name de mes inputs, value est leur valeur que je rentre
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      // ...article fait une copie d article afin de faire le changement
      ...article,
      [name]: value,
    });
  };

  // gere la validation avec le  bouton
  const handleSubmit = (e) => {
    console.log("Contenu du formulaire :", article);
    e.preventDefault();
    console.log("je clique sur le bouton ");

    setArticle((prevArticle) => ({
      ...prevArticle,
      createdAt: new Date(),
    }));

    sendToApp(article);
    // j'envoi le contenu de article dans sendToApp
    setArticle({
      author: "",
      title: "",
      description: "",
      createdAt: new Date(),
    });
    // apres envoi
    //reinitialisation du formulaire au niveau de la date
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="author"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nom de l'auteur
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="author"
                    id="author"
                    autoComplete="author"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Titre
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Messages;
