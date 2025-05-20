// Show main content after intro animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 3000);
});
