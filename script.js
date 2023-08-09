let mybutton = document.getElementById("backTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
