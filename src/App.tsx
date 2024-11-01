import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Login from './pages/login/Login'
import Dashboard from "./pages/dashboard"
import Starships from "./pages/dashboard/starships";
import Species from "./pages/dashboard/species";
import People from "./pages/dashboard/people";
import Overview from "./pages/dashboard/overview";
import DetailsPage from "./pages/dashboard/detailsPage";
import PeoplePage from "./pages/dashboard/people-details-page";
import StarshipPage from "./pages/dashboard/starship-details-page";
import SpeciesPage from "./pages/dashboard/species-details-page";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Overview />} />
          <Route path="starships" element={<Starships />} />
          <Route path="people" element={<People />} />
          <Route path="species" element={<Species />} />
          <Route path="details-page/:id" element={<DetailsPage />} />
          <Route path="people/people-details-page/:id" element={<PeoplePage />} />
          <Route path="starships/starships-details-page/:id" element={<StarshipPage />} />
          <Route path="species/specie-details-page/:id" element={<SpeciesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
