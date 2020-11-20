let btn = document.querySelectorAll('.drum');

for (let b = 0; b < btn.length; b++) {
    btn[b].addEventListener('click', () => {
        new Audio('./sounds/tom-1.mp3').play();
    });
}

let updateDate = new Date().getFullYear();
document.querySelector('#crdate').append(updateDate);


// let audio = new Audio('');
// audio.play();
