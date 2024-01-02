let checkbox = document.querySelector('.save');
let btnSignIn = document.querySelector('.authorization_signIn');
let btnSignUp = document.querySelector('.authorization_signUp');
let signInWrap = document.querySelector('.signin_wrap');
let signUpWrap = document.querySelector('.signup_wrap');
let body = document.querySelector('body');
let projectItems = document.querySelectorAll('.projects-item-left');


checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('active')
})

btnSignIn.addEventListener('click', () => {
    signInWrap.style.display = 'block'
    setTimeout(() => {
        signInWrap.classList.add('active');
        signInWrap.classList.contains('active') || signUpWrap.classList.contains('active') ? body.style.overflowY = 'hidden' : body.style.overflowY = 'visible'
    },200)
})

btnSignUp.addEventListener('click', () => {
    signUpWrap.style.display = 'block'
    setTimeout(() => {
        signUpWrap.classList.add('active');
        signUpWrap.classList.contains('active') ? body.style.overflowY = 'hidden' : body.style.overflowY = 'visible'
    },200)
})

window.addEventListener('resize', () => {
    projectItems.forEach((item) => {
        if(window.innerWidth < 768) {
            item.classList.contains('item__order-2') && item.classList.remove('item__order-2')
        } else {
            !item.classList.contains('item__order-2') && projectItems[1].classList.add('item__order-2')
        }
    })
})