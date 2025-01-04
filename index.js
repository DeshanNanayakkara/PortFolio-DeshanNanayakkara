// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }

    // Add click events to dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Auto-advance slides
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
    


    const projectTrack = document.querySelector('.project-gallery-track');
    const projectSlides = document.querySelectorAll('.project-gallery-slide');
    const projectDots = document.querySelectorAll('.project-gallery-dot');
    const projectPrevBtn = document.querySelector('.project-gallery-prev');
    const projectNextBtn = document.querySelector('.project-gallery-next');
    
    let currentProjectSlide = 0;
    
    function updateProjectGallery() {
        projectTrack.style.transform = `translateX(-${currentProjectSlide * 100}%)`;
        projectDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentProjectSlide);
        });
    }
    
    projectDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentProjectSlide = index;
            updateProjectGallery();
        });
    });
    
    projectPrevBtn.addEventListener('click', () => {
        currentProjectSlide = (currentProjectSlide - 1 + projectSlides.length) % projectSlides.length;
        updateProjectGallery();
    });
    
    projectNextBtn.addEventListener('click', () => {
        currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
        updateProjectGallery();
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
        updateProjectGallery();
    }, 5000);