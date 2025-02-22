const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
    } else if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
