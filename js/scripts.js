function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHalf;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();

function initNavbarTopOnScroll() {
  const barraDeNavegacao = document.querySelector(".navbar");

  function verifyOnScroll() {
    if (window.scrollY > barraDeNavegacao.clientHeight) {
      barraDeNavegacao.classList.add("barra-ativa");
    } else {
      barraDeNavegacao.classList.remove("barra-ativa");
    }
  }
  verifyOnScroll();
  window.addEventListener("scroll", verifyOnScroll);
}

initNavbarTopOnScroll();

function initScrollDownSuave() {
  const linksInternos = document.querySelectorAll(".mouse-down");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollDownSuave();
