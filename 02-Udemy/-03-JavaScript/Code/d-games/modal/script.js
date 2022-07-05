'use strict';

/* select the hidden items then remove the hidden class */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
// that will create node list (like array) with all the items that have that class and then you can iterate through that array

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openModal);
}
// remove the hidden class

btnCloseModel.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  // the e stand for the event object adn if you log it , it will be the event object

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
