import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import { BrowserRouter, Route, Routes,Link as ReactRouterLink } from "react-router-dom";
import { AppProviderContext } from "./context";
import Layout from "./layout/Layout";


const root = ReactDOM.createRoot(document.getElementById("root"));
const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;
function Link({children, url = '', external, ref, ...rest}) {

  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = '_blank';
    rest.rel = 'noopener noreferrer';
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider  i18n={enTranslations} linkComponent={Link}>
        <AppProviderContext >
          <Layout/>
        </AppProviderContext>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
