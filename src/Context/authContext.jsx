import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [userData, setUserData] = useState();
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);

      if (user) {
        setUserLoggedIn(true);

        const docReference = doc(db, "users", auth.currentUser.uid);
        const snap = await getDoc(docReference);
        console.log("Before we call Data() on Snap: ", snap);

        if (snap.exists()) {
          const data = snap.data();
          console.log("After Data() on Snap: ", data);
          setUserData(data);
          setRole(data.role);
          setUsername(data.username);

          // This Comments are for debuging
          // toast.error("For Dev: authContext -> Doc Paise");
        } else {
          console.log("No User Document Found!");

          toast.error("For Dev: authContext -> Doc Paitese na user er");
        }

        console.log("AuthContext: user", user);
      } else {
        setUserLoggedIn(false);
        setUserData("");
        setRole("");
        setUsername("");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userLoggedIn,
        userData,
        role,
        isLoading,
        username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
