import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";


import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/home";
import Settings from "./pages/settings/settings";
import Detailedevent from "./components/detailedevent/detailedevent";

function App() {
  return (
    
    <BrowserRouter>
      <div className="h-screen">        
        <Routes>
          
          <Route path='/' element = { <Home /> } />
          <Route path='/detailed' element = { <Detailedevent /> } />
          <Route path= '/settings' element = { <Settings />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
