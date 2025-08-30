// List your mountain background images for each section
const mountainImages = {
  home: "assets/mountain1.jpg",
  summary: "assets/mountain2.jpg",
  experience: "assets/mountain3.jpg",
  skillset: "assets/mountain4.jpg",
  education: "assets/mountain5.jpg",
  certification: "assets/mountain6.jpg",
  contact: "assets/mountain7.jpg"
};

function setMountainBackground(section) {
  const bgDiv = document.getElementById('background-animation');
  bgDiv.style.background = `linear-gradient(rgba(240,248,255,0.7),rgba(240,248,255,0.22)), url('${mountainImages[section]}') center/cover no-repeat`;
}

// Animate the eagle flying across the mountains (unchanged)
function animateEagle() {
  const eagle = document.getElementById('eagle');
  eagle.style.opacity = 1;
  eagle.style.left = '-200px';
  eagle.style.top = `${window.innerHeight*0.4}px`;
  gsap.set(eagle, {x: 0});
  gsap.to(eagle, {
    x: window.innerWidth + 200,
    duration: 6,
    ease: "power2.inOut",
    onComplete: () => {
      eagle.style.opacity = 0;
      gsap.set(eagle, {x: 0});
    }
  });
}

function hideEagle() {
  const eagle = document.getElementById('eagle');
  eagle.style.opacity = 0;
  eagle.style.left = '-200px';
  gsap.set(eagle, {x: 0});
}

function loadSection(section) {
  setMountainBackground(section); // Set realistic mountain background
  document.getElementById('content').innerHTML = sectionsContent[section];
  document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));
  document.querySelector(`nav li[data-section="${section}"]`).classList.add('active');
  if (section === "home") animateEagle();
  else hideEagle();
}

document.querySelectorAll('nav li').forEach(li => {
  li.addEventListener('click', () => {
    const section = li.getAttribute('data-section');
    loadSection(section);
  });
});

window.onload = () => {
  loadSection('home');
};
