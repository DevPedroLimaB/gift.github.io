function openPresent() {
  const audio = document.getElementById('rasgo-audio');
  audio.play(); // toca o som de rasgo

  document.getElementById('present-screen').style.display = 'none';
  document.getElementById('content').style.display = 'flex';

  createHearts();
  startSlider();
}

function createHearts() {
  const heartsContainer = document.getElementById('hearts');
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    heartsContainer.appendChild(heart);
  }
}

function startSlider() {
  const imgs = document.querySelectorAll("#slider img");
  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove('active');
    current = (current + 1) % imgs.length;
    imgs[current].classList.add('active');
  }, 6000);
}
const config = {
  spotifyTrackId: '7ETIZFr7163zFcz3RxKk5O' // ID da música "The First Time" – Bruno Major
};

const spotifyEmbed = document.getElementById('spotify-embed');
spotifyEmbed.src = `https://open.spotify.com/embed/track/${config.spotifyTrackId}?utm_source=generator&theme=0`;
s
