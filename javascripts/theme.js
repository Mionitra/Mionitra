const themeBtn = document.querySelector('.theme');
const icon = document.querySelector('.fa.fa-sun');
const body = document.querySelector('body');
const img = document.querySelector('#profil');
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    themeBtn.classList.toggle('activated');
    if(icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    }
    
})