// router
import { BrowserRouter as Switch, Route } from "react-router-dom";

// screens
import HomeScreen from "./screens/HomeScreen";
import HeroBoxScreen from "./screens/HeroBoxScreen";
import ClothesScreen from "./screens/ClothesScreen";
import AboutScreen from "./screens/AboutScreen";
import WheelScreen from "./screens/WheelScreen";
import AttributionScreen from "./screens/AttributionScreen";
import LayoutScreen from "./screens/LayoutScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import AccountScreen from "./screens/AccountScreen";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/boxes" component={HeroBoxScreen} />
      <Route path="/clothes" component={ClothesScreen} />
      <Route path="/about" component={AboutScreen} />
      <Route path="/spinningwheel" component={WheelScreen} />
      <Route path="/attributions" component={AttributionScreen} />
      <Route path="/layout" component={LayoutScreen} />
      <Route path="/items" component={ShoppingScreen} />
      <Route path="/account" component={AccountScreen} />
    </Switch>
  );
};

export default Routes;
