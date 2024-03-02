import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";

const HomePage = lazy(() => import("./pages/Home"));
const MarketplacePage = lazy(() => import("./pages/Marketplace"));
const RepairPage = lazy(() => import("./pages/Repair"));
const ErrorPage = lazy(() => import("./pages/Error"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Body>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/repair" element={<RepairPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Body>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
