// styles
import "../App.css";

// router
import { BrowserRouter as Router } from "react-router-dom";

// routes
import Routes from "../Routes";

// components
import Navbar from "../components/Navbar";

function ApplicationScreen() {
  return (
    <Router>
      <Navbar />
      <div className="background-image"></div>
      <Routes />
    </Router>
  );
}

export default ApplicationScreen;
