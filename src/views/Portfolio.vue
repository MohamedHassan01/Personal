<template>
  <div class="portfolio page-content">
    <div class="container">
      <div class="heading-box">
        <h2 class="heading-title heading">
          <span class="black">My</span>
          <span class="main-color"> Portfolio</span>
        </h2>
        <h2 class="two heading">
          <span class="main-color">My</span>
          <span class="white"> Portfolio</span>
        </h2>
      </div>
      <MyPortfolio />
    </div>
  </div>
</template>

<script>
import MyPortfolio from "@/components/portfolio/MyPortfolio";

export default {
  name: "Portfolio",
  components: {
    MyPortfolio
  }
};
</script>
