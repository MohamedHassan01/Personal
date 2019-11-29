<template>
  <div class="resume page-content">
    <Education />
    <Experience />
  </div>
</template>

<script>
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";

export default {
  name: "resume",
  components: {
    Education,
    Experience
  }
}
</script>