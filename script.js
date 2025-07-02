// document.addEventListener("DOMContentLoaded", () => {
//   // Intersection Observer for animations
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       // entry.target.classList.remove('hidden');
      
//     } else {
//       entry.target.classList.remove('show');
//       // entry.target.classList.add('hidden');
//     }
//   });
// }, {
//   threshold: 0.15 // triggers when 25% of the element is visible
// });
// });

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // entry.target.classList.remove('hidden');
        
      } else {
        entry.target.classList.remove('show');
        // entry.target.classList.add('hidden');
      }
    });
  }, {
    threshold: 0.15 // triggers when 25% of the element is visible
  });
  
  // Select all elements with the 'hidden' class (sections)
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#918d8d";
      header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
    }
  });


// Dark mode script
  const toggleBtn = document.getElementById('darkToggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

// Check saved theme on load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  icon.classList.replace('fa-moon', 'fa-sun');
} else {
  icon.classList.replace('fa-sun', 'fa-moon');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');
  icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// const toggleBtn = document.getElementById('darkToggle');
// const body = document.body;
// const icon = toggleBtn.querySelector('i');

// // Check saved theme on load
// if (localStorage.getItem('theme') === 'dark') {
//   body.classList.add('dark-mode');
//   icon.classList.remove('fa-moon');
//   icon.classList.add('fa-sun');
// } else {
//   icon.classList.remove('fa-sun');
//   icon.classList.add('fa-moon');
// }

// // Toggle event
// toggleBtn.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');

//   if (body.classList.contains('dark-mode')) {
//     localStorage.setItem('theme', 'dark');
//     icon.classList.remove('fa-moon');
//     icon.classList.add('fa-sun');
//   } else {
//     localStorage.setItem('theme', 'light');
//     icon.classList.remove('fa-sun');
//     icon.classList.add('fa-moon');
//   }
// });


  