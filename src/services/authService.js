import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

import {auth} from "../firebase";

export const registerNewUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
};
