import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DropdownProvider } from "./contexts/cartDropdown.context";
import { ProductProvider } from "./contexts/products.context";
import { UserProvider } from "./contexts/user.context";
import "./index.css";

const root = createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <DropdownProvider>
            <App />
          </DropdownProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
