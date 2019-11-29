<template>
  <div class="home-cover text-center">
    <img src="../assets/home/photo.jpg" alt="">
    <h1>Mohamed Hassan</h1>
    <h3>Front-End Developer</h3>
    <div class="social">
      <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon" />
      <font-awesome-icon :icon="['fab', 'twitter']" class="icon" />
      <font-awesome-icon :icon="['fab', 'youtube']" class="icon" />
      <font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon" />
      <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCover"
};
</script>
