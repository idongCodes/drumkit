let btn = document.querySelectorAll('button');

for (let b = 0; b < btn.length; b++) {
    btn[b].addEventListener('click', () => {
        alert('I got clicked !!');
    });
}

let updateDate = new Date().getFullYear();
document.querySelector('#crdate').append(updateDate);