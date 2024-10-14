import { useState } from "react";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import { NewsProvider } from "./ContextApi/store";

function App() {
  const [search, setSearch] = useState("india");

  return (
    <NewsProvider>
      <Navbar />
      <Hero />
      <Footer />
    </NewsProvider>
  );
}

export default App;
