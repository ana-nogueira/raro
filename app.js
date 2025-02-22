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
  if (itemDesc) {
    itemDesc.classList.add('active');
  }
}

function mouseLeave(event) {
  const itemDesc = event.currentTarget.querySelector('.item-description');
  if (itemDesc) {
    itemDesc.classList.remove('active');
  }
}
