import React, { useContext } from "react";

//providers
import { UserContext } from "../providers/UserProvider.jsx";

//firebase
import { auth } from "../firebase";

//components
import InputLabel from "../components/InputLabel";
import SignInScreen from "./SignInScreen.js";
import InputCard from "../components/InputCard/index.js";
import RoundedImage from "../components/RoundedImage/index.js";

const AccountScreen = ({ props }) => {
  const user = useContext(UserContext);

  //   if (user === null) {
  //     window.location.href = "http://www.w3schools.com";
  //   } else {
  //     const { photoURL, displayName, email } = user;
  //   }
  //   console.log(user);

  return user ? (
    <div className="content">
      <div className="l-account-page shop-page">
        <div className="l-overview">
          <InputCard>
            <div className="l-img">
              <RoundedImage url={user.photoURL} />
            </div>
            <div className="l-name">
              <InputLabel title={user.displayName} />
            </div>
          </InputCard>
        </div>
      </div>
      <div className="l-main-page">
        <div className="l-main">
          <InputLabel title="" />
          <button
            className="w-full py-3 bg-red-600 mt-4 text-white"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <SignInScreen />
  );
};

export default AccountScreen;
