'use strict';

///////////////////////////////////////
//*---------------------- Elements

// MODAL
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// BUTTON SCROLL
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// TABS COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// FADE OUT ANIMATION
const nav = document.querySelector('.nav');
// STICKY NAVIGATION
const header = document.querySelector('.header');

///////////////////////////////////////
//*--------------------- Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// add event listener to each btn
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// close the modal with escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//*-------------------------- button scrolling
btnScrollTo.addEventListener('click', function (e) {
  // work only in new browser
  // we select the element we want to go to
  section1.scrollIntoView({ behavior: 'smooth' });
});

//*--------------------- link navigation

// we use the delegation strategy
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // e.target is where the event happen
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//*----------------- tab component

tabsContainer.addEventListener('click', function (e) {
  // Matching condition
  const clicked = e.target.closest('.operations__tab');

  // GARD clause
  // avoid click out of the buttons so it will go out of the function
  if (!clicked) return;

  // remove the active class from all the tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  // add the active class for the clicked tab
  clicked.classList.add('operations__tab--active');

  // hide the content from the all [remove the content]
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Show activate content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//*----------------------- Menu fade animation

const handelHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      // so we don't choose the hovered element
      if (el !== link) el.style.opacity = this; // opacity
    });
    logo.style.opacity = this; //opacity
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handelHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handelHover(e, 1);
// });

nav.addEventListener('mouseover', handelHover.bind(0.5));
nav.addEventListener('mouseout', handelHover.bind(1));

//*------------------- sticky navigation

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entires, observer) {
  const [entry] = entires;
  // the entry is a special kind of object that has the observer
  // the number of entires depend on the number of thresholds

  // logic
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  // null mean relate to the whole viewport
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//*---------------------  relieve elements on scroll

const allSections = document.querySelectorAll('.section');
const revealSection = function (entires, observer) {
  const [entry] = entires;
  // the entry.target is the element that has been observed

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // stop observing
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
});

//*-------------------------- lazy load images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImage = function (entires, observer) {
  const [entry] = entires;

  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });

  // stop observer
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imageObserver.observe(img));

//*------------------ slider component

const sliders = function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const maxSlide = slides.length;
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    // remove the class from all the dots
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    // add the active class
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  // next slide
  btnRight.addEventListener('click', nextSlide);

  // previous slide
  btnLeft.addEventListener('click', previousSlide);

  //----- keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') previousSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  //-------- dots navigation
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliders();
