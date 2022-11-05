import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DropdownProvider } from "./contexts/cartDropdown.context";
import { CategoriesProvider } from "./contexts/categories.contexts";
import { UserProvider } from "./contexts/user.context";
import "./index.css";

const root = createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <DropdownProvider>
            <App />
          </DropdownProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
