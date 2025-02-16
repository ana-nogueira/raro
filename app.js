const contactWindow = document.querySelector('.close-contact');


console.log(contactWindow.parentElement);


contactWindow.addEventListener('click', closeWindow);

function closeWindow (event) {
    event.preventDefault();
    const target = event.currentTarget.parentElement;
    target.classList.toggle('active');
    target.nextElementSibling.classList.toggle('active');
}


