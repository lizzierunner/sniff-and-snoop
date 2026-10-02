'use strict';

(function () {
  const $ = (id) => document.getElementById(id);

  // NEW: product data (prices are in cents so the math stays exact)
  const PRODUCTS = [
    { id: 'lens',   icon: '🔍', name: 'Magnifying Glass Chew Toy', desc: 'Squeaks when it finds a clue.', cents: 1299 },
    { id: 'coat',   icon: '🧥', name: 'Tiny Trench Coat',          desc: 'Extra-long fit for extra-long detectives.', cents: 2450 },
    { id: 'hat',    icon: '🎩', name: 'Deerstalker Hat',           desc: 'Ear holes included. Very official.', cents: 1899 },
    { id: 'treats', icon: '🦴', name: 'Clue Treat Tin',            desc: 'Crunchy bone-shaped rewards.', cents: 999 },
    { id: 'book',   icon: '📓', name: 'Case File Notebook',        desc: 'For paw prints and top secret notes.', cents: 1150 },
    { id: 'bed',    icon: '🛏️', name: 'Long Boy Stakeout Bed',    desc: 'A snug spot for long nights on watch.', cents: 3800 }
  ];

  // NEW: turns 1299 into "$12.99"
  const money = (cents) => '$' + (cents / 100).toFixed(2);

  // ---------- Hero dog ----------
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

  // ---------- Shop ----------
  // NEW: build one card per product
  const grid = $('product-grid');

  function renderProducts() {
    PRODUCTS.forEach((p) => {
      const card = document.createElement('article');
      card.className = 'product';

      const icon = document.createElement('div');
      icon.className = 'product-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = p.icon;

      const title = document.createElement('h3');
      title.textContent = p.name;

      const desc = document.createElement('p');
      desc.textContent = p.desc;

      const foot = document.createElement('div');
      foot.className = 'product-foot';

      const price = document.createElement('span');
      price.className = 'price';
      price.textContent = money(p.cents);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn';
      btn.textContent = 'Add to cart';
      btn.setAttribute('aria-label', 'Add ' + p.name + ' to cart');

      foot.append(price, btn);
      card.append(icon, title, desc, foot);
      grid.appendChild(card);
    });
  }

  // NEW: run it
  renderProducts();
}());