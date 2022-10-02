const supremo = document.getElementById("supremo");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

function jump() {
  supremo.classList.add("jump-animation");
  setTimeout(() =>
    supremo.classList.remove("jump-animation"), 700);
}

document.addEventListener('keypress', (event) => {
  if (!supremo.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const supremoTop = parseInt(window.getComputedStyle(supremo)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && supremoTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);
