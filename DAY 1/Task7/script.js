const projectForm = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");


let projects = JSON.parse(localStorage.getItem("projects")) || [
  {
    name: "Dumbways Mobile App",
    start: "2021-01-01",
    end: "2021-04-01",
    desc: "App for Dumbways student, deployed on Playstore.",
    tech: ["Node Js", "React Js"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    name: "E-Commerce Platform",
    start: "2021-05-01",
    end: "2021-07-01",
    desc: "Online shopping platform with payment & cart system.",
    tech: ["React Js", "Node Js"],
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500",
  },
];


function saveToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}


function renderProjects() {
  if (!projectList) return;
  projectList.innerHTML = projects
    .map(
      (p, index) => `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${p.image}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.desc}</p>
            <div class="tech-icons mb-2">
              ${p.tech
                .map((t) =>
                  t.includes("Node")
                    ? '<i class="fa-brands fa-node-js"></i>'
                    : t.includes("React")
                    ? '<i class="fa-brands fa-react"></i>'
                    : t.includes("Next")
                    ? '<i class="fa-solid fa-code"></i>'
                    : '<i class="fa-solid fa-code-branch"></i>'
                )
                .join(" ")}
            </div>
            <div class="d-flex justify-content-between">
              <a href="detail.html?id=${index}" class="btn btn-dark btn-sm">detail</a>
              <button class="btn btn-danger btn-sm" onclick="deleteProject(${index})">delete</button>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}


function addProject(e) {
  e.preventDefault();
  const name = document.getElementById("projectName").value;
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const desc = document.getElementById("description").value;

  const tech = [];
  document
    .querySelectorAll("input[type=checkbox]:checked")
    .forEach((el) => tech.push(el.value));

  const image = document.getElementById("image").files[0]
    ? URL.createObjectURL(document.getElementById("image").files[0])
    : "https://via.placeholder.com/400x200.png?text=No+Image";

  projects.push({ name, start, end, desc, tech, image });

  saveToLocalStorage();
  renderProjects();
  projectForm.reset();
}


function deleteProject(index) {
  projects.splice(index, 1);
  saveToLocalStorage();
  renderProjects();
}


function renderDetail() {
  const detailContainer = document.getElementById("projectDetail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id !== null && projects[id]) {
    const p = projects[id];
    detailContainer.innerHTML = `
      <h2 class="fw-bold">${p.name}</h2>
      <p><b>Duration:</b> ${p.start} - ${p.end}</p>
      <img src="${p.image}" class="img-fluid rounded mb-3" alt="${p.name}">
      <p>${p.desc}</p>
      <div class="tech-icons">
        ${p.tech
          .map((t) =>
            t.includes("Node")
              ? '<i class="fa-brands fa-node-js"></i>'
              : t.includes("React")
              ? '<i class="fa-brands fa-react"></i>'
              : t.includes("Next")
              ? '<i class="fa-solid fa-code"></i>'
              : '<i class="fa-solid fa-code-branch"></i>'
          )
          .join(" ")}
      </div>
    `;
  } else {
    detailContainer.innerHTML = "<p>Project not found.</p>";
  }
}


if (projectForm) projectForm.addEventListener("submit", addProject);


renderProjects();
renderDetail();
