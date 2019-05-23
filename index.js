const cards = [0, 0.5, 1, 2, 3, 5, 8, 13, 21, '?'];

cards.forEach(value => {
    const card = document.createElement('li');
    card.classList.add('glide__slide');
    card.innerHTML = `<div class="card">
                      <h1>${value}</h1>
                    </div>`;
    document.querySelector('.glide__slides').appendChild(card);
});

new Glide('.glide', {
    type: 'carousel',
    peek: '30',
    animationDuration: 200,
    perTouch: 3
}).mount();
