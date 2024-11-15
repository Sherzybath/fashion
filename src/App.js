import Hero from "./components/homepage/Hero";
import Homepage from "./components/homepage/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/dashboard/Display";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scroll = new LocomotiveScroll()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage/>}
          />
          <Route
            path="/dashboard"
            element={<Dashboard/>}
          />
          <Route
            path="/display/:id"
            element={<Display/>}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
