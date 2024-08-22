import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)







// são configs para o React poder interagir com O DOM, ele pega o elemento root e faz um arquivo HTML dele