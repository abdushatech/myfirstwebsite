
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburgerButton.addEventListener('click', function () {
    console.log('Hamburger clicked!');
    navLinks.classList.toggle('show');
  });
});



const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]

hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})



