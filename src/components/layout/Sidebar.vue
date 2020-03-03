<template>
  <div class="sidebar">
    <div class="logo">
      <h1>Moog</h1>
    </div>
    <nav>
      <ul class="list-unstyled">
        <li>
          <router-link to="/">
            <font-awesome-icon icon="home" class="icon"></font-awesome-icon>
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <font-awesome-icon icon="user" class="icon"></font-awesome-icon>
            <span>About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/resume">
            <font-awesome-icon icon="poll-h" class="icon"></font-awesome-icon>
            <span>Resume</span>
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio">
            <font-awesome-icon
              icon="briefcase"
              class="icon"
            ></font-awesome-icon>
            <span>Portfolio</span>
          </router-link>
        </li>
        <li>
          <router-link to="/blog">
            <font-awesome-icon icon="blog" class="icon"></font-awesome-icon>
            <span>Blog</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <font-awesome-icon
              icon="phone-square-alt"
              class="icon"
            ></font-awesome-icon>
            <span>Contact</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>
