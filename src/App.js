// styles
import "./App.css";

// router
import { BrowserRouter as Router } from "react-router-dom";

// routes
import Routes from "./Routes";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes />
    </Router>
  );
}

export default App;
