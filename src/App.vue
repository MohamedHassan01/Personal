<template>
  <div id="app">
    <div class="loader-wrapper">
      <img src="./assets/home/avatar.png" alt="" />
      <div class="loader"></div>
    </div>

    <Sidebar />
    <SettingsBox />
    <vue-page-transition name="flip-y">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import Sidebar from "@/components/layout/Sidebar";
import SettingsBox from "@/components/SettingsBox";

export default {
  components: {
    Sidebar,
    SettingsBox
  },
  mounted() {
    document.querySelector(".loader-wrapper").style.display = "none";
  }
};
</script>
