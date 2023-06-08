import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// My Components
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ApplicationPage from "./pages/ApplicationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
