const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const cuentaTareas = document.querySelector("#cuenta-tareas");
const tareasRealizadas = document.querySelector("#tareas-realizadas");
let tareas = [
  {id: 1, tarea: 'Maqueta HTML', complete: true},
  {id: 2, tarea: 'Linkear CSS', complete: true},
  {id: 3, tarea: 'Definir var en JS', complete: false}
];
let contadorTareas = 4; 

btnAgregar.addEventListener("click", () => {
  const tarea = tareaInput.value;
  tareas.push({ id: contadorTareas++, tarea: tarea, complete: false });
  tareaInput.value = "";
  renderList(tareas);
});
renderList(tareas);

function renderList(tareas) {
  let html = "";
  let tareasCompletadas = tareas.filter((tarea) => tarea.complete).length;
  for (let tarea of tareas) {
    const estado = tarea.complete ? "check" : "";
    html += `<li class="${estado}" data-id="${tarea.id}">${tarea.tarea} (ID: ${tarea.id}) <button class="btnDelete" onclick="borrar(${tarea.id})">X</button></li>`;
  }
  listaDeTareas.innerHTML = html;
  cuentaTareas.textContent = `Total de tareas: ${tareas.length}`;
  tareasRealizadas.textContent = `Tareas realizadas: ${tareasCompletadas}`;
}

function borrar(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  renderList(tareas);
}

listaDeTareas.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const id = parseInt(e.target.getAttribute("data-id"));
		const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
		tareas[tareaIndex].complete = !tareas[tareaIndex].complete;
		renderList(tareas);
  }
});