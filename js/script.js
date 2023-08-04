const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]

hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})

<!-- read more js-->
  <script>
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
</script>
