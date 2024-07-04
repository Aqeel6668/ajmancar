'use strict';

/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

/**
 * HERO SECTION SLIDESHOW
 */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var fname = document.getElementById('fname').value.trim();
  var lname = document.getElementById('lname').value.trim();
  var subject = document.getElementById('subject').value.trim();
  var errorMessage = document.getElementById('error-message');
  var successMessage = document.getElementById('success-message');

  if (fname === '' || lname === '' || subject === '') {
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Optionally, clear the form fields
    document.getElementById('bookingForm').reset();
  }
});
