<template>
  <div
    class="d-flex flex-column full-width full-height justify-center align-center"
  >
    <div class="login-form">
      <p>Welcome to Vue Survey App</p>
      <p>
        In order to use this app you need to authenticate with a Google Account
      </p>
      <button @click="loginWithGoogle">Login with Google</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, watch, computed } from "vue";
import useAuth from "../hooks/useAuth";
import { useRouter } from "vue-router";

const auth = useAuth();
const router = useRouter();
const isLoggedIn = computed(() => auth.isLoggedIn.value);

onMounted(() => {
  if (isLoggedIn) router.push("/list");
});

watch(isLoggedIn, (v) => {
  if (!v) return router.push("/login-error");
  router.push("/list");
});

const loginWithGoogle = async () => {
  try {
    await auth.login();
  } catch (error) {
    alert(error);
  }
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40%;
  min-width: 400px;
}
.container {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
button {
  padding: 10px;
  margin: 20px;
}
</style>