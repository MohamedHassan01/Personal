<template>
  <div class="about page-content">
    <AboutMe />
    <Services />
  </div>
</template>

<script>
import AboutMe from "@/components/about/AboutMe";
import Services from "@/components/about/Services";

export default {
  name: "About",
  components: {
    AboutMe,
    Services,
  }
}
</script>
