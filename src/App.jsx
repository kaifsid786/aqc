import About from "./Components/About/About";
import "./App.scss";
import Home from "./Components/Home/Home";
import Contract from "./Components/Contract/Contract";
import Media from "./Components/Media/Media";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Technology from "./Components/Technology/Technology";
import RND from "./Components/RND/RND";
import Contact from "./Components/Contact/Contact";
import Product from "./Components/Product/Product";
import BlogMain from "./Components/Blog/BlogMain/BlogMain";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import { useEffect } from "react";
const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/media" Component={Media} />
        <Route path="/contract" Component={Contract} />
        <Route path="/technology" Component={Technology} />
        <Route path="/rnd" Component={RND} />
        <Route path="/contact" Component={Contact} />
        <Route path="/product" Component={Product} />
        <Route path="/blog" Component={BlogMain} />
        <Route path="/blogDetail" Component={BlogDetail} />
        <Route path="/whatsapp" Component={WhatsApp} />
      </Routes>
    </>
  );
};

export default App;
