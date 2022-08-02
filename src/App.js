import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import { Suspense, lazy, Component } from "react";
import MainPage from "./pages/MainPage/MainPage";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CasesPage from "./pages/CasesPage/CasesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import s from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <Suspense fallback={<Spinner />}>
          <Header />

          <HomePage id="section1" />
          <AboutPage id="section2" />
          <CasesPage id="section3" />
          <BlogPage id="section4" />
          <ContactPage id="section5" />

          {/* <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes> */}
        </Suspense>
      </div>
    );
  }
}

export default App;
