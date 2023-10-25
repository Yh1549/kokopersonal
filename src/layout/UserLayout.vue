<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
// console.log(route.path);
</script>
<template>
  <div class="w-full flex flex-col justify-center">
    <div class="avatar self-center">
      <div class="w-24 rounded-full">
        <img src="../assets/pic-1.jpg" />
      </div>
    </div>
    <div class="tabs m-5 self-center">
      <router-link
        class="tab tab-bordered"
        :class="route.path == '/UserEdit' ? 'tab-active' : ''"
        :to="{ name: 'UserEdit' }"
        >編輯</router-link
      >
      <router-link
        class="tab tab-bordered"
        :class="route.path == '/UserDoll' ? 'tab-active' : ''"
        :to="{ name: 'UserDoll' }"
        >人偶</router-link
      >
    </div>
  </div>
</template>
