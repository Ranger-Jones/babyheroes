// react
import { useContext, useState } from "react";

//components
import Input from "../components/Input";
import InputCard from "../components/InputCard";
import InputLabel from "../components/InputLabel";
import InputButtonGroup from "../components/InputButtonGroup";
import InputButton from "../components/InputButton";

//firebase
import { signInWithGoogle, auth } from "../firebase";

//providers
import { UserContext } from "../providers/UserProvider";
import AccountScreen from "./AccountScreen";

const SignInScreen = () => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  const onPasswordReset = () => {
    window.location.href = "/passwordreset";
  };

  const onSignUp = () => {
    window.location.href = "/signup";
  };

  return user ? (
    <AccountScreen />
  ) : (
    <div className="content">
      <div className="l-main-page">
        <div className="">
          <InputCard isForm="GAY">
            {error !== null && (
              <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <InputLabel title="Sign In" />
            <Input
              title="Username"
              id="userEmail"
              name="userEmail"
              value={email}
              onChange={(event) => onChangeHandler(event)}
            />
            <Input
              title="Password"
              id="userPassword"
              name="userPassword"
              value={password}
              onChange={(event) => onChangeHandler(event)}
            />
            <InputButtonGroup>
              <InputButton
                title="Sign In"
                type="login"
                onClick={(event) => {
                  signInWithEmailAndPasswordHandler(event, email, password);
                }}
              />
              <InputButton
                title="Sign In with Google"
                type="google"
                onClick={signInWithGoogle}
              />
              <InputButton
                title="Reset your password"
                onClick={onPasswordReset}
                type="reset"
              />
            </InputButtonGroup>
          </InputCard>
          <InputCard>
            <InputLabel title="Don't have an account? Sign up quickly!" />
            <InputButtonGroup style={{ marginLeft: "2vw" }}>
              <InputButton
                title="Sign Up"
                style={{ width: "30vw", height: "auto" }}
                onClick={onSignUp}
              />
            </InputButtonGroup>
          </InputCard>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
