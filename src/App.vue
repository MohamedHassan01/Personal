<template>
  <div id="app">
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
  }
};
</script>
