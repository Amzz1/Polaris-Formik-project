import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormContact from './component/FormContact';
import {AppProviderContext} from './context'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <AppProvider i18n={enTranslations}>
      <AppProviderContext>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/contact' element={<FormContact/>}/>
       </Routes>
       </AppProviderContext>
  </AppProvider>
  </BrowserRouter>
  </React.StrictMode>
);

