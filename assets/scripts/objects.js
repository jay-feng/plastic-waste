//assigning variables to all the text bubbles, objects, and object locations
let candybubble = document.getElementById("candybubble");
let candy = document.getElementById("candy");
var candyXY = candy.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);
let candyTop = (candyXY.top-140).toString();
let candyRight = (candyXY.right-10).toString();

//assigning variables to all the text bubbles, objects, and object locations
let utensilsbubble = document.getElementById("utensilsbubble");
let utensils = document.getElementById("utensils");
var utensilsXY = utensils.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);
let utensilsTop = (utensilsXY.top-180).toString();
let utensilsRight = (utensilsXY.right-370).toString();

//assigning variables to all the text bubbles, objects, and object locations
let bagbubble = document.getElementById("bagbubble");
let bag = document.getElementById("bag");
var bagXY = bag.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);
let bagTop = (bagXY.top-150).toString();
let bagRight = (bagXY.right+5).toString();

//assigning variables to all the text bubbles, objects, and object locations
let bottlebubble = document.getElementById("bottlebubble");
let bottle = document.getElementById("bottle");
var bottleXY = bottle.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);
let bottleTop = (bottleXY.top-165).toString();
let bottleRight = (bottleXY.right-30).toString();

//assigning variables to all the text bubbles, objects, and object locations
let sixpackbubble = document.getElementById("sixpackbubble");
let sixpack = document.getElementById("sixpack");
var sixpackXY = sixpack.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);
let sixpackTop = (sixpackXY.top-140).toString();
let sixpackRight = (sixpackXY.right-360).toString();

//assigning variables to all the text bubbles, objects, and object locations
let strawsbubble = document.getElementById("strawsbubble");
let straws = document.getElementById("straws");
var strawsXY = straws.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);
let strawsTop = (strawsXY.top-150).toString();
let strawsRight = (strawsXY.right+15).toString();

//assigning variables to all the text bubbles, objects, and object locations
let cigarettebubble = document.getElementById("cigarettebubble");
let cigarette = document.getElementById("cigarette");
var cigaretteXY = cigarette.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);
let cigaretteTop = (cigaretteXY.top-150).toString();
let cigaretteRight = (cigaretteXY.right-15).toString();

//assigning variables to all the text bubbles, objects, and object locations
let platebubble = document.getElementById("platebubble");
let plate = document.getElementById("plate");
var plateXY = plate.getBoundingClientRect();
//console.log(rect.top, rect.right, rect.bottom, rect.left);
let plateTop = (plateXY.top-160).toString();
let plateRight = (plateXY.right+5).toString();

function showTextBubble(bubble, objTop, objRight) {
  bubble.style.top = objTop.concat("px");
  bubble.style.left = objRight.concat("px");
}

candy.onmouseover = function() {
  showTextBubble(candybubble, candyTop, candyRight);
}

utensils.onmouseover = function() {
  showTextBubble(utensilsbubble, utensilsTop, utensilsRight);
}

bag.onmouseover = function() {
  showTextBubble(bagbubble, bagTop, bagRight);
}

bottle.onmouseover = function() {
  showTextBubble(bottlebubble, bottleTop, bottleRight);
}

sixpack.onmouseover = function() {
  showTextBubble(sixpackbubble, sixpackTop, sixpackRight);
}

straws.onmouseover = function() {
  showTextBubble(strawsbubble, strawsTop, strawsRight);
}

cigarette.onmouseover = function() {
  showTextBubble(cigarettebubble, cigaretteTop, cigaretteRight);
}

plate.onmouseover = function() {
  showTextBubble(platebubble, plateTop, plateRight);
}

function appear(obj) {
  var id = setInterval(frame, 50);
  var obj= document.getElementById(obj);
  var opacity = 0;
  function frame() {
    if (opacity >= 1) {
      clearInterval(id);
    } else {
      obj.style.opacity = opacity + 0.15;
      opacity += 0.15;
    }
  }
}

window.onload = setTimeout(function(){
  appear("h1");}, 0);

window.onload = setTimeout(function(){
  appear("utensils");}, 0);

window.onload = setTimeout(function(){
  appear("bag");}, 0);

window.onload = setTimeout(function(){
  appear("bottle");}, 0);

window.onload = setTimeout(function(){
  appear("candy");}, 0);

window.onload = setTimeout(function(){
  appear("sixpack");}, 0);

window.onload = setTimeout(function(){
  appear("straws");}, 0);

window.onload = setTimeout(function(){
  appear("plate");}, 0);

window.onload = setTimeout(function(){
  appear("cigarette");}, 0);
