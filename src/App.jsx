import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./Pages/Home/Home";
import ContactPage from "./Pages/Contact/Contact";
import SignupPage from "./Pages/Signup/Signup";
import SigninPage from "./Pages/Signin/Signin";
import DetailPage from "./Pages/DetailPage/Detail";
import ResultsPage from "./Pages/ResultsPage/Results";
import AboutUsPage from "./Pages/AboutUsPage/About";
import ProfilePage from "./Pages/ProfilePage/Profile";
import FAQPage from "./Pages/FAQPage/FAQ";
import AdvertisePage from "./Pages/AdvertisePage/Advertise";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignupPage />} />\
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/detailpage/:id" element={<DetailPage />} />
            <Route path="/resultpage" element={<ResultsPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/advertise" element={<AdvertisePage />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="*" element={"Page Not Found"} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
