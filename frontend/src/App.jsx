import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import MyRecipesPage from "./components/pages/MyRecipesPage";
import CreateRecipesPage from "./components/pages/CreateRecipesPage";
import RecipePage from "./components/pages/RecipePage";
import SearchResultPage from "./components/pages/SearchResultPage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute"; // Import the PublicRoute component
import SearchResultSkeleton from "./components/skeleton/SearchResultSkeleton";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Private Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/my-recipes" element={<MyRecipesPage />} />
          <Route path="/create-recipes" element={<CreateRecipesPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/skeleton" element={<SearchResultSkeleton />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
