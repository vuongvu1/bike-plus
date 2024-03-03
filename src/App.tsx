import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MockDataContext, MockDataType } from "./contexts/MockDataContext";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Loading } from "./components/Loading";
import { ScrollToTop } from "./components/ScrollToTop";
import { useFetchMockData } from "./hooks/useFetchMockData";

const HomePage = lazy(() => import("./pages/Home"));
const MarketplacePage = lazy(() => import("./pages/Marketplace"));
const RepairPage = lazy(() => import("./pages/Repair"));
const ErrorPage = lazy(() => import("./pages/Error"));

const App: React.FC = () => {
  const { data, loading } = useFetchMockData();

  return (
    <MockDataContext.Provider value={data as MockDataType}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Body>
          {loading ? (
            <Loading />
          ) : (
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/repair" element={<RepairPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
          )}
        </Body>
        <Footer />
      </BrowserRouter>
    </MockDataContext.Provider>
  );
};

export default App;
