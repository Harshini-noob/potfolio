const phrases = [
  "Web Developer",
  "Python Programmer",
  "C++ Coder",
  "UI Designer"
];

let i = 0; // phrase index
let j = 0; // letter index
let currentPhrase = [];
let isDeleting = false;

function loop() {
  const display = document.getElementById("dynamic");

  display.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length+1 && !isDeleting) {
    isDeleting = true;
    setTimeout(loop, 1000); 
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  const typingSpeed = isDeleting ? 80 : 150;
  setTimeout(loop, typingSpeed);
}

loop();

  window.addEventListener('scroll', () => {
    const element = document.querySelector('.slide-in');
    const position = element.getBoundingClientRect();

    // If the top of the element is visible on screen
    if (position.top < window.innerHeight - 100) {
      element.classList.add('visible');
    }
  });


