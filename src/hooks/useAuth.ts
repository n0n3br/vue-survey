import { ref, computed } from "vue";
import useFirebase from "./useFirebase";

interface IUser {
  displayName: string | null;
  email: string | null;
}

const user = ref<IUser>({ displayName: null, email: null });
const isLoggedIn = computed(() => Boolean(user.value.displayName));

export default () => {
  const firebase = useFirebase();
  const login = async () => {
    const response = await firebase.login();
    if (!response.user) {
      console.log("error");
      throw new Error("login error");
    }
    user.value = {
      displayName: response.user.displayName,
      email: response.user.email
    };
  };

  const logout = async () => {
    await firebase.logout();
    user.value = { displayName: null, email: null };
  };

  return {
    user,
    isLoggedIn,
    login,
    logout
  };
};
