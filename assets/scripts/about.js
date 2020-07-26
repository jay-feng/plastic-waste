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
  appear("p");}, 0);
