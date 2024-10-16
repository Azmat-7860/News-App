import React, { createContext, useState, useEffect } from "react";

// Create the context
export const NewsContext = createContext({
  news: [],
  isData: false,
  handleSearch: () => {},
});

const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY); // Will correctly log the value from your .env file

export const NewsProvider = ({ children }) => {
  const [serchNews, setSerchNews] = useState("Latest");
  const [news, setNews] = useState([]);
  const [isData, setIsData] = useState(false); // Initially, no data is being fetched

  const handleSearch = (search) => {
    setSerchNews(search); // Update search term
  };

  useEffect(() => {
    const fetchNews = async () => {
      setIsData(true);

      try {
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=${serchNews}&token=${API_KEY}&country=in`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsData(false);
      }
    };

    fetchNews();
  }, [serchNews]);

  return (
    <NewsContext.Provider value={{ news, isData, handleSearch }}>
      {children}
    </NewsContext.Provider>
  );
};
