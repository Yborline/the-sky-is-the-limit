import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import { Suspense, lazy } from "react";

import s from "./App.module.css";
import "./App.module.css";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
  const CasesPage = lazy(() => import("./pages/CasesPage/CasesPage"));
  const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
  const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

  return (
    <div className={s.container}>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
