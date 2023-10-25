<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
// console.log(route.path);
</script>
<template>
  <div class="w-full flex flex-col justify-center">
    <div
      class="w-full flex relative h-72 justify-center border-primary border-y-8"
    >
      <iframe
        class="w-2/3 h-full"
        src="https://my.spline.design/untitled-18d75517c6c7d24ac267703c26c745f5/"
      ></iframe>
      <div class="avatar m-auto absolute -bottom-5">
        <div class="w-36 rounded-full">
          <img src="../assets/pic-1.jpg" />
        </div>
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
