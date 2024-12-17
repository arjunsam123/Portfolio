let currentSlide = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    // Update current slide index based on direction
    currentSlide += direction;

    // Loop around if at the start or end
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Calculate the translate value based on the current slide
    const translateX = -(currentSlide * 100) + '%';
    carouselInner.style.transform = `translateX(${translateX})`;
}
function validateForm() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  let valid = true;

  // Clear previous error messages
  document.getElementById('firstNameError').textContent = '';
  document.getElementById('lastNameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('confirmPasswordError').textContent = '';

  // Password validation
  if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    valid = false;
  }

  return valid;
}

