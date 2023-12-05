import About from "./Components/About/About";
import './App.scss'
import Home from './Components/Home/Home';
import Contract from "./Components/Contract/Contract";
import Media from "./Components/Media/Media";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Technology from "./Components/Technology/Technology";
import RND from "./Components/RND/RND";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/TestComp/Blog/Blog";
const App = () => {
  return (
    <>
       <BrowserRouter>
         <Routes>
             <Route path="/" Component={Home} />
             <Route path="/about" Component={About} />
             <Route path="/media" Component={Media} />
             <Route path="/contract" Component={Contract} />
             <Route path="/technology" Component={Technology} />
             <Route path="/rnd" Component={RND} />
             <Route path="/contact" Component={Contact} />
             <Route path="/test" Component={Blog} />
         </Routes>
       </BrowserRouter>
    </>
  );
};

export default App;
