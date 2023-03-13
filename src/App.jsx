import Home from "./pages/Home/Home";

import { Route, Routes } from "react-router-dom";
import Crew from "./pages/Crew/Crew";
import Destinations from "./pages/Destinations/Destinations";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default App;
