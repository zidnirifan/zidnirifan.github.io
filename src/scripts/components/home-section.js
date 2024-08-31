class HomeSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `<section class="home section" id="home">
      <div class="home-container grid">
        <div class="home-img">
          <svg
            class="home-blob"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                class="home-blob-img"
                x="12"
                y="12"
                xlink:href="images/portfolio-photo.png"
              />
            </g>
          </svg>
        </div>
        <div class="home-data">
          <h3 class="home-greeting">Hello</h3>
          <h1 class="home-title"><span class="iam">I AM</span> ZIDNI RIF'AN</h1>
          <h3 class="home-subtitle">Backend Developer</h3>
          <p class="about">I am expertise in designing and developing scalable and reliable server-side apps. I enjoy collaborating with other developers and stakeholders to deliver high-quality products that meet user needs and expectations. I like to learn new things and can learn them quickly.</p>
          <div class="home-social-media">
            <a
              href="https://www.linkedin.com/in/zidnirifan"
              class="socmed-icon"
              target="_blank"
              ><i class="uil uil-linkedin"></i
            ></a>
            <a href="https://github.com/zidnirifan" class="socmed-icon" target="_blank"
              ><i class="uil uil-github"></i
            ></a>
            <a href="https://instagram.com" class="socmed-icon" target="_blank"
              ><i class="uil uil-instagram"></i
            ></a>
          </div>
          <a href="#contact" class="contact-button button">Contact Me</a>
        </div>
      </div>
    </section>`;
  }
}

customElements.define('home-section', HomeSection);
