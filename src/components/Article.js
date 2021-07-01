const Article = ({ article }) => {
  return (
    <article>
      <a href={article.url}>{article.title}</a>;
    </article>
  );
};

export default Article;
