import Button from "../components/Button";
import ErrorHandler from "../components/ErrorHandler";
import Loader from "../components/Loader";
import NewsList from "../components/NewsList";
import Title from "../components/Title";
import { useNews } from "../hooks/useNews";

const Home = () => {
  const [news, metadata, error, setUrl, isLoading] = useNews();

  return (
    <>
      <Title content="Hello Candidate" />
      <Loader isLoading={isLoading} />
      <ErrorHandler error={error} />

      {!isLoading && <NewsList news={news} />}

      {!isLoading && !error && (
        <>
          <Button
            text="Prev"
            display={metadata.before}
            handleClick={() => setUrl(`before=${metadata.before}`)}
          />
          <Button
            text="Next"
            handleClick={() => setUrl(`after=${metadata.after}`)}
          />
        </>
      )}
    </>
  );
};

export default Home;
