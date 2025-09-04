import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

export default function useAuthContext() {
  return useContext(AuthContext);
}
