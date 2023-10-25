<script setup>
import { useRoute } from "vue-router";
import Head from "../components/Head.vue";
import Navigation from "../components/Navigation.vue";
const route = useRoute();
console.log(route.path);
</script>
<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <Head></Head>
      <div class="tabs">
        <router-link
          class="tab tab-lg tab-bordered"
          :class="route.path == '/UserEdit' ? 'tab-active' : ''"
          :to="{ name: 'UserEdit' }"
          >編輯</router-link
        >
        <router-link
          class="tab tab-lg tab-bordered"
          :class="route.path == '/UserDoll' ? 'tab-active' : ''"
          :to="{ name: 'UserDoll' }"
          >人偶</router-link
        >
      </div>
      <router-view></router-view>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <Navigation></Navigation>
      </ul>
    </div>
  </div>
</template>
