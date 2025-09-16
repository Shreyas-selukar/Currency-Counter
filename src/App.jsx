import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import useCountries from "./hooks/useCountries";

export default function App() {
  const [theme, setTheme] = useState("light");
  const hook = useCountries(); // hook used in provider components/pages

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light"
    );
  }, [theme]);
  function toggle() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <div>
      <Header onToggleTheme={toggle} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}
