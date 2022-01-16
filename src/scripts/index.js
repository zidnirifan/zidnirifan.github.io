import '../styles/style.css';
import './components/nav-bar.js';
import './components/home-section.js';
import './components/skills-section.js';
import './components/history-section.js';
import './components/project-section.js';
import './components/certificates-section.js';
import './components/contact-section.js';
import './features/swiper.js';
import './features/activeLink.js';
import './features/shadowHeader.js';
import './features/scrollUp.js';
import './features/darkLightTheme.js';

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
