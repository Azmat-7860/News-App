import { useState } from "react";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

function App() {
  const [search, setSearch] = useState("india");

  return (
    <>
      <Navbar />
      <Hero />

      <Footer />
    </>
  );
}

export default App;
