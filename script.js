const wrapper = document.querySelector('.wrapper');
 const loginLink = document.querySelector('.login-link');
 const Teachers = document.querySelector('.Teachers');
 const Students = document.querySelector('.Students');
//  const registerLink = document.querySelector('.register-link');
 const btnPopup = document.querySelector('.btnLogin-popup');
 const iconClose = document.querySelector('.icon-close');

 
 function showOptions() {
    document.getElementById("options").style.display = "block";
}

//  registerLink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

