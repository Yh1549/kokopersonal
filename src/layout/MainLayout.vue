<script setup>
import Head from "../components/Head.vue";
import Navigation from "../components/Navigation.vue";
import UserLayout from "../layout/UserLayout.vue";
</script>
<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <Head></Head>
      <UserLayout></UserLayout>
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
