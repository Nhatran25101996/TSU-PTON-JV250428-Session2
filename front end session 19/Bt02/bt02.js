let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  { id: 1, content: "Learn Javascript Session 01", dueDate: "2023-04-17", status: "Pending", assignedTo: "Anh Bách" },
  { id: 2, content: "Learn Javascript Session 2", dueDate: "2023-04-17", status: "Pending", assignedTo: "Lâm" },
  { id: 3, content: "Learn CSS Session 1", dueDate: "2023-04-17", status: "Pending", assignedTo: "Hiếu Ci Ớt Ớt" }
];

let editingId = null;

function saveToLocal() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const table = document.getElementById("taskTable");
  table.innerHTML = "";
  tasks.forEach((task, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${task.content}</td>
        <td>${task.dueDate}</td>
        <td>${task.status}</td>
        <td>${task.assignedTo}</td>
        <td>
          <button class="edit" onclick="editTask(${task.id})">Sửa</button>
          <button class="delete" onclick="deleteTask(${task.id})">Xóa</button>
        </td>
      </tr>
    `;
  });
}
function submitTask () {
    let content = document.getElementById("content").value;
    let dueDate = document.getElementById("dueDate").value;
    let status = document.getElementById("status").value;
    let assignedTo = document.getElementById("assignedTo").value
if (!content || !dueDate || !status || !assignedTo) {
    alert("Vui long nhap day du thong tin");
    return;
}
if (editingId) {
    const task = tasks.find(t => t.id === editingId);
    task.content = content;
    task.dueDate = dueDate;
    task.status = status;
    task.assignedTo = assignedTo;
    editingId = null;
  } else {
    const newTask = {
      id: Date.now(),
      content,
      dueDate,
      status,
      assignedTo
    };
    tasks.push(newTask);
  }

  saveToLocal();
  renderTasks();
  document.getElementById("content").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("status").value = "";
  document.getElementById("assignedTo").value = "";
}

function deleteTask(id) {
  if (confirm("Bạn có chắc muốn xoá không?")) {
    tasks = tasks.filter(t => t.id !== id);
    saveToLocal();
    renderTasks();
  }
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  document.getElementById("content").value = task.content;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("status").value = task.status;
  document.getElementById("assignedTo").value = task.assignedTo;
  editingId = id;
}

renderTasks();
