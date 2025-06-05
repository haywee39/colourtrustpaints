
// // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// SLIDE IN BOX LEFT & RIGHT AS BACKGROUND CHANGES 
let index = 0;
const slides = [
  {
    slide: document.getElementById('slide1'),
    content: document.getElementById('content1'),
    direction: 'left'
  },
  {
    slide: document.getElementById('slide2'),
    content: document.getElementById('content2'),
    direction: 'right'
  }
];

function prepareSlide(slide) {
  slide.slide.style.transition = 'none';
  slide.slide.style.transform = 'translateY(0)';
  slide.slide.style.zIndex = 2;
}

function transitionSlides(current, next) {
  current.slide.style.zIndex = 2;
  next.slide.style.transition = 'none';
  next.slide.style.transform = 'translateY(-100%)';
  next.slide.style.zIndex = 3;
  void next.slide.offsetWidth;

  next.slide.style.transition = 'transform 1.2s ease';
  next.slide.style.transform = 'translateY(0)';

  setTimeout(() => {
    current.slide.style.zIndex = 1;
  }, 1200);
}

function resetContent() {
  slides.forEach(s => {
    const box = s.content;
    box.style.opacity = '0';
    box.classList.remove('slide-box-left', 'slide-box-right');
    box.querySelector('.red-line').style.opacity = 0;
    box.querySelector('.red-line').classList.remove('line-left', 'line-right');
    box.querySelectorAll('h1, h2, button').forEach(el => {
      el.style.opacity = 0;
      el.classList.remove('slideInFromLeft', 'slideInFromRight');
    });
  });
}

function showContent(slide) {
  const box = slide.content;
  const line = box.querySelector('.red-line');

  // Animate the box
  box.classList.remove('slide-box-left', 'slide-box-right');
  void box.offsetWidth;
  box.classList.add(slide.direction === 'left' ? 'slide-box-left' : 'slide-box-right');
  box.style.opacity = 1;

  // Animate red line after box slide-in
  setTimeout(() => {
    line.style.opacity = 1;
    line.classList.remove('line-left', 'line-right');
    void line.offsetWidth;
    line.classList.add(slide.direction === 'left' ? 'line-left' : 'line-right');
  }, 1000);

  // Animate h1, h2, and button inside the box
  const h1 = box.querySelector('h1');
  const h2 = box.querySelector('h2');
  const button = box.querySelector('button');
  const dirClass = slide.direction === 'left' ? 'slideInFromLeft' : 'slideInFromRight';

  setTimeout(() => h1.classList.add(dirClass), 1100);
  setTimeout(() => h2.classList.add(dirClass), 1700);
  setTimeout(() => button.classList.add(dirClass), 2500);
}

function showSlide(i) {
  const current = slides[i];
  const nextIndex = (i + 1) % slides.length;
  const next = slides[nextIndex];

  transitionSlides(current, next);
  resetContent();

  setTimeout(() => {
    showContent(next);
    index = nextIndex;
    setTimeout(() => showSlide(index), 10000);
  }, 1200);
}

window.onload = () => {
  prepareSlide(slides[0]);
  showContent(slides[0]);
  setTimeout(() => showSlide(index), 10000);
};
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// COMPANY LOGO & NAME APPEARS ON Slide in TO THE POINT 

  const section = document.querySelector('#company-name');
  const logo = section.querySelector('.logo');
  const name = section.querySelector('.name');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Reset animation by removing and re-adding the classes
          logo.classList.remove('slide-in-left');
          name.classList.remove('slide-in-right');

          void logo.offsetWidth; // force reflow
          void name.offsetWidth;

          logo.classList.add('slide-in-left');
          name.classList.add('slide-in-right');
        } else {
          // Remove classes so animation can restart next time
          logo.classList.remove('slide-in-left');
          name.classList.remove('slide-in-right');
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);

// *********************************************************************************
// Observer for #product-quality section
const qualitySection = document.querySelector('#product-quality');
const imageDiv = qualitySection.querySelector('.listPic');
const textDiv = qualitySection.querySelector('.list');

const qualityObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imageDiv.classList.remove('left-slide');
        textDiv.classList.remove('right-slide');

        void imageDiv.offsetWidth;
        void textDiv.offsetWidth;

        imageDiv.classList.add('left-slide');
        textDiv.classList.add('right-slide');
      } else {
        imageDiv.classList.remove('left-slide');
        textDiv.classList.remove('right-slide');
      }
    });
  },
  { threshold: 0.5}
);

qualityObserver.observe(qualitySection);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


