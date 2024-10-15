import React, { createContext, useState, useEffect } from "react";

// Create the context
export const NewsContext = createContext({
  news: [],
  isData: false,
  handleSearch: () => {},
});

const API_KEY = "c5e6fa79680c6fcd528665d1fbf72dc8";

export const NewsProvider = ({ children }) => {
  const [serchNews, setSerchNews] = useState("Latest");
  const [news, setNews] = useState([]);
  const [isData, setIsData] = useState(false); // Initially, no data is being fetched

  const handleSearch = (search) => {
    setSerchNews(search); // Update search term
  };

  useEffect(() => {
    const fetchNews = async () => {
      setIsData(true); // Set loading state to true before fetching

      try {
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=${serchNews}&token=${API_KEY}&country=in`
        );
        const data = await response.json();
        setNews(data.articles); // Update news state with fetched articles
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsData(false); // Ensure loading state is false after fetching is complete
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
