import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormContact from "./component/FormContact";
import { AppProviderContext } from "./context";
import Layout from "./layout/Layout";
import RecentTasks from "./component/RecentTasks";
import Home from "./component/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider i18n={enTranslations}>
        <AppProviderContext>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<RecentTasks />} />
              <Route path="contact" element={<FormContact />} />
              <Route path='*' element={<RecentTasks/>}/>
            </Route>
          </Routes>
        </AppProviderContext>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
