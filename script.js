document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".right-nav a");
  const rightNav = document.querySelector(".right-nav");
  const menuToggle = document.querySelector(".menu-toggle");

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

      if (window.innerWidth <= 1200) {
        rightNav.classList.remove("active");
      }
    });
  });
  menuToggle.addEventListener("click", function () {
    rightNav.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".fotka").forEach((img) => {
    img.addEventListener("click", function () {
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImg");

      modal.style.display = "flex";
      modalImg.src = this.src;
    });
  });

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  document.getElementById("imageModal").addEventListener("click", function (e) {
    if (e.target !== document.getElementById("modalImg")) {
      closeModal();
    }
  });
});
