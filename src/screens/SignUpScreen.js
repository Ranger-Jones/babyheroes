import { useContext, useState } from "react";

//components
import Input from "../components/Input";
import InputCard from "../components/InputCard";
import InputLabel from "../components/InputLabel";
import InputButtonGroup from "../components/InputButtonGroup";
import InputButton from "../components/InputButton";

//firebase
import { generateUserDocument, auth, signInWithGoogle } from "../firebase";
import AccountScreen from "./AccountScreen";

//providers
import { UserContext } from "../providers/UserProvider";

const SignUpScreen = () => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return user ? (
    <AccountScreen />
  ) : (
    <div className="content">
      <div className="l-main-page">
        <div className="">
          <InputCard>
            {error !== null && (
              <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <InputLabel title="Sign Up" />
            <Input
              title="Username"
              name="displayName"
              id="displayName"
              value={displayName}
              onChange={onChangeHandler}
            />
            <Input
              title="E-Mail"
              name="userEmail"
              id="userEmail"
              value={email}
              onChange={onChangeHandler}
            />
            <Input
              title="Password"
              name="userPassword"
              id="userPassword"
              value={password}
              onChange={onChangeHandler}
            />
            <Input title="Repeat your Password" />
            <InputButtonGroup>
              <InputButton
                title="Sign Up"
                type="login"
                onClick={(event) => {
                  createUserWithEmailAndPasswordHandler(event, email, password);
                }}
              />
              <InputButton
                title="Sign In with Google"
                type="google"
                onClick={signInWithGoogle}
              />
            </InputButtonGroup>
          </InputCard>
          <InputCard>
            <InputLabel title="Already have an account? Sign in quickly!" />
            <InputButtonGroup style={{ marginLeft: "2vw" }}>
              <InputButton
                title="Sign In"
                style={{ width: "30vw", height: "auto" }}
              />
            </InputButtonGroup>
          </InputCard>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
