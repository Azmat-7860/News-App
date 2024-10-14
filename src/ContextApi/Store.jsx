import React, { createContext, useState, useEffect } from "react";

// Create the context
export const NewsContext = createContext({
  news: [],
  isData: false,
  handleSearch: () => {},
});

// const API_KEY = "eef3e1e5ca004d598009c8ff724e4693";
const API_KEY = "c5e6fa79680c6fcd528665d1fbf72dc8";

export const NewsProvider = ({ children }) => {
  const [serchNews, setSerchNews] = useState("world");
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
          `https://gnews.io/api/v4/search?q=${serchNews}&token=${API_KEY}&lang=en&max=20`
        );
        setIsData(true);
        const data = await response.json();
        console.log(data.articles);

        setNews(data.articles);
        // setIsData(true);
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
