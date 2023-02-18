import { Routes, Route } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";

import "./App.css";

const Destination = () => {
  return <div>Destination Page</div>;
};

const Crew = () => {
  return <div>Crew Page</div>;
};

const Technology = () => {
  return <div>Technology Page</div>;
};

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
