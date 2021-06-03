import firebase from "firebase/app";
import "firebase/auth";
import config from "../config/firebase";
const provider = new firebase.auth.GoogleAuthProvider();

interface ILogin {
  user: firebase.User;
  credential: firebase.auth.AuthCredential;
}

export default () => {
  const init = async () => {
    if (firebase.apps.length) return;
    await firebase.initializeApp(config);
  };

  const login = async <ILogin>() => {
    if (!firebase.apps.length) await init();
    const response = await firebase.auth().signInWithPopup(provider);
    const { user, credential } = response;
    return { user, credential };
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return { login, logout };
};
