const scrollHeader = () => {
  const nav = document.getElementById('header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (window.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);
