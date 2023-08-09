const mybutton = document.getElementById("backTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 900) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



function showContact() {

  document.getElementById("contact").classList.remove("d-none");
  document.getElementById("contact").classList.add("contact");

}

function closeContact() {

  document.getElementById("contact").classList.remove("contact");
  document.getElementById("contact").classList.add("d-none");
}
