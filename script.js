//your JS code here. If required.
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
let currentIndex = 0;

function updateProgressBar() {
  circles.forEach((circle, index) => {
    if (index <= currentIndex) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentIndex === circles.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

nextButton.addEventListener('click', () => {
  if (currentIndex < circles.length - 1) {
    currentIndex++;
    updateProgressBar();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateProgressBar();
  }
});

updateProgressBar();
