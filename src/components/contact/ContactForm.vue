<template>
  <div class="contact-form">
    <form action="">
      <div class="form-group">
        <input type="text" class="main-input" id="username" placeholder="Username">
      </div>
      <div class="form-group">
        <input type="text" class="main-input" id="email" placeholder="Email">
      </div>
      <div class="form-group">
        <textarea type="text" class="main-input" id="message" placeholder="Message"></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn-main" value="Send">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm"
};
</script>
