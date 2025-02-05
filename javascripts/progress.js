let circularProgress = document.querySelectorAll('.circular-progress'),
    progressValue = document.querySelectorAll('.progress-value');


let  progressEndValue = [70, 65, 70, 70, 50, 30, 50,40],
    speed = 100;
    for (let i = 0, length = circularProgress.length; i < length; i += 1) {
        let progressStartValue = 0
        let progress = setInterval(() => {
            progressStartValue++;
            progressValue[i].textContent = `${progressStartValue}%`;
            circularProgress[i].style.background = `conic-gradient(#2196f3 ${progressStartValue * 3.6}deg, var(--dark) 0deg)`;
            if(progressStartValue == progressEndValue[i]) {
                clearInterval(progress);
            }
        }, speed)
    }
    
    

