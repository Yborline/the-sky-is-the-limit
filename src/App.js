import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CasesPage from "./pages/CasesPage/CasesPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
