let students = [
      { name: "A", age: 18, className: "A1" },
      { name: "B", age: 22, className: "A1" }
    ];

    let editIndex = -1;

    function addStudent() {
      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();
      const className = document.getElementById("class").value.trim();

      if (!name || !age || !className) return alert("Vui long nhap thong tin!");

      if (editIndex === -1) {
        
        students.push({ name, age: Number(age), className });
      } else {
    
        students[editIndex] = { name, age: Number(age), className };
        editIndex = -1;
      }

      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("class").value = "";

      renderStudents();
    }

    function renderStudents() {
      const list = document.getElementById("studentList");
      const search = document.getElementById("search").value.toLowerCase();
      list.innerHTML = "";

      students
        .filter(s => s.name.toLowerCase().includes(search))
        .forEach((student, index) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.className}</td>
            <td>
              <button class="edit-btn" onclick="editStudent(${index})">Sửa</button>
              <button class="delete-btn" onclick="deleteStudent(${index})">Xóa</button>
            </td>
          `;
          list.appendChild(row);
        });
    }

    function deleteStudent(index) {
      if (confirm("Chac chan xoa sinh vien nay khong?")) {
        students.splice(index, 1);
        renderStudents();
      }
    }

    function editStudent(index) {
      const student = students[index];
      document.getElementById("name").value = student.name;
      document.getElementById("age").value = student.age;
      document.getElementById("class").value = student.className;
      editIndex = index;
    }

    renderStudents();