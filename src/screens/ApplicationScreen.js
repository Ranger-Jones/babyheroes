// styles
import "../App.css";

// router
import { BrowserRouter as Router } from "react-router-dom";

//react
import { useContext } from "react";

// routes
import Routes from "../Routes";

// components
import Navbar from "../components/Navbar";

//providers
import { UserContext } from "../providers/UserProvider";
import AccountScreen from "./AccountScreen";

function ApplicationScreen() {
  const user = useContext(UserContext);
  return (
    <Router>
      <Navbar />
      <div className="background-image"></div>
      <Routes />
    </Router>
  );
}

export default ApplicationScreen;
