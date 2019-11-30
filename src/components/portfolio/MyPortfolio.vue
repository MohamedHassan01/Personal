<template>
  <div class="my-portfolio">
    <div class="project" :id="project.item" v-for="project in projects" :key="project.title">
      <img :src="project.img" alt />
      <div class="content">
        <h4>{{ project.title }}</h4>
        <div class="buttons">
          <button class="info-btn">More Details</button>
          <button class="live-btn">Live Preview</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPortfolio",
  data() {
    return {
      projects: [
        {
          item: "one",
          img: require("@/assets/portfolio/personal.png"),
          title: "Personal Portfolio",
          url: "#"
        },
        {
          item: "two",
          img: require("@/assets/portfolio/CV.png"),
          title: "Personal Portfolio 2",
          url: "#"
        },
        {
          item: "three",
          img: require("@/assets/portfolio/motoCar.jpg"),
          title: "Personal Portfolio 3",
          url: "#"
        },
        {
          item: "four",
          img: require("@/assets/portfolio/wolfCapital.jpg"),
          title: "Personal Portfolio 4",
          url: "#"
        },
        {
          item: "five",
          img: require("@/assets/portfolio/personal.png"),
          title: "Personal Portfolio 5",
          url: "#"
        }
      ]
    };
  }
};
</script>
