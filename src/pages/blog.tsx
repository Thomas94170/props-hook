import React from "react";

interface BlogProps {
  articles: Array<{
    author: string;
    title: string;
    description: string;
    createdAt: Date;
  }>;
}

const Blog: React.FC<BlogProps> = ({ articles }) => {
  return (
    <>
      <h2 className="text-center">Nos derniers articles</h2>
      <br />

      {articles && articles.length > 0 ? (
        articles.map((article, index) => (
          <div
            className="flex items-start mb-4 border border-black bg-slate-200"
            key={index}
          >
            <div className="m-10">
              <img
                src="../public/img/imageUne.jpg"
                alt={`Image for ${article.title}`}
                width={150}
                height={150}
                className=""
              />
            </div>

            <div className="flex flex-col m-10">
              <p className="mb-1">Titre : {article.title}</p>
              <p className="mb-1">Contenu : {article.description}</p>
              <p className="mb-1">Auteur : {article.author}</p>
              <p className="mb-1">
                Publié le : {article.createdAt.toLocaleString()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun article disponible pour le moment.</p>
      )}
    </>
  );
};

export default Blog;
