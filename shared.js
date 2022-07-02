const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggelButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
console.log(modalNoButton);

// console.log(modal.style.backgroungImage); // when you any property we need to use camle case notation
// console.log(modal.style['background-image']); // if you want to use same notation then we need to use like that



for (let index = 0; index < selectPlanButtons.length; index++) {
    selectPlanButtons[index].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; This will actually overrite the complete class list of the element so we use classList
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}



function closeModal(){
    backdrop.classList.remove('open');
    if(modal){
        modal.classList.remove('open');
    }
}

toggelButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});