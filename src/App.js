import { Routes, Route } from "react-router-dom";

import Navigation from "./styles/layout/navigation/navigation";
import Home from "./routes/home/home";
import Destination from "./routes/destination/destination";
import Crew from "./routes/crew/crew";
import Technology from "./routes/technology/technology";

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
