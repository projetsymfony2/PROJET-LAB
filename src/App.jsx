import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './Accueil';
import Athlete from './Athlete';
import Page from './Page';
import Ath1 from './Athpremier';
import Ath2 from './AthDeuxieme';
import Ath3 from './AthTrois';
import LoginScreen from './loginScreen';
import MainView from './backoffice';
import NewsletterForm from './NewsletterForm';
import FelicitationsPage from './FelicitationsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Accueil" element={<Accueil/>} />
        <Route path="/athlete" element={<Athlete />} />
        <Route path="/athlete/ath1" element={<Ath1 />} />
        <Route path="/athlete/ath2" element={<Ath2 />} />
        <Route path="/athlete/ath3" element={<Ath3 />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/backoffice" element={<MainView/>} />
        <Route path="/subscribe" element={<NewsletterForm/>} />
        <Route path="/felicitation" element={<FelicitationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;