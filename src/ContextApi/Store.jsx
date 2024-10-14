import React, { createContext, useState, useEffect } from "react";

// Create the context
export const NewsContext = createContext({
  news: [],
  isData: false,
  handleSearch: () => {},
});

const API_KEY = "eef3e1e5ca004d598009c8ff724e4693";

export const NewsProvider = ({ children }) => {
  const [serchNews, setSerchNews] = useState("India");
  const [news, setNews] = useState([]);
  const [isData, setIsData] = useState(false);

  const handleSearch = (search) => {
    console.log(search, "from store");

    setSerchNews(search);
  };

  useEffect(() => {
    console.log("useeffect is running");

    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${serchNews}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setNews(data.articles);
        setIsData(true);
      } catch (error) {
        console.error("Error fetching news:", error);
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
