import "./App.css";
import HoursLocationMain from "./Components/Pages/Hours_Location/HoursLocationMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HappeningsPage from "./Components/Pages/HappeningsPage/HappeningsPage";
import DefaultPage from "./Components/DefaultPage/DefaultPage";
import MenuPage from "./Components/Pages/MenuPage/MenuPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/macinate/" element={<DefaultPage />} />
          <Route path="/menu-page" element={<MenuPage />} />
          <Route path="/hours-location-page" element={<HoursLocationMain />} />
          <Route path="/happenings-page" element={<HappeningsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
