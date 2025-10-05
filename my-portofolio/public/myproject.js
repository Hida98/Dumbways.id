const projectForm = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

let projects = [];

function renderProjects() {
  projectList.innerHTML = "";
  projects.forEach((p, i) => {
    projectList.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${p.image}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.desc}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-dark btn-sm">edit</button>
              <button class="btn btn-danger btn-sm" onclick="deleteProject(${i})">delete</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function deleteProject(index) {
  projects.splice(index, 1);
  renderProjects();
}

projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("projectName").value;
  const desc = document.getElementById("description").value;
  const image = document.getElementById("image").files[0]
    ? URL.createObjectURL(document.getElementById("image").files[0])
    : "https://via.placeholder.com/400x200.png?text=No+Image";

  projects.push({ name, desc, image });
  renderProjects();
  projectForm.reset();
});

renderProjects();
