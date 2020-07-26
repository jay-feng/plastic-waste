function appear(obj) {
  var id = setInterval(frame, 50);
  var obj= document.getElementById(obj);
  var opacity = 0;
  function frame() {
    if (opacity >= 1) {
      clearInterval(id);
    } else {
      obj.style.opacity = opacity + 0.03;
      opacity += 0.1;
    }
  }
}

window.onload = setTimeout(function(){
  appear("h1");}, 0);

window.onload = setTimeout(function(){
  appear("h2");}, 0);

window.onload = setTimeout(function(){
  appear("recycle");}, 500);

window.onload = setTimeout(function(){
  appear("objects");}, 900);

window.onload = setTimeout(function(){
  appear("label1");}, 500);

window.onload = setTimeout(function(){
  appear("label2");}, 900);
