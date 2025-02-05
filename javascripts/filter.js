let all=document.querySelector('#all');
let be=document.querySelector('#be');
let fe=document.querySelector('#fe');
let progress=document.querySelectorAll('.progress-container')

all.addEventListener ('click', () => {
    progress.forEach(element => {
        element.style.display='flex';
    });
})
be.addEventListener ('click', () => {
    progress.forEach(element => {
        if (element.classList.contains('be')) {
            element.style.display='flex';
            
        } else {
            element.style.display='none';

        }
    });
})
fe.addEventListener ('click', () => {
    progress.forEach(element => {
        if (element.classList.contains('fe')) {
            element.style.display='flex';
            
        } else {
            element.style.display='none';

        }
    });
})