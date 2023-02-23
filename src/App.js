import { Routes, Route } from "react-router-dom";

import Navigation from "./SCSS/layout/navigation/navigation";
import Home from "./Routes/01_Home/01_Home";
import Crew from "./Routes/02_Crew/crew";
import Destination from "./Routes/03_Destination/destination";
import Technology from "./Routes/04_Technology/technology";

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
