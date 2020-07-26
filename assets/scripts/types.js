function appear(typeNum) {
  var id = setInterval(frame, 50);
  var type = document.getElementById(typeNum);
  var opacity = 0;
  function frame() {
    if (opacity >= 1) {
      clearInterval(id);
    } else {
      type.style.opacity = opacity + 0.015;
      opacity += 0.1;
    }
  }
}

//nodelist of all the white circles
var whiteCircles = document.getElementsByClassName("itypenav");

//make all the nav circles green
function allgreen() {
  for (var i = 0; i < whiteCircles.length; i++) {
    whiteCircles[i].style.opacity = "0%";
  }
}

window.onload = setTimeout(function(){
  appear("type1");}, 200);

window.onload = setTimeout(function(){
  appear("type2");}, 300);

window.onload = setTimeout(function(){
  appear("type3");}, 400);

window.onload = setTimeout(function(){
  appear("type4");}, 500);

window.onload = setTimeout(function(){
  appear("type5");}, 600);

window.onload = setTimeout(function(){
  appear("type6");}, 700);

window.onload = setTimeout(function(){
  appear("type7");}, 800);

let circles = document.getElementById("circles");
let icircles = document.getElementById("icircles");
let icircle0 = document.getElementById("icircle0");
let icircle1 = document.getElementById("icircle1");
let icircle2 = document.getElementById("icircle2");
let icircle3 = document.getElementById("icircle3");
let icircle4 = document.getElementById("icircle4");
let icircle5 = document.getElementById("icircle5");
let icircle6 = document.getElementById("icircle6");
let icircle7 = document.getElementById("icircle7");


allgreen();
var highlighted1 = false;

//"highlights" the nav circle 0 on hover if its not already highlighted
icircle0.onmouseover = function() {
  if (icircle0.style.opacity == "0") {
    icircle0.style.opacity = "100%";
    highlighted0 = true;
  }
}
icircle0.onmouseout = function() {
  if (highlighted0 == true) {
    icircle0.style.opacity = "0%";
    highlighted0 = false;
  }
}

//"highlights" the nav circle 1 on hover if its not already highlighted
icircle1.onmouseover = function() {
  if (icircle1.style.opacity == "0") {
    icircle1.style.opacity = "100%";
    highlighted1 = true;
  }
}
icircle1.onmouseout = function() {
  if (highlighted1 == true) {
    icircle1.style.opacity = "0%";
    highlighted1 = false;
  }
}

//"highlights" the nav circle 2 on hover if its not already highlighted
icircle2.onmouseover = function() {
  if (icircle2.style.opacity == "0") {
    icircle2.style.opacity = "100%";
    highlighted2 = true;
  }
}
icircle2.onmouseout = function() {
  if (highlighted2 == true) {
    icircle2.style.opacity = "0%";
    highlighted2 = false;
  }
}

//"highlights" the nav circle 3 on hover if its not already highlighted
icircle3.onmouseover = function() {
  if (icircle3.style.opacity == "0") {
    icircle3.style.opacity = "100%";
    highlighted3 = true;
  }
}
icircle3.onmouseout = function() {
  if (highlighted3 == true) {
    icircle3.style.opacity = "0%";
    highlighted3 = false;
  }
}

//"highlights" the nav circle 4 on hover if its not already highlighted
icircle4.onmouseover = function() {
  if (icircle4.style.opacity == "0") {
    icircle4.style.opacity = "100%";
    highlighted4 = true;
  }
}
icircle4.onmouseout = function() {
  if (highlighted4 == true) {
    icircle4.style.opacity = "0%";
    highlighted4 = false;
  }
}

//"highlights" the nav circle 5 on hover if its not already highlighted
icircle5.onmouseover = function() {
  if (icircle5.style.opacity == "0") {
    icircle5.style.opacity = "100%";
    highlighted5 = true;
  }
}
icircle5.onmouseout = function() {
  if (highlighted5 == true) {
    icircle5.style.opacity = "0%";
    highlighted5 = false;
  }
}

//"highlights" the nav circle 6 on hover if its not already highlighted
icircle6.onmouseover = function() {
  if (icircle6.style.opacity == "0") {
    icircle6.style.opacity = "100%";
    highlighted6 = true;
  }
}
icircle6.onmouseout = function() {
  if (highlighted6 == true) {
    icircle6.style.opacity = "0%";
    highlighted6 = false;
  }
}

//"highlights" the nav circle 7 on hover if its not already highlighted
icircle7.onmouseover = function() {
  if (icircle7.style.opacity == "0") {
    icircle7.style.opacity = "100%";
    highlighted7 = true;
  }
}
icircle7.onmouseout = function() {
  if (highlighted7 == true) {
    icircle7.style.opacity = "0%";
    highlighted7 = false;
  }
}

//show nav cirles when scrolling down, hide when scrolling back up to the top
//prevents double navagation options
var showNavCircles = new Waypoint({
  element: document.getElementById('anchor1'),
  handler: function(direction) {
    if (direction == "down") {
      circles.style.display = "flex";
      icircles.style.display = "flex";
      icircle1.style.opacity = "100%";
    } else {
      allgreen();
      circles.style.display = "none";
      icircles.style.display = "none";
    }
  },
  offset: 100
})

//what happens when you scroll up and down anchor 2
var anchor2 = new Waypoint({
  element: document.getElementById('anchor2'),
  handler: function(direction) {
    if (direction == "down") {
      allgreen();
      icircle2.style.opacity = "100%";
    } else {
      allgreen();
      icircle1.style.opacity = "100%";
    }
  },
  offset: 150
})

//what happens when you scroll up and down anchor 3
var anchor3 = new Waypoint({
  element: document.getElementById('anchor3'),
  handler: function(direction) {
    if (direction == "down") {
      allgreen();
      icircle3.style.opacity = "100%";
    } else {
      allgreen();
      icircle2.style.opacity = "100%";
    }
  },
  offset: 150
})

//what happens when you scroll up and down anchor 4
var anchor4 = new Waypoint({
  element: document.getElementById('anchor4'),
  handler: function(direction) {
    if (direction == "down") {
      allgreen();
      icircle4.style.opacity = "100%";
    } else {
      allgreen();
      icircle3.style.opacity = "100%";
    }
  },
  offset: 150
})

//what happens when you scroll up and down anchor 5
var anchor5 = new Waypoint({
  element: document.getElementById('anchor5'),
  handler: function(direction) {
    if (direction == "down") {
      allgreen();
      icircle5.style.opacity = "100%";
    } else {
      allgreen();
      icircle4.style.opacity = "100%";
    }
  },
  offset: 150
})

//what happens when you scroll up and down anchor 6
var anchor6 = new Waypoint({
  element: document.getElementById('anchor6'),
  handler: function(direction) {
    if (direction == "down") {
      allgreen();
      icircle6.style.opacity = "100%";
    } else {
      allgreen();
      icircle5.style.opacity = "100%";
    }
  },
  offset: 150
})

//what happens when you scroll up and down anchor 7
var anchor7 = new Waypoint({
  element: document.getElementById('anchor7'),
  handler: function(direction) {
    if (direction == "down") {
      allgreen();
      icircle7.style.opacity = "100%";
    } else {
      allgreen();
      icircle6.style.opacity = "100%";
    }
  },
  offset: 150
})
