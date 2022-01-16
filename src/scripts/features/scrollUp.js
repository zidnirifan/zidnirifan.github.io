const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  const height = document.documentElement.offsetHeight;
  const footerHeight = document.querySelector('.footer').offsetHeight;

  const progressPercentage =
    125 - (125 * (window.scrollY + window.innerHeight - footerHeight)) / height;

  const progressCircle = document.querySelector('.progress-percentage');
  progressCircle.style.strokeDashoffset = progressPercentage;

  const bottomHeight =
    document.documentElement.offsetHeight - window.innerHeight - 25;

  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-Up class
  if (window.scrollY >= 318) scrollUp.classList.add('show-scroll');
  if (window.scrollY >= bottomHeight) {
    scrollUp.classList.remove('show-scroll');
    scrollUp.classList.add('up-scroll');
  }
  if (window.scrollY < 318) {
    scrollUp.classList.remove('show-scroll');
  }
  if (window.scrollY < bottomHeight) {
    scrollUp.classList.remove('up-scroll');
  }
};
window.addEventListener('scroll', scrollUp);
