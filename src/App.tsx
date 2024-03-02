import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Home as HomePage } from "./pages/Home";
import { Marketplace as MarketplacePage } from "./pages/Marketplace";
import { Repair as RepairPage } from "./pages/Repair";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/repair" element={<RepairPage />} />
          </Routes>
        </Body>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
