document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".right-nav a");
  const rightNav = document.querySelector(".right-nav");
  const menuToggle = document.querySelector(".menu-toggle");

  // Smooth scroll when clicking menu items
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
      } else if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Close menu after clicking a link (only on mobile)
      if (window.innerWidth <= 1200) {
        rightNav.classList.remove("active");
      }
    });
  });

  // Toggle menu on click
  menuToggle.addEventListener("click", function () {
    rightNav.classList.toggle("active");
  });
});
