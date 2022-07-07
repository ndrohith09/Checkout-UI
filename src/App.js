import React from 'react';
import { BrowserRouter } from "react-router-dom";
import URLPaths from "./components/routes";
import "./assets/css/styles.css";
import "./assets/fonts/ionicons.min.css";
function App() {
  return (
    <BrowserRouter> 
    <URLPaths /> 
    </BrowserRouter>
      );
}

export default App;
