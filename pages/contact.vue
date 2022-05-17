<template>
  <section id="contact" class="general-section">
    <div class="contact-cover">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="contact-left">
              <h1 class="h1">Contact</h1>
              <p class="contact-info">Please fill the below form and our team will get back to you soon.</p>
              <ul class="list-unstyled">
                <li><a href="mailto:contact@casino.com">contact@casino.com</a></li>
                <li><a href="tel:+1 916-509-7138">+1 916-509-7138</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contact-form">
              <form action="mailto:info@chz.dev" accept-charset="UTF-8" method="POST" id="contactForm">
                <span class="success-msg">The message is sended!</span>
                <div class="form-element">
                  <input type="text" placeholder="Your name" name="name" class="form-control">
                  <!-- <span class="error-msg">This is an error message!</span> -->
                </div>
                <div class="form-element">
                  <input type="text" placeholder="Your email" name="email" class="form-control">
                  <!-- <span class="error-msg">This is an error message!</span> -->
                </div>
                <div class="form-element">
                  <textarea name="message" id="message" placeholder="Message..." class="form-control"></textarea>
                  <!-- <span class="error-msg">This is an error message!</span> -->
                </div>
                <div class="text-end">
                  <button type="submit" class="contact-btn">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Contact'
}
</script>
