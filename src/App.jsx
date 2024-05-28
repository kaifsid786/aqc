import About from "./Components/About/About";
import "./App.scss";
import Home from "./Components/Home/Home";
import Contract from "./Components/Contract/Contract";
import { Routes, Route, useLocation } from "react-router-dom";
import Technology from "./Components/Technology/Technology";
import Contact from "./Components/Contact/Contact";
import BlogMain from "./Components/Blog/BlogMain/BlogMain";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import React, { Suspense, useEffect } from "react";
import RND from "./Components/RND/RND";
import Product1 from "./Components/Product1/Product1";
import Product2 from "./Components/Product2/Product2";
import Product3 from "./Components/Product3/Product3";

// const Home = React.lazy(() => import("./Components/Home/Home"));
// const Contract = React.lazy(() => import("./Components/Contract/Contract"));
// const Technology = React.lazy(() =>
//   import("./Components/Technology/Technology")
// );
// const Contact = React.lazy(() => import("./Components/Contact/Contact"));
// const Product = React.lazy(() => import("./Components/Product/Product"));
// const BlogMain = React.lazy(() =>
//   import("./Components/Blog/BlogMain/BlogMain")
// );
// const BlogDetail = React.lazy(() =>
//   import("./Components/BlogDetail/BlogDetail")
// );
// const WhatsApp = React.lazy(() => import("./Components/WhatsApp/WhatsApp"));

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            {" "}
            Loading ....
          </div>
        }
      >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contract" Component={Contract} />
          <Route path="/technology" Component={Technology} />
          <Route path="/contact" Component={Contact} />
          <Route path="/micronutrientsPremixes" Component={Product1} />
          <Route path="/foodAdditives" Component={Product2} />
          <Route path="/labEquipments" Component={Product3} />
          <Route path="/blog" Component={BlogMain} />
          <Route path="/blog/:id" Component={BlogDetail} />
          <Route path="/whatsapp" Component={WhatsApp} />
          <Route path="/rnd" Component={RND} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
