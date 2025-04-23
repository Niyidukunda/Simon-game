var buttonColors = ['green', 'red', 'blue', 'yellow'];
var gamePattern = [];
var userClickPattern = [];
var randomChosenColor;
var level=0;
var pig = false;



// Generate the next sequence
function nextSequence() {
    
    userClickPattern=[];
    level++;
    $("#level-title").html("Level "+level);
    const randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNumber];
    animatePress(randomChosenColor);
    makeSound(randomChosenColor);  // Optional: add sound here to indicate new sequence
    gamePattern.push(randomChosenColor);
    console.log('gamePattern: '+gamePattern );
    console.log('userClickPattern: '+userClickPattern);
   

   // compareVals(colors);
    
}


// Play sound for the button
function makeSound(color) {
    var nxtSound = new Audio("sounds/" + color + ".mp3");
    nxtSound.play().catch(error => {
        console.error("Audio playback error:", error);
    });
}

// Create Screen animation for button clicked
function animatePress(currentColor){
   
    const buttn = $("."+ currentColor);
    buttn.addClass('pressed');
    setTimeout(function(){buttn.removeClass("pressed")},100);
}
function checkAnswer(currentlevel){
    
  //  console.log('gamepattern: ' +gamePattern +" "+'User: '+userClickPattern );
if (userClickPattern[currentlevel]===gamePattern[currentlevel]){
    //console.log('success');
    makeSound(userClickPattern[currentlevel]);
    animatePress(userClickPattern[currentlevel]);
    if(userClickPattern.length===gamePattern.length){
       setTimeout(nextSequence,1000);
    }
        //else {
           // userClicks();
       // }
    }
            else{ console.log('Fail');

            gameOver();


        }
       
    }
function gameOver(){
var color = "wrong";
makeSound(color);
$('body').addClass('game-over');
setTimeout(function(){$('body').removeClass('game-over')},1000) 
$('#level-title').text('Press A key to start');
gamePattern=[];
level=0;
pig =false;
setTimeout(start,1000);
}



// Start the game sequence

    

    $(document).on('keydown',function(){
    if (!pig){
        pig= true;
       
        $('#level-title').html("Level "+level);
        setTimeout(nextSequence,500);
       
        
    }
  // userClicks();
    
            
          });
        
          $(".btn").on('click',function(){

            var userChosenColor = this.id;
                  userClickPattern.push(userChosenColor);
                 // var currentIndex=userClickPattern.length-1;
                 //console.log(userClickPattern);
                  checkAnswer(userClickPattern.length-1);
                 // makeSound(userChosenColor);  // Fix: play sound for the user's chosen color
                  
        
                 // animatePress(userChosenColor);
                 // setTimeout(nextSequence,1000);
                  //nextSequence();
});
//}
// Record user clicks
//function userClicks(){

   // }

