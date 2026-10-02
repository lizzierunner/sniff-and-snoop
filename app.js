'use strict';

(function () {
  const $ = (id) => document.getElementById(id);

  const dog = $('dog');

  dog.addEventListener('click', () => {
    console.log('Woof!');
  });
}());