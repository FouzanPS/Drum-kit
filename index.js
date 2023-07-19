
// Sound playing
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonValue = this.innerHTML;
        makingSound(buttonValue);
        buttonAnimation(buttonValue);
    });
}
// Keyboard functions
document.addEventListener("keypress",function(event){
    makingSound(event.key);
    buttonAnimation(event.key);
});

//Switching statements
function makingSound (key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(content){
    // here the class for the animation is already created in css file viz "pressed".

    var animation = document.querySelector("."+content);
    animation.classList.add("pressed");
    
    setTimeout(function() {
        animation.classList.remove("pressed");
    },100);

}

/* 
Explaination for future me:
==> Here i made a different function for switch statements (makingSound()) so that it can be used for both keyboard events aswell as sound making
==>i have entered "event" under the paranthisis of keyboard event because it will access all the events of "keypress". On the next 
    line i have given "makingSound(event.key)" because "key" is an event in keypress which access the key which is pressed.
*/