
let obstacleTimers = [];
let gameStarted = false;
let gameTimerId;
let myScore = 0;
let highScore = 0;
let highScoreNickname = "anonymous panda";
let myNickname;
let myClientId;
let myPublishChannel;
let gameChannel;
let gameChannelName = "flappy-game";
let allBirds = {};
let topScoreChannel;
let topScoreChannelName = "flappy-top-score";

if (localStorage.getItem("flappy-nickname")) {
  myNickname = localStorage.getItem("flappy-nickname");
} else {
  myNickname = nickNamesDictionary[Math.floor(Math.random() * 34)];
  localStorage.setItem("flappy-nickname", myNickname);
}
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
Example
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

document.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector(".sky");
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground-moving");
  let nicknameInput = document.getElementById("nickname-input");
  let updateNicknameBtn = document.getElementById("update-nickname");
  let scoreLabel = document.getElementById("score-label");
  let topScoreLabel = document.getElementById("top-label");
  let scoreList = document.getElementById("score-list");
  var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
  let birdLeft = 220;
  let birdBottom = 350;
  let gravity = 2;
  let isGameOver = false;
  let gap = 440;

  const filterNickname = async (nicknameText) => {
    
  };

  
  updateNicknameBtn.addEventListener("click", () => {
    
  });

  window.addEventListener("keydown", function (e) {
    
  });

  realtime.connection.once("connected", () => {
    
    };
  });
  
  var x = document.forms["frm1"];
var text = "";
var i;
for (i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
   function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
    for (item in allBirds) {
      if (allBirds[item].targetBottom) {
        let tempBottom = parseInt(allBirds[item].el.style.bottom);
        tempBottom += (allBirds[item].targetBottom - tempBottom) * 0.5;
        allBirds[item].el.style.bottom = tempBottom + "px";
      }
    }
  }
document.getElementById("demo").innerHTML = text;
  
  function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
  document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;
  var x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements

  

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
    for (item in allBirds) {
      if (allBirds[item].targetBottom) {
        let tempBottom = parseInt(allBirds[item].el.style.bottom);
        tempBottom += (allBirds[item].targetBottom - tempBottom) * 0.5;
        allBirds[item].el.style.bottom = tempBottom + "px";
      }
    }
  }
  
  var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";
  var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
  
  var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object
  var x = 16 + "Volvo";
  var x = "16" + "Volvo";
  var x = 16 + "Volvo";
  var x = "Volvo" + 16;
  var x = 16 + 4 + "Volvo";
  var x = "Volvo" + 16 + 4;
  function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
  
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
  function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
  function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
  function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
document.getElementById("demo").innerHTML = toCelsius;
  var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";
  var text = "The temperature is " + toCelsius(77) + " Celsius";
  var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  

  function jump() {
    new_location = speed + old_location

    new_speed = acceleration + old_speed
    
    gravity = 5; // tune this to get the gravity you want

    birdYPos = birdYPos + birdYSpeed;

    birdYSpeed = birdYSpeed + gravity;
    
    birdYSpeed = -6; // negative because "up"
  }

  function generateObstacles(randomHeight) {
    if (!isGameOver) {
      let obstacleLeft = 500;
      let obstacleBottom = randomHeight;

      const obstacle = document.createElement("div");
      const topObstacle = document.createElement("div");
      obstacle.classList.add("obstacle");
      topObstacle.classList.add("topObstacle");
      gameDisplay.appendChild(obstacle);
      gameDisplay.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + "px";
      obstacle.style.bottom = obstacleBottom + "px";
      topObstacle.style.left = obstacleLeft + "px";
      topObstacle.style.bottom = obstacleBottom + gap + "px";
      let timerId = setInterval(moveObstacle, 20);
      obstacleTimers.push(timerId);
      function moveObstacle() {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";
        if (obstacleLeft === 220) {
          myScore++;
          setTimeout(() => {
            sortLeaderboard();
          }, 400);
        }
        if (obstacleLeft === -50) {
          clearInterval(timerId);
          gameDisplay.removeChild(obstacle);
          gameDisplay.removeChild(topObstacle);
        }
        if (
          (obstacleLeft > 200 &&
            obstacleLeft < 280 &&
            birdLeft === 220 &&
            (birdBottom < obstacleBottom + 210 ||
              birdBottom > obstacleBottom + gap - 150)) ||
          birdBottom === 0
        ) {
          for (timer in obstacleTimers) {
            clearInterval(obstacleTimers[timer]);
          }
          sortLeaderboard();
          gameOver();
        }
      }
    }
  }

  function gameOver() {
    if (this.state !== this.states.gameOver) {
            this.fx.play('hit');

            this.state = this.states.gameOver;
        }
  }

  function sendPositionUpdates() {
    
  }


  
});