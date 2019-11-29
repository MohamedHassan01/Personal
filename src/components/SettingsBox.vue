<template>
  <div class="settings toggle-setting">
    <div class="box-controller" @click="openBox()"  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
      <font-awesome-icon icon="cogs" class="icon"></font-awesome-icon>
    </div>
    <div class="settings-box">
      <div class="setting-header">
        <span>Settings</span>
        <font-awesome-icon @click="closeBox()" icon="times" class="icon"></font-awesome-icon>
      </div>
      <div class="settings-content text-center">
        <div class="color-list">
          <h5 class="option-title">First Color</h5>
          <ul class="list-unstyled">
            <li @click="blueColor"></li>
            <li @click="redColor"></li>
            <li @click="greenColor"></li>
            <li @click="purpleColor"></li>
          </ul>
        </div>
        <div class="back-colors color-list">
          <h5 class="option-title">Secound Color</h5>
          <ul class="list-unstyled">
            <li @click="blueColorBack"></li>
            <li @click="redColorBack"></li>
            <li @click="greenColorBack"></li>
            <li @click="purpleColorBack"></li>
          </ul>
        </div>
        <div class="toggle-sidebar">
          <div class="option-title">
            <h5>Sidebar</h5>
          </div>
          <div @click="togglePower" class="toggle-power">
            <div class="on">On</div>
            <div class="off">Off</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsBox",
  methods: {
    openBox() {
      document.querySelector(".settings-box").classList.remove("toggle-setting");
    },
    closeBox() {
      document.querySelector(".settings-box").classList.add("toggle-setting");
    },

    blueColor() {
      document.body.classList.remove(["red-theme"], ["green-theme"], ["purple-theme"]);
      document.body.classList.add("blue-theme");
    },
    redColor() {
      document.body.classList.remove(["blue-theme"], ["green-theme"], ["purple-theme"]);
      document.body.classList.add("red-theme");
    },
    greenColor() {
      document.body.classList.remove(["red-theme"], ["blue-theme"], ["purple-theme"]);
      document.body.classList.add("green-theme");
    },
    purpleColor() {
      document.body.classList.remove(["red-theme"], ["green-theme"], ["blue-theme"]);
      document.body.classList.add("purple-theme");
    },

    blueColorBack() {
      document.body.classList.remove(["dark-red"], ["dark-green"], ["dark-purple"]);
      document.body.classList.add("dark-blue");
    },
    redColorBack() {
      document.body.classList.remove(["dark-blue"], ["dark-green"], ["dark-purple"]);
      document.body.classList.add("dark-red");
    },
    greenColorBack() {
      document.body.classList.remove(["dark-red"], ["dark-blue"], ["dark-purple"]);
      document.body.classList.add("dark-green");
    },
    purpleColorBack() {
      document.body.classList.remove(["dark-red"], ["dark-green"], ["dark-blue"]);
      document.body.classList.add("dark-purple");
    },

    togglePower() {
      let togglePower = document.querySelector(".toggle-power"),
        sidebar = document.querySelector(".sidebar"),
        pageContent = document.querySelector(".page-content");
      togglePower.classList.toggle("off");
      if (togglePower.className === "toggle-power off") {
        sidebar.classList.add("sidebar-close");
        pageContent.classList.add("page-content-fluid");
      } else {
        sidebar.classList.remove("sidebar-close");
        pageContent.classList.remove("page-content-fluid");
      }
    }
  }
};
</script>
