<template>
  <div class="blog page-content">
    <div class="container">
      <div class="heading-box">
        <h2 class="heading-title heading">
          <span class="black">My</span>
          <span class="main-color"> Blog</span>
        </h2>
        <h2 class="two heading">
          <span class="main-color">My</span>
          <span class="white"> Blog</span>
        </h2>
      </div>
      <MyBlogs />
    </div>
  </div>
</template>

<script>
import MyBlogs from "@/components/blog/MyBlogs";

export default {
  name: "Blog",
  components: {
    MyBlogs
  }
}
</script>
