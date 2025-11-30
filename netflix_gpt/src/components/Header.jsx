import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in: ", user);
        dispatch(
          setUser({
            uuid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
      } else {
        console.log("No user is signed in.");
        dispatch(clearUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-4 bg-grdient-to-b from-black z-999 flex w-full flex-row justify-between items-center">
      <img className="w-38" src={LOGO} alt="logo" />
      <div className="flex flex-row justify-between items-center w-2/10 bg-red">
        {user && (
          <>
            <div>
              <img
                alt="userIcon"
                src={user.photoUrl ? user.photoUrl : USER_ICON}
                className="w-10 h-10 rounded-full float-right mt-[-30px]"
              />
            </div>
            <button className="text-white " onClick={() => handleLogout()}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
