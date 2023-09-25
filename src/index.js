import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./components/googleFonts";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-2do42a2tn63f8qmw.us.auth0.com"
    clientId="2IrbmyHPctTUXTGi3NSvbgEz8a2NylNI"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
