const toggleBtn = document.getElementById("markAsRead");
const elements = document.getElementsByClassName("dot");
const notification = document.getElementsByClassName("notification-active");
const number = document.getElementById("no");
const toggleValue = 3;

toggleBtn.addEventListener("click", function() {
  Array.from(elements).forEach(function(element) {
    if (element.style.display === "none") {
      element.style.display = "inline-block";
    } else {
      element.style.display = "none";
    }
  });

  Array.from(notification).forEach(function(element) {
    if (element.style.backgroundColor === "var(--White)"){
        element.style.backgroundColor = "var(--Very-light-grayish-blue)";
    } else {
        element.style.backgroundColor = "var(--White)";
    }
  });

  if (toggleValue === 3) {
    number.innerHTML = "0";
  } else {
    number.innerHTML = "3";
  }
});
