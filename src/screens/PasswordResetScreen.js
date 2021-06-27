// react
import { useState } from "react";

//components
import Input from "../components/Input";
import InputCard from "../components/InputCard";
import InputLabel from "../components/InputLabel";
import InputButtonGroup from "../components/InputButtonGroup";
import InputButton from "../components/InputButton";

//firebase
import { auth } from "../firebase";

const PasswordResetScreen = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  return (
    <div className="content">
      <div className="l-main-page">
        <div className="">
          <InputCard>
            {emailHasBeenSent && (
              <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
                An email has been sent to you!
              </div>
            )}
            {error !== null && (
              <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <InputLabel title="Reset your Password" />
            <Input
              title="Email"
              id="userEmail"
              name="userEmail"
              value={email}
              onChange={onChangeHandler}
            />
            <InputButtonGroup>
              <InputButton
                title="Reset your password"
                type="reset"
                onClick={sendResetEmail}
              />
            </InputButtonGroup>
          </InputCard>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetScreen;
