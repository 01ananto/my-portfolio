const emailProjects = [
  {
    id: 1,
    title: "Email Project 1",
    subtitle: "HTML Email",
    file: "email (1).html",
    thumbnail: ""
  },
  {
    id: 2,
    title: "Email Project 2",
    subtitle: "HTML Email",
    file: "email (2).html",
    thumbnail: ""
  },
  {
    id: 3,
    title: "Email Project 3",
    subtitle: "HTML Email",
    file: "email (3).html",
    thumbnail: ""
  },
  {
    id: 4,
    title: "Email Project 4",
    subtitle: "HTML Email",
    file: "email (4).html",
    thumbnail: ""
  },
  {
    id: 5,
    title: "Email Project 5",
    subtitle: "HTML Email",
    file: "email (5).html",
    thumbnail: ""
  },
  {
    id: 6,
    title: "Email Project 6",
    subtitle: "HTML Email",
    file: "email (6).html",
    thumbnail: ""
  },
  {
    id: 7,
    title: "Email Project 7",
    subtitle: "HTML Email",
    file: "email (1).htm",
    thumbnail: ""
  },
  {
    id: 8,
    title: "Email Project 8",
    subtitle: "HTML Email",
    file: "email (2).htm",
    thumbnail: ""
  }
];

const emailGrid = document.getElementById("emailGrid");

const projectModal = document.getElementById("projectModal");
const projectOverlay = document.getElementById("projectOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");
const projectFrame = document.getElementById("projectFrame");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const openFullBtn = document.getElementById("openFullBtn");

const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const contactOverlay = document.getElementById("contactOverlay");
const closeContactBtn = document.getElementById("closeContactBtn");

function getFallbackLetters(title) {
  const words = title.trim().split(" ");
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function createCard(project) {
  const card = document.createElement("article");
  card.className = "card";

  const thumbHTML = project.thumbnail
    ? `
      <div class="card-media">
        <span class="card-badge">HTML Email</span>
        <img src="${project.thumbnail}" alt="${project.title}">
      </div>
    `
    : `
      <div class="card-media fallback">
        <span class="card-badge">HTML Email</span>
        ${getFallbackLetters(project.title)}
      </div>
    `;

  card.innerHTML = `
    ${thumbHTML}
    <div class="card-body">
      <h3 class="card-title">${project.title}</h3>
      <p class="card-subtitle">${project.subtitle}</p>
      <div class="card-actions">
        <button class="btn btn-primary preview-btn">Preview</button>
        <a class="btn btn-outline" href="${encodeURI(project.file)}" target="_blank" rel="noopener noreferrer">Open</a>
      </div>
    </div>
  `;

  const previewBtn = card.querySelector(".preview-btn");
  previewBtn.addEventListener("click", () => openProject(project));

  return card;
}

function renderProjects() {
  emailProjects.forEach((project) => {
    emailGrid.appendChild(createCard(project));
  });
}

function openProject(project) {
  modalTitle.textContent = project.title;
  modalSubtitle.textContent = project.subtitle;
  projectFrame.src = encodeURI(project.file);
  openFullBtn.href = encodeURI(project.file);
  projectModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  projectModal.classList.remove("show");
  projectFrame.src = "";
  document.body.style.overflow = "";
}

function openContact() {
  contactModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeContact() {
  contactModal.classList.remove("show");
  document.body.style.overflow = "";
}

closeModalBtn.addEventListener("click", closeProject);
projectOverlay.addEventListener("click", closeProject);

contactBtn.addEventListener("click", openContact);
closeContactBtn.addEventListener("click", closeContact);
contactOverlay.addEventListener("click", closeContact);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (projectModal.classList.contains("show")) {
      closeProject();
    }
    if (contactModal.classList.contains("show")) {
      closeContact();
    }
  }
});

renderProjects();