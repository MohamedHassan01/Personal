<template>
  <div class="my-portfolio">
    <div class="projects-container">
      <div class="project" :id="project.item" v-for="project in projects" :key="project.title">
        <img :src="project.img" alt />
        <div class="content">
          <h4>{{ project.title }}</h4>
          <div class="buttons">
            <button class="info-btn" @click="project.active = true">More Details</button>
            <button class="live-btn">
              <a :href="project.live" target="_blank">Live Preview</a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-for="project in projects" :key="project.title">
      <div :class="['details', {active: project.active}]">
        <h3>{{ project.title }}</h3>
        <ul class="skills list-unstyled">
          <li v-for="(skill, index) in project.details.skills" :key="index">{{ skill }}</li>
        </ul>
        <div class="image">
          <img :src="project.img" alt />
        </div>
        <div class="buttons">
          <button class="info-btn">
            <a :href="project.details.repo" target="_blank">View Code</a>
          </button>
          <button class="live-btn">
            <a :href="project.live" target="_blank">Live Preview</a>
          </button>
        </div>
      </div>
      <div v-show="project.active" class="details-layer" @click="project.active = false"></div>
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
          live: "#",
          details: {
            skills: ["HTML", "CSS", "Sass", "Javascript", "Vue"],
            repo: "https://github.com/MohamedHassan01/Personal"
          },
          active: true
        },
        {
          item: "two",
          img: require("@/assets/portfolio/CV.png"),
          title: "Personal Portfolio 2",
          url: "#",
          details: {
            skills: ["HTML", "CSS", "JS", "Vue", "Sass"],
            repo: "#"
          },
          active: false
        },
        {
          item: "three",
          img: require("@/assets/portfolio/motoCar.jpg"),
          title: "Personal Portfolio 3",
          url: "#",
          details: {
            skills: ["HTML", "CSS", "JS", "Vue", "Sass"],
            repo: "#"
          },
          active: false
        },
        {
          item: "four",
          img: require("@/assets/portfolio/wolfCapital.jpg"),
          title: "Personal Portfolio 4",
          url: "#",
          details: {
            skills: ["HTML", "CSS", "JS", "Vue", "Sass"],
            repo: "#"
          },
          active: false
        },
        {
          item: "five",
          img: require("@/assets/portfolio/personal.png"),
          title: "Personal Portfolio 5",
          url: "#",
          details: {
            skills: ["HTML", "CSS", "JS", "Vue", "Sass"],
            repo: "#"
          },
          active: false
        }
      ]
    };
  },
  methods: {
    closeDetails() {
      this.projects.forEach(e => (e.active = false));
    }
  },
  mounted() {
    // document.addEventListener("click", this.closeDetails);
  }
};
</script>
