const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggelButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
console.log(modalNoButton);



for (let index = 0; index < selectPlanButtons.length; index++) {
    selectPlanButtons[index].addEventListener('click', function(){
        modal.style.display = 'block';
        backdrop.style.display = 'block';
       
    })
}

backdrop.addEventListener('click', function(){
    mobileNav.style.display = "none";
    closeModal();
});

modalNoButton.addEventListener('click', closeModal);

function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

toggelButton.addEventListener('click', function(){
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});