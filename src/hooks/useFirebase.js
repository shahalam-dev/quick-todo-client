import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.config";

const useFirebase = () => {
  const [user, setUser] = useState({});

  const updateUserState = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await setUser(user);
        localStorage.setItem("user_id", user.uid);
      }
    });
  };

  const [errorMsg, setErrorMsg] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const home = "/";

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        await updateUserState();
      })
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        localStorage.removeItem("user_id");
      })
      .then(() => {
        navigate(home, { replace: true });
      });
  };

  return {
    handleGoogleSignIn,
    user,
    logOut,
    errorMsg,
  };
};

export default useFirebase;
