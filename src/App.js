import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Home from "./Routes/01_Home/Home";
import Destination from "./Routes/02_Destination/Destination";
import Crew from "./Routes/03_Crew/Crew";
import Technology from "./Routes/04_Technology/Technology";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Route>
    </Routes>
  );
};

export default App;
