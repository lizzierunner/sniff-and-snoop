'use strict';

(function () {
  const $ = (id) => document.getElementById(id);

  const dog = $('dog');
  const bubble = $('bubble');
  const WOOFS = ['Woof!', 'Case closed!', 'I smell a clue!', 'Treats? Clue!', 'Arf arf!'];
  let bubbleTimer = null;

  dog.addEventListener('click', () => {
    bubble.textContent = WOOFS[Math.floor(Math.random() * WOOFS.length)];
    bubble.classList.add('show');

    dog.classList.remove('happy');
    void dog.offsetWidth; // restarts the wag animation
    dog.classList.add('happy');

    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove('show'), 1800);
  });
}());