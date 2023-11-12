// setup date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());
// setup nav
const navBtn = document.getElementById('nav-btn');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});

// handle form submit
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  // reset form
  const formElements = document.querySelectorAll('.form-control');
  formElements.forEach((elem) => {
    elem.value = '';
  });
});

//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    navbar.classList.remove('showNav');
    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
