
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