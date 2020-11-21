let btn = document.querySelectorAll('.drum');

// Listen for on screen button click
for (let b = 0; b < btn.length; b++) {

    btn[b].addEventListener('click', function() {

        var btnInnerHTML = this.innerHTML;

        playSound(btnInnerHTML);
        
    });

}

// Listen for keyboard key press
document.addEventListener('keydown', function(e) {

    playSound(e.key);

});

// This function will be passed into the ones above. The character argument will either represent the keyboard key pressed or the on screen button clicked
function playSound(character) {
    switch (character) {
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
            console.log(btnInnerHTML);
    }
}

let updateDate = new Date().getFullYear();
document.querySelector('#crdate').append(updateDate);