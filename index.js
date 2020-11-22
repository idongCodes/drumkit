let btn = document.querySelectorAll('.drum');

// Listen for on screen button click
for (let b = 0; b < btn.length; b++) {

    btn[b].addEventListener('click', function() {

        var btnInnerHTML = this.innerHTML;

        playSound(btnInnerHTML);

        animateBtn(btnInnerHTML);
        
    });

}

// Listen for keyboard key press
document.addEventListener('keydown', function(e) {

    playSound(e.key);

    animateBtn(e.key);

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

function animateBtn(keyPressed) {
    document.querySelector('.' + keyPressed).classList.add('pressed');

    setTimeout(function(){
        document.querySelector('.' + keyPressed).classList.remove('pressed');
    }, 200);
};

let updateDate = new Date().getFullYear();
document.querySelector('#crdate').append(updateDate);