<template>
  <div class="contact page-content">
    <div class="container">
      <div class="heading-box">
        <h2 class="heading-title heading">
          <span class="black">Contact</span>
          <span class="main-color"> Me</span>
        </h2>
        <h2 class="two heading">
          <span class="main-color">Contact</span>
          <span class="white"> Me</span>
        </h2>
      </div>
      <ContactForm />
      <ContactInfo />
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactInfo
  }
};
</script>
