// Your actual details for each section
const sectionsContent = {
  home: `
    <div class="card">
      <img src="assets/profile.jpg" alt="Profile Photo" />
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

// Section backgrounds/animations
const sections = {
  home: {
    mountainColor: '#eaf7ff',
    eagle: true,
    animation: function () {
      drawMountains('#eaf7ff', '#b4cbe7');
      animateEagle();
    }
  },
  summary: {
    mountainColor: '#f7fafd',
    eagle: false,
    animation: function () {
      drawMountains('#f7fafd', '#d1d8e0', true);
      hideEagle();
    }
  },
  experience: {
    mountainColor: '#e6f3ec',
    eagle: false,
    animation: function () {
      drawMountains('#e6f3ec', '#c1d8cc', false, true);
      hideEagle();
    }
  },
  skillset: {
    mountainColor: '#f1f2f6',
    eagle: false,
    animation: function () {
      drawMountains('#f1f2f6', '#b6b8bb', false, false, true);
      hideEagle();
    }
  },
  education: {
    mountainColor: '#fffbf1',
    eagle: false,
    animation: function () {
      drawMountains('#fffbf1', '#eed9b7', false, false, false, true);
      hideEagle();
    }
  },
  certification: {
    mountainColor: '#f9f6ff',
    eagle: false,
    animation: function () {
      drawMountains('#f9f6ff', '#d3cbe7', false, false, false, false, true);
      hideEagle();
    }
  },
  contact: {
    mountainColor: '#f7f7f7',
    eagle: false,
    animation: function () {
      drawMountains('#f7f7f7', '#bdbdbd', false, false, false, false, false, true);
      hideEagle();
    }
  }
};

// Draw stylized mountains, add snow caps, color varies per section
function drawMountains(bg, fg, night=false, forest=false, hills=false, sun=false, glacier=false, valley=false) {
  const canvas = document.getElementById('mountain-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Background
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Sun or moon
  if (sun) {
    ctx.beginPath();
    ctx.arc(canvas.width*0.85, canvas.height*0.18, 45, 0, 2*Math.PI);
    ctx.fillStyle = '#ffd700';
    ctx.globalAlpha = 0.7;
    ctx.fill();
    ctx.globalAlpha = 1;
  } else if (night) {
    ctx.beginPath();
    ctx.arc(canvas.width*0.12, canvas.height*0.14, 30, 0, 2*Math.PI);
    ctx.fillStyle = '#e6e9fa';
    ctx.globalAlpha = 0.55;
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Foreground mountains
  ctx.beginPath();
  ctx.moveTo(0, canvas.height*0.7);
  ctx.lineTo(canvas.width*0.2, canvas.height*0.5);
  ctx.lineTo(canvas.width*0.4, canvas.height*0.75);
  ctx.lineTo(canvas.width*0.6, canvas.height*0.55);
  ctx.lineTo(canvas.width*0.8, canvas.height*0.8);
  ctx.lineTo(canvas.width, canvas.height*0.6);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fillStyle = fg;
  ctx.globalAlpha = 0.92;
  ctx.fill();
  ctx.globalAlpha = 1;

  // Snow caps (stylized)
  ctx.beginPath();
  ctx.moveTo(canvas.width*0.2, canvas.height*0.5);
  ctx.lineTo(canvas.width*0.23, canvas.height*0.56);
  ctx.lineTo(canvas.width*0.27, canvas.height*0.52);
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.globalAlpha = 0.75;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(canvas.width*0.6, canvas.height*0.55);
  ctx.lineTo(canvas.width*0.62, canvas.height*0.60);
  ctx.lineTo(canvas.width*0.65, canvas.height*0.58);
  ctx.closePath();
  ctx.fillStyle = '#f9f9f9';
  ctx.fill();

  // Trees/hills/etc.
  if (forest) {
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.arc(canvas.width*0.15 + i*50, canvas.height*0.75, 20, 0, 2*Math.PI);
      ctx.fillStyle = '#a5d2b5';
      ctx.fill();
    }
  }
  if (hills) {
    ctx.beginPath();
    ctx.arc(canvas.width*0.7, canvas.height*0.8, 70, 0, Math.PI, true);
    ctx.fillStyle = '#b6b8bb';
    ctx.globalAlpha = 0.8;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  if (glacier) {
    ctx.beginPath();
    ctx.moveTo(canvas.width*0.1, canvas.height*0.68);
    ctx.lineTo(canvas.width*0.13, canvas.height*0.72);
    ctx.lineTo(canvas.width*0.18, canvas.height*0.69);
    ctx.closePath();
    ctx.fillStyle = '#e2f2fd';
    ctx.fill();
  }
  if (valley) {
    ctx.beginPath();
    ctx.arc(canvas.width*0.2, canvas.height*0.9, 60, Math.PI, 2*Math.PI, false);
    ctx.fillStyle = '#bdbdbd';
    ctx.globalAlpha = 0.45;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// Animate the eagle flying from left to right
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

// Load the section content and background animation
function loadSection(section) {
  sections[section].animation();
  document.getElementById('content').innerHTML = sectionsContent[section];
  document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));
  document.querySelector(`nav li[data-section="${section}"]`).classList.add('active');
}

document.querySelectorAll('nav li').forEach(li => {
  li.addEventListener('click', () => {
    const section = li.getAttribute('data-section');
    loadSection(section);
  });
});

window.onload = () => {
  loadSection('home');
  window.addEventListener('resize', () => {
    const activeSection = document.querySelector('nav li.active').getAttribute('data-section');
    sections[activeSection].animation();
  });
};