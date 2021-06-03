<template>
  <div class="menu px-10 green-bg white-text">
    <h1>Vue Survey App</h1>
    <ul v-if="isLoggedIn">
      <li
        v-for="item in items"
        :key="item.href"
        :class="{ active: isActive(item) }"
      >
        <router-link :to="item.href" v-text="item.caption"></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
interface IListItem {
  href: string;
  caption: string;
}

import { computed, watch } from "vue";
import useAuth from "../hooks/useAuth";
import { useRouter } from "vue-router";

const auth = useAuth();
const router = useRouter();

const isLoggedIn = computed(() => auth.isLoggedIn.value);

const currentRoute = computed(() => router.currentRoute.value.path);

const isActive = (item: IListItem) => Boolean(item.href === currentRoute.value);

const items = [
  { href: "/list", caption: "Open Survey List" },
  { href: "/mine", caption: "My Surveys" },
  { href: "/create", caption: "Create new Survey" },
  { href: "/logout", caption: "Logout" },
];
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
}
div ul {
  flex-grow: 0;
  list-style: none;
  display: flex;
  height: 100%;
}
div h1 {
  flex-grow: 1;
}
li {
  padding: 0 10px;
}
li a {
  text-decoration: none;
  color: white !important;
  height: 100%;
  display: flex;
  align-items: center;
}
li.active {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>