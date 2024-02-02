import { Route, Routes } from "react-router-dom";
import "./app.css";
import Blog from "./pages/blog";
import Messages from "./pages/messages";
import Home from "./pages/home";
import Navbar from "./components/navbar";

import "./input.css";
import { useState } from "react";

export function App() {
  // cheminement : une props est remonté d'un composant enfant (messages) vers son parent (app)
  // et est transmise du parent vers son autre enfant blog

  const [articles, setArticles] = useState([]);

  // pour envoyer la props d'un parent à un enfant j'utilise useState

  const infoDuForm = (article) => {
    console.log("infoDuForm", article);

    // je renvoi setArticle
    setArticles((prevArticles) => [...prevArticles, article]);
  };
  // pour transmettre une props d'un enfant vers un parent, il faut faire une function
  // sendToApp correspond à la const dans messages.tsx qui est appelé dans handleSubmit pour envoyer la data

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/blog" element={<Blog articles={articles} />}>
          {" "}
        </Route>
        <Route path="/messages" element={<Messages sendToApp={infoDuForm} />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}
