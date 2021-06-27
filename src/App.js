// styles
import "./App.css";

// providers
import UserProvider from "./providers/UserProvider.jsx";
import ApplicationScreen from "./screens/ApplicationScreen";

function App() {
  return (
    <UserProvider>
      <ApplicationScreen />
    </UserProvider>
  );
}

export default App;
