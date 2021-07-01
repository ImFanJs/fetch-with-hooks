import Article from "./Article";

const NewsList = ({ news }) => {
  return (
    <>
      {news.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  );
};

export default NewsList;
