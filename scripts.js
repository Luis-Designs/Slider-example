const topics = [
  {
    id: 'marketing',
    title: 'MARKETING',
    img: 'https://conovatec.dsdeirl.com/wp-content/uploads/2023/02/marketing.webp',
    alt: 'Marketing',
  },
  {
    id: 'analysis-data',
    title: 'ANÁLISIS DE DATOS',
    img: 'https://conovatec.dsdeirl.com/wp-content/uploads/2023/02/an195161lisis-de-datos.webp',
    alt: 'Análisis de datos',
  },
  {
    id: 'developments',
    title: 'DESARROLLOS',
    img: 'https://conovatec.dsdeirl.com/wp-content/uploads/2023/02/desarrollo-de-software.webp',
    alt: 'Desarrallos',
  },
  {
    id: 'public-relations',
    title: 'RELACIONES PÚBLICAS',
    img: 'https://conovatec.dsdeirl.com/wp-content/uploads/2023/02/relaciones-publicas.webp',
    alt: 'Relacions públicas',
  },
  {
    id: 'human-talent',
    title: 'TALENTO HUMANO',
    img: 'https://conovatec.dsdeirl.com/wp-content/uploads/2023/02/talento-humano.webp',
    alt: 'Talento humano',
  },
];

const Slider = document.querySelector('#slider-to-be-better');
Slider.classList.add('slider');
const widthImg = 260;

const container = document.createElement('div');
const before = document.createElement('button');
const after = document.createElement('button');

after.textContent = '••';
after.id = 'next';
before.textContent = '••';
before.id = 'before';

container.classList.add('slider__container');
container.classList.add('container');
container.appendChild(before);
topics.map(({ id, title, img, alt }, index) => {
  // create a new elements
  const newDiv = document.createElement('div');
  const newImg = document.createElement('img');
  const newAnchor = document.createElement('a');
  const newButton = document.createElement('button');

  newDiv.classList.add('slider__body');
  if (index <= 2) newDiv.classList.add('slider__body--show');

  newDiv.setAttribute('data-id', index + 1);

  newImg.src = img;
  newImg.alt = alt;
  newImg.width = widthImg;

  newAnchor.href = '#' + id;

  newButton.textContent = title;
  newButton.classList.add('btn-image-logos');

  // add elements
  newDiv.appendChild(newImg);
  newDiv.appendChild(newAnchor);

  newAnchor.appendChild(newButton);

  container.appendChild(newDiv);
});
container.appendChild(after);
Slider.appendChild(container);

console.log('🚀 ~ file: scripts.js:36 ~ Slider', Slider);

(function () {
  const sliders = [...document.querySelectorAll('.slider__body')];
  const arrowNext = document.querySelector('#next');
  const arrowBefore = document.querySelector('#before');
  let value;

  arrowNext.addEventListener('click', () => changePosition(1));
  arrowBefore.addEventListener('click', () => changePosition(-3));

  function changePosition(change) {
    const currentElement = [
      ...document.querySelectorAll('.slider__body--show'),
    ][2].getAttribute('data-id');
    console.log(
      '🚀 ~ file: scripts.js:96 ~ changePosition ~ currentElement',
      currentElement
    );

    value = currentElement;

    value += change;

    if (value === 0 || value === sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }

    sliders[currentElement - 3].classList.toggle('slider__body--show');
    console.log(
      '🚀 ~ file: scripts.js:112 ~ changePosition ~ currentElement',
      currentElement - 2
    );
    console.log(
      '🚀 ~ file: scripts.js:112 ~ changePosition ~ currentElement',
      currentElement - 1
    );

    sliders[value - 3].classList.remove('slider__body--show');
    sliders[value - 3].classList.add('slider__body--show');
    // sliders[value - 2].classList.toggle('slider__body--show');
    // sliders[value - 1].classList.toggle('slider__body--show');
    console.log(
      '🚀 ~ file: scripts.js:117 ~ changePosition ~ value',
      value - 2
    );
    console.log(
      '🚀 ~ file: scripts.js:117 ~ changePosition ~ value',
      value - 1
    );

    console.log('🚀 ~ file: scripts.js:106 ~ changePosition ~ value', value);
  }
})();
