const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".desktop-nav");
if (menu) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
      nav?.classList.remove("open");
      menu?.setAttribute("aria-expanded","false");
    }
  });
});
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".desktop-nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, {rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section => observer.observe(section));
