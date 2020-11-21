let btn = document.querySelectorAll('.drum');

for (let b = 0; b < btn.length; b++) {

    btn[b].addEventListener('click', function() {
        // new Audio('./sounds/tom-1.mp3').play();
        var btnInnerHTML = this.innerHTML;
        switch (btnInnerHTML) {
            case "w":
                new Audio('./sounds/tom-1.mp3').play();
                break;
            
            case "a":
                new Audio('./sounds/tom-2.mp3').play();
                break;

            case "s":
                new Audio('./sounds/tom-3.mp3').play();
                break;

            case "d":
                new Audio('./sounds/tom-4.mp3').play();
                break;

            case "j":
                new Audio('./sounds/snare.mp3').play();
                break;

            case "k":
                new Audio('./sounds/kick-bass.mp3').play();
                break;

            case "l":
                new Audio('./sounds/crash.mp3').play();
                break;
        
            default:
                break;
        }
    });

}

let updateDate = new Date().getFullYear();
document.querySelector('#crdate').append(updateDate);


// let audio = new Audio('');
// audio.play();
