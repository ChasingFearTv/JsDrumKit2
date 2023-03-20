

// Detecting Button Press

var drums = document.querySelectorAll(".drum").length;

for (var i = 0; i < drums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("pointerdown", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

    })
}


document.addEventListener("keydown", function (event) {
    makeSound(event.key);
})

document.addEventListener("touch", function (event) {
    makeSound(event.touches);
})

//Detecting Keyboard Press

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);

    }
}











// const drumbutt = document.querySelectorAll('.drum');

// drumbutt.forEach(drum => {
//     drum.addEventListener('pointerdown', e => {
         // play sound
//         const audio = document.querySelector(`audio[data-key="${drum}"]`);
//         if (!audio) return;
//         audio.currentTime = 0;
//         audio.play();

// add dot
//         const dot = document.createElement('div')
//         dot.classList.add('dot')
//         dot.id = e.pointerId
//         positionDot(e, dot)
//         document.body.append(dot)
//     })

//     drum.addEventListener('pointermove', e => {
//         const dot = document.getElementById(e.pointerId)
//         if (dot == null) return
//         positionDot(e, dot)
//     })
//     drum.addEventListener('pointerup', e => {
//         const dot = document.getElementById(e.pointerId)
//         if (dot == null) return
//         dot.remove()
//     })
//     drum.addEventListener('pointercancel', e => {
//         const dot = document.getElementById(e.pointerId)
//         if (dot == null) return
//         dot.remove()
//     })
// })

//var audio = new Audio('sounds/tom-1.mp3');
//audio.play();