   let todos = [
      { title: "Xin việc ở Google", completed: true },
      { title: "Mua biệt thự", completed: true },
      { title: "Cưới vợ", completed: false },
      { title: "Mua xe hơi", completed: false },
      { title: "Sinh con", completed: false },
      { title: "Đi du lịch vòng quanh thế giới", completed: false },
    ];

    function renderTodos() {
      const list = document.getElementById("todoList");
      list.innerHTML = "";

      todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : "";

        const span = document.createElement("span");
        span.textContent = todo.title;
        span.onclick = () => toggleComplete(index);

        const actions = document.createElement("div");
        actions.className = "action-buttons";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Sửa";
        editBtn.onclick = () => editTodo(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.onclick = () => deleteTodo(index);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
        list.appendChild(li);
      });
    }

    function addTodo() {
      const input = document.getElementById("todoInput");
      const title = input.value.trim();
      if (title === "") return;

      todos.push({ title, completed: false });
      input.value = "";
      renderTodos();
    }

    function toggleComplete(index) {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    }

    function editTodo(index) {
      const newTitle = prompt("Chỉnh sửa công việc:", todos[index].title);
      if (newTitle !== null && newTitle.trim() !== "") {
        todos[index].title = newTitle.trim();
        renderTodos();
      }
    }

    function deleteTodo(index) {
      if (confirm("Bạn có chắc muốn xóa công việc này?")) {
        todos.splice(index, 1);
        renderTodos();
      }
    }

    renderTodos();