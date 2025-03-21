import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import MyRecipesPage from "./components/pages/MyRecipesPage";
import CreateRecipesPage from "./components/pages/CreateRecipesPage";
import RecipePage from "./components/pages/RecipePage";
import SearchResultPage from "./components/pages/SearchResultPage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/my-recipes" element={<MyRecipesPage />} />
        <Route path="/create-recipes" element={<CreateRecipesPage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
