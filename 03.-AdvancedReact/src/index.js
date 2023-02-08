import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import Setup from './tutorial/9-custom-hooks/setup/1-fetch-example';


createRoot(document.getElementById('root')).render(
  <div className="container">
      <Setup/>
  </div>
);

