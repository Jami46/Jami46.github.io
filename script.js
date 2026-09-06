const data = window.PORTFOLIO;

document.getElementById("year").textContent = new Date().getFullYear();

/* Theme */
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.dataset.theme = savedTheme;
themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
});

/* Scroll progress */
const progress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}, { passive: true });

/* Rotating hero phrase */
const phraseEl = document.getElementById("rotatingPhrase");
let phraseIndex = 0;
setInterval(() => {
  phraseEl.classList.add("phrase-out");
  setTimeout(() => {
    phraseIndex = (phraseIndex + 1) % data.rotatingPhrases.length;
    phraseEl.textContent = data.rotatingPhrases[phraseIndex];
    phraseEl.classList.remove("phrase-out");
    phraseEl.classList.add("phrase-in");
    setTimeout(() => phraseEl.classList.remove("phrase-in"), 350);
  }, 250);
}, 2300);

/* Metrics */
const metricGrid = document.getElementById("metricGrid");
data.metrics.forEach(m => {
  const el = document.createElement("article");
  el.className = "metric-item reveal-card";
  el.innerHTML = `<strong>${m.value}</strong><span>${m.label}</span>`;
  metricGrid.appendChild(el);
});

/* Work */
const workGrid = document.getElementById("workGrid");
data.work.forEach(item => {
  const el = document.createElement("article");
  el.className = "work-card reveal-card";
  el.innerHTML = `
    <div class="work-icon">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
  `;
  workGrid.appendChild(el);
});

/* Case studies */
const caseGrid = document.getElementById("caseGrid");
data.cases.forEach(item => {
  const el = document.createElement("button");
  el.className = "case-card reveal-card";
  el.dataset.caseId = item.id;
  el.innerHTML = `
    <div class="case-number">${item.number}</div>
    <div class="case-arrow">↗</div>
    <h3>${item.title}</h3>
    <p>${item.subtitle}</p>
    <div class="case-stack">${item.stack.slice(0,3).join(" • ")}</div>
  `;
  caseGrid.appendChild(el);
});

const modal = document.getElementById("caseModal");
const modalBody = document.getElementById("modalBody");

function openCase(id) {
  const item = data.cases.find(c => c.id === id);
  if (!item) return;
  modalBody.innerHTML = `
    <div class="modal-index">${item.number} / CASE STUDY</div>
    <h2 id="modalTitle">${item.title}</h2>
    <p class="modal-subtitle">${item.subtitle}</p>

    <div class="case-detail-block">
      <h4>Problem</h4>
      <p>${item.problem}</p>
    </div>

    <div class="case-detail-block">
      <h4>Engineering approach</h4>
      <ul>${item.approach.map(a => `<li>${a}</li>`).join("")}</ul>
    </div>

    <div class="case-detail-block result-block">
      <h4>Outcome</h4>
      <p>${item.result}</p>
    </div>

    <div class="modal-tags">${item.stack.map(t => `<span class="tag">${t}</span>`).join("")}</div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

caseGrid.addEventListener("click", (e) => {
  const card = e.target.closest("[data-case-id]");
  if (card) openCase(card.dataset.caseId);
});
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* AI */
const aiCards = document.getElementById("aiCards");
data.ai.forEach((item, idx) => {
  const el = document.createElement("article");
  el.className = "ai-card reveal-card";
  el.innerHTML = `
    <span class="ai-index">0${idx+1}</span>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
  aiCards.appendChild(el);
});

/* GitHub */
const githubGrid = document.getElementById("githubGrid");
data.github.forEach(item => {
  const el = document.createElement("a");
  el.className = "github-card reveal-card";
  el.href = item.url;
  el.target = "_blank";
  el.rel = "noreferrer";
  el.innerHTML = `
    <div class="github-top">
      <span class="repo-accent">${item.accent}</span>
      <span class="repo-arrow">↗</span>
    </div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <div class="repo-stack">${item.stack}</div>
  `;
  githubGrid.appendChild(el);
});

/* Experience */
const engagementList = document.getElementById("engagementList");
data.engagements.forEach(item => {
  const el = document.createElement("article");
  el.className = "engagement reveal-card";
  el.innerHTML = `
    <div class="engagement-top">
      <div>
        <div class="client-label">CLIENT</div>
        <h4>${item.client}</h4>
        <div class="engagement-role">${item.role}</div>
      </div>
      <div class="period">${item.period}</div>
    </div>
    <p>${item.text}</p>
    <div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
  `;
  engagementList.appendChild(el);
});

const earlierExperience = document.getElementById("earlierExperience");
data.earlierExperience.forEach(item => {
  const el = document.createElement("article");
  el.className = "timeline-item reveal-card";
  el.innerHTML = `
    <div class="timeline-meta">
      <div>
        <h3>${item.role}</h3>
        <div class="company">${item.company}</div>
      </div>
      <div class="period">${item.period}</div>
    </div>
    <p>${item.text}</p>
  `;
  earlierExperience.appendChild(el);
});

/* Skills */
const skillGroups = document.getElementById("skillGroups");
data.skills.forEach(group => {
  const el = document.createElement("article");
  el.className = "skill-card reveal-card";
  el.innerHTML = `<h3>${group.name}</h3><div class="skill-list">${group.items.map(i => `<span>${i}</span>`).join("")}</div>`;
  skillGroups.appendChild(el);
});

/* Reveal transitions */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal, .reveal-card").forEach(el => revealObserver.observe(el));

/* subtle parallax */
const visual = document.querySelector(".hero-visual");
window.addEventListener("pointermove", (e) => {
  if (!visual || window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - .5) * 9;
  const y = (e.clientY / window.innerHeight - .5) * 9;
  visual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});


/* V5 smoothed scroll choreography.
   The target comes from viewport position; the displayed value is eased every frame.
   This removes the V4 "jump" feeling while keeping the expanding-card effect. */
const smoothStages = [...document.querySelectorAll(".smooth-stage")].map(el => ({
  el,
  current: 0,
  target: 0
}));
const toTop = document.getElementById("toTop");

function calculateStageTargets() {
  const vh = window.innerHeight || 800;
  const sweetSpot = vh * .53;
  for (const stage of smoothStages) {
    const r = stage.el.getBoundingClientRect();
    const center = r.top + Math.min(r.height * .38, vh * .50);
    const distance = Math.abs(center - sweetSpot);
    stage.target = Math.max(0, Math.min(1, 1 - distance / (vh * 1.08)));
  }
  if (toTop) toTop.classList.toggle("visible", window.scrollY > vh * .72);
}

function animateStageFocus() {
  for (const stage of smoothStages) {
    stage.current += (stage.target - stage.current) * .075;
    if (Math.abs(stage.target - stage.current) < .0005) stage.current = stage.target;
    stage.el.style.setProperty("--sf", stage.current.toFixed(4));
  }
  requestAnimationFrame(animateStageFocus);
}

window.addEventListener("scroll", calculateStageTargets, {passive:true});
window.addEventListener("resize", calculateStageTargets);
calculateStageTargets();
requestAnimationFrame(animateStageFocus);

if (toTop) {
  toTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
}
