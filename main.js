// Use PNG for mountains and WEBM for eagle animation
const mountainImages = {
  home: "assets/mountain1.png",
  summary: "assets/mountain2.png",
  experience: "assets/mountain3.png",
  skillset: "assets/mountain4.png",
  education: "assets/mountain5.png",
  certification: "assets/mountain6.png",
  contact: "assets/mountain7.png"
};

const sectionsContent = {
  home: `
    <div class="card">
      <img src="assets/profile.png" alt="Profile Photo" />
      <div class="section-title">Keshav Jha</div>
      <div class="section-details">
        <b>Web Developer | Cloud Enthusiast | Learner</b><br>
        Welcome to my portfolio. I am passionate about building web applications, exploring cloud technologies and continually learning new skills.
      </div>
    </div>
  `,
  summary: `
    <div class="card">
      <div class="section-title">Summary</div>
      <div class="section-details">
        Dynamic and enthusiastic developer with experience in web development and cloud platforms. Skilled in front-end and back-end technologies, and always eager to tackle new challenges.
      </div>
    </div>
  `,
  experience: `
    <div class="card">
      <div class="section-title">Experience</div>
      <div class="section-details">
        <ul>
          <li><b>Web Developer Intern</b> – XYZ Solutions (2023-2024)</li>
          <li><b>Cloud Trainee</b> – Azure Bootcamp 2022</li>
        </ul>
      </div>
    </div>
  `,
  skillset: `
    <div class="card">
      <div class="section-title">Skillset</div>
      <div class="section-details">
        <ul>
          <li>HTML, CSS, JavaScript, React</li>
          <li>Node.js, Express</li>
          <li>Azure, AWS basics</li>
          <li>Git, GitHub</li>
        </ul>
      </div>
    </div>
  `,
  education: `
    <div class="card">
      <div class="section-title">Education</div>
      <div class="section-details">
        <b>B.Tech, Computer Science</b> <br>
        ABC Institute of Technology <br>
        2020 - 2024
      </div>
    </div>
  `,
  certification: `
    <div class="card">
      <div class="section-title">Certifications</div>
      <div class="section-details">
        <ul>
          <li>Microsoft Azure Fundamentals</li>
          <li>Responsive Web Design (freeCodeCamp)</li>
        </ul>
      </div>
    </div>
  `,
  contact: `
    <div class="card">
      <div class="section-title">Contact</div>
      <div class="section-details contact-links">
        <a href="mailto:keshavjhasap@gmail.com">Email</a>
        <a href="https://github.com/KeshavJhaSAP" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/keshavjhasap/" target="_blank">LinkedIn</a>
      </div>
    </div>
  `
};

function setMountainBackground(section) {
  const bgDiv = document.getElementById('background-animation');
  const img = mountainImages[section] || "assets/mountain1.png";
  bgDiv.style.background = `linear-gradient(rgba(240,248,255,0.7),rgba(240,248,255,0.15)), url('${img}') center/cover no-repeat`;
}

function animateEagle() {
  const eagle = document.getElementById('eagle');
  eagle.style.opacity = 1;
  eagle.style.left = '-200px';
  eagle.style.top = `${window.innerHeight*0.4}px`;
  gsap.set(eagle, {x: 0});
  gsap.to(eagle, {
    x: window.innerWidth + 250,
    duration: 7,
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
  setMountainBackground(section);
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
