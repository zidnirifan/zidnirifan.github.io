class ContactSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<section class="section contact" id="contact">
      <h2 class="section-title">Contact</h2>
      <div class="contact-container grid">
        <a
          href="https://www.linkedin.com/in/zidnirifan"
          target="_blank"
          class="contact-item phone grid"
        >
          <i class="uil uil-linkedin contact-icon"></i>
          <h3 class="contact-title">Linkedin</h3>
          <p class="contact-address">linkedin.com/in/zidnirifan</p>
        </a>
        <a
          href="mailto:zidni.rifan7@gmail.com"
          target="_blank"
          class="contact-item grid"
        >
          <i class="uil uil-envelope-alt contact-icon"></i>
          <h3 class="contact-title">Email</h3>
          <p class="contact-address">zidni.rifan7@gmail.com</p>
        </a>
        <a
          href="https://www.google.com/maps/place/Kabupaten+Banyuwangi,+Jawa+Timur/@-8.3322203,113.6609897,9z/data=!3m1!4b1!4m5!3m4!1s0x2dd154169714acef:0x3027a76e352bce0!8m2!3d-8.2190944!4d114.3691416"
          target="_blank"
          class="contact-item grid"
        >
          <i class="uil uil-map-marker contact-icon"></i>
          <h3 class="contact-title">Location</h3>
          <p class="contact-address">Banyuwangi, Indonesia</p>
        </a>
      </div>
    </section>`;
  }
}

customElements.define('contact-section', ContactSection);
