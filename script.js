
// const contactForm = document.querySelector('#contact-form');

// if (contactForm) {
//   contactForm.addEventListener('submit', handleSubmit);
// }

// function handleSubmit(e) {
//   e.preventDefault();

//   const form = e.target;
//   const btn = form.querySelector('button[type="submit"]');
//   const orig = btn.textContent;

//   const payload = {
//     name: form.name.value,
//     email: form.email.value,
//     subject: form.subject.value,
//     message: form.message.value,
//   };

//   btn.disabled = true;
//   btn.textContent = 'Sending...';

//   fetch(form.action, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Form submission failed');
//       }
//       return response.json();
//     })
//     .then(() => {
//       btn.textContent = 'Sent! ✓';
//       btn.style.background = '#2a6b44';
//       form.reset();
//     })
//     .catch(() => {
//       btn.textContent = 'Send Message';
//     })
//     .finally(() => {
//       setTimeout(() => {
//         btn.disabled = false;
//         btn.textContent = orig;
//         btn.style.background = '';
//       }, 3000);
//     });
// }

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