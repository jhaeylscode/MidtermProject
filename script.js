// Smooth Scrolling for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // Close mobile menu
        document.getElementById('navLinks').classList.remove('active');
    });
});

 // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('#navLinks a'); // all nav links

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // animate to X
    navLinks.classList.toggle('active');   // show/hide menu
  });

  // Close menu when clicking a nav link
  links.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active'); // return to hamburger
      navLinks.classList.remove('active');   // hide menu
    });
  });


// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header && window.scrollY > 100) {
        header.classList.add('scrolled');
    } else if (header) {
        header.classList.remove('scrolled');
    }
});

// Scroll Animations (Fade-in on View)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.page-section').forEach(section => {
    observer.observe(section);
});

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === 'index.html' && linkHref === 'index.html') ||
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    // let Formspree handle submission; show small feedback
    formMsg.textContent = 'Sending...';
    setTimeout(()=> formMsg.textContent = 'Thank you — your message was sent (Formspree).', 1200);
  });
}




// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
});
// Background Video Sound Toggle
document.addEventListener('DOMContentLoaded', () => {
    const bgVideo = document.getElementById('bgVideo');
    const soundBtn = document.getElementById('soundBtn');

    if (bgVideo && soundBtn) {
        soundBtn.addEventListener('click', () => {
            if (bgVideo.muted) {
                bgVideo.muted = false;
                bgVideo.play();
                soundBtn.textContent = '🔊';
            } else {
                bgVideo.muted = true;
                soundBtn.textContent = '🔈';
            }
        });
    }
});
document.addEventListener("DOMContentLoaded",function()
{
    const btnAboutme = document.getElementById
    ('btn-aboutme');
    const divAboutme = document.getElementById('info');

    btnAboutme.addEventListener('click', function(){
        if(divAboutme.classList.contains('hide')){
            divAboutme.classList.remove('hide');
            btnAboutme.textContent = "Hide About Me";

        }else{
            divAboutme.classList.add('hide');
            btnAboutme.textContent = "More About Me";
        }


    });
});
// --- Typewriter Effect inside paragraph ---
const words = [" Website Developer", " Graphic Designer", " Coder"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 100;
const pause = 1000;

function type() {
  const el = document.getElementById("changing-word");
  if (!el) return;

  const fullWord = words[i];

  if (isDeleting) {
    currentWord = fullWord.substring(0, j--);
  } else {
    currentWord = fullWord.substring(0, j++);
  }

  el.textContent = currentWord;

  if (!isDeleting && j === fullWord.length + 1) {
    isDeleting = true;
    setTimeout(type, pause);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();


