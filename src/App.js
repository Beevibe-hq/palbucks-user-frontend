import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";


import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/home";
import Settings from "./pages/settings/settings";

function App() {
  return (
    
    <BrowserRouter>
      <div className="h-full">        
        <Routes>
          
          <Route path='/' element = { <Home /> } />
          <Route path= '/settings' element = { <Settings />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
