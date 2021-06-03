<template>
  <div
    class="full-width full-height d-flex flex-column align-center justify-center"
  >
    <p>Are you sure you want to logout ?</p>
    <div class="d-flex">
      <button @click="logout">Yes</button>
      <button @click="goBack">No</button>
    </div>
  </div>
</template>
<script setup lang='ts'>
import useAuth from "../hooks/useAuth";
import { useRouter } from "vue-router";
const auth = useAuth();
const router = useRouter();
const logout = async () => {
  await auth.logout();
  router.push("/login");
};
const goBack = () => {
  router.back();
};
</script>
