import About from "./Components/About/About";
import './App.scss'
import Contract from "./Components/Contract/Contract";
import Media from "./Components/Media/Media";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Technology from "./Components/Technology/Technology";
import Home from "./Components/Home/Home";
const App = () => {
  return (
    <>
       <BrowserRouter>
         <Routes>
             <Route path="/" Component={About} />
             <Route path="/media" Component={Media} />
             <Route path="/contract" Component={Contract} />
             <Route path="/technology" Component={Technology} />
             <Route path="/home" Component={Home} />
         </Routes>
       </BrowserRouter>
    </>
  );
};

export default App;
