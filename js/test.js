function moveOn() {
  const animate = document.getElementById("animate");
  let position = 0;
  interval = setInterval(frame, 5);
  function frame() {
    if (position < 350) {
      position++;
      animate.style.top = position + "px";
      animate.style.left = position + "px";
    }
    else{
      clearInterval(interval);
    }
  }
}

