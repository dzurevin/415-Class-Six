console.log("we have js!");

let button = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');
let drawer = document.querySelector('.drawer');
let drawerToggle = document.querySelector('.drawer-toggle');
let modalCurtain = document.querySelector('.modal-curtain');
let modalButton = document.querySelector('.show-modal');
let modalClose = document.querySelector('.modal-close');
let accTop = document.querySelectorAll('.accordion-top');
let accBody = document.querySelector('.accordion-content');
let acc = document.querySelectorAll('.accordion');


/*
function toggleMenu() {
     menu.classList.toggle('open');
}

function toggleDrawer() {
     drawer.classList.toggle('drawer-open');
}

toggle.addEventListener('click', toggleMenu);
drawerToggle.addEventListener('click', toggleDrawer);
*/


function toggleClass(event) {
     event.preventDefault();
     menu.classList.toggle('open');
}

function toggleDrawer() {
     drawer.classList.toggle('drawer-open');
}

function hideModal() {
     modalCurtain.classList.remove('show');
}

function hideModal() {
     modalCurtain.classList.remove('show');
}

function accToggle() {
     acc.forEach(ac => ac.classList.remove('open'));
     this.parentNode.classList.toggle('open');
}



button.addEventListener('click', toggleClass);
drawerToggle.addEventListener('click', toggleDrawer);

//Show the modal
modalButton.addEventListener('click', function() {
     modalCurtain.classList.add('show');
})
//Hide the modal
modalClose.addEventListener('click', hideModal);
modalCurtain.addEventListener('click', hideModal);

//Toggle accordion
accTop.forEach(at => at.addEventListener('click', accToggle))
