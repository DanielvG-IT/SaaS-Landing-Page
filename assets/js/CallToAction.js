// JavaScript code for CallToAction
document.querySelector("signup-button").addEventListener("click", function () {
  this.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "/signup";
  }, 500);
});

document.querySelector("login-button").addEventListener("click", function () {
  this.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "/login";
  }, 500);
});