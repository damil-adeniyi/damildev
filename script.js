

// swiper
var swiper = new Swiper(".projects-grids-swiper", {
        slidesPerView: 3,
        spaceBetween: 25,
        // loop: true,
        centerSlide: "true",
        fade: "true",
        grabCursor: "true",
        // slidePerGroup: 3,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        },
      });

// nav link active state on scroll
// 1. Target every link inside the .nav-links wrapper
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

const observerOptions = {
  root: null,
  threshold: 0.6 // Change to 0.6 if you have very long sections
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        // 2. Remove active class from ALL links in .nav-links
        link.classList.remove("active");
        
        // 3. Match the href (e.g., "#about") to the section ID
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));


// back to top button
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    backToTopBtn.style.display = 'flex';
    backToTopBtn.style.opacity = '0.7';
    backToTopBtn.style.transition = '0.5s';
  } else {
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.opacity = '0';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// chat button
const chatBtn = document.querySelector('.chat-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    chatBtn.style.display = 'flex';
    chatBtn.style.opacity = '0.7';
    chatBtn.style.transition = '0.5s';
  } else {
    chatBtn.style.display = 'none';
    chatBtn.style.opacity = '0';
  }
});

chatBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// light mode toggle
const modeToggle = document.querySelector('.mode-toggle');
const modeimg = document.querySelector('.mode-img');
const body = document.body;
const heroImg = document.querySelector('.hero-profile');
modeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (modeimg.getAttribute('src') === 'img/moon.png') {
        modeimg.src = 'img/sun.png';
    } else {
        modeimg.src = 'img/moon.png';
    }

  if (heroImg.getAttribute('src') === 'img/hero.jpg') {
        heroImg.src = 'img/hero2.jpg';
    } else {
        heroImg.src = 'img/hero.jpg';
    }

});