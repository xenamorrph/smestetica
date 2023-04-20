document.addEventListener('DOMContentLoaded', () => {
  const navAnchors = document.querySelector('.b-anchors__nav');
  const navToggle = navAnchors.querySelector('.b-anchors__button');

  navToggle.addEventListener('click', () => {
    navAnchors.querySelector('ul').classList.toggle('js-nav-toggle');
  })
});