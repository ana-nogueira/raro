/*TESTIMONIALS FETCH */

const cardList = document.querySelector('.card-list');
const url = './testimonials.json';

const getData = () => {
  fetch(url)
    .then((r) => r.json())
    .then((body) => body.map((item) => setData(item)));
};

getData();

const setData = (testimonial) => {
  let newTestimonial = document.createElement('div');
  newTestimonial.classList.add('card-item');
  newTestimonial.innerHTML = `
 <div class="card-testimonial">
          <img src="./assets/img/quote.svg" alt="">
          <p class="cor-5">${testimonial.text}</p>
        </div>
        <div class="card-autor">
          <img src="./assets/img/${testimonial.profilePic}" alt="">
          <ul>
            <li>
              <h4 class="cor-5">
                ${testimonial.name}
              </h4>
            </li>
            <li><span>${testimonial.business}</span></li>
          </ul>
        </div>
 `;
  cardList.append(newTestimonial);
};



/*CHAT WINDOW */

const closeBtn = document.querySelector('.close-contact');
const contactWindowOpened = document.querySelector('.contact-window-open');
const contactWindowClosed = document.querySelector('.contact-window-closed');
const contactWindowContainer = document.querySelector('.contact-window');

console.log(closeBtn);
closeBtn.addEventListener('click', closeContact);
contactWindowContainer.addEventListener('click', handleClick);

function closeContact(event) {
  event.stopPropagation();
  event.preventDefault();
  contactWindowOpened.classList.remove('active');
  contactWindowClosed.classList.add('active');
}

function handleClick(event) {
  event.preventDefault();
  if (contactWindowClosed.classList.contains('active')) {
    contactWindowClosed.classList.remove('active');
    contactWindowOpened.classList.add('active');
  }
}

/* ITEM DESCRIPTION */

const workItems = document.querySelectorAll('.item');
const itemDescription = document.querySelector('.item-description');

workItems.forEach((item) => {
  item.addEventListener('mouseenter', mouseEnter);
  item.addEventListener('mouseleave', mouseLeave);
});

function mouseEnter(event) {
  const itemDesc = event.currentTarget.querySelector('.item-description');
  itemDesc.classList.add('active');
}

function mouseLeave(event) {
  const itemDesc = event.currentTarget.querySelector('.item-description');
  itemDesc.classList.remove('active');
}

/*TROCAR COR DAS SETAS NO HOVER */

const setasBrancas = document.querySelectorAll('.change-arrow');

const white = './assets/img/seta.svg';
const blue = './assets/img/setablue.svg';

setasBrancas.forEach((item) => {
  item.addEventListener('mouseenter', (event) => changeColor(event, white));
  item.addEventListener('mouseleave', (event) => changeColor(event, blue));
});

function changeColor(event, color) {
  console.log(color);
  const img = event.currentTarget.querySelector('.seta-branca');
  img.setAttribute('src', color);
}

/* SERVICES SLIDER*/

const copy = document.querySelector('.services-slide').cloneNode(true);
document.querySelector('.services').appendChild(copy);
