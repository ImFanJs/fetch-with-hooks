import { useState, useEffect } from "react";
import { fetchNews } from "../services/news";

export const useNews = () => {
  const [url, setUrl] = useState("");
  const [news, setNews] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const res = await fetchNews(url);
        const data = await res.json();

        setNews(data.news);
        setMetadata(data.metadata);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        setNews([]);
        setMetadata({});
        setError(err);
        setIsLoading(false);
      }
    };

    getNews();
  }, [url]);

  return [news, metadata, error, setUrl, isLoading];
};
