
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let keyboard = document.getElementById("keyboard");
    let textArea = document.getElementById("textArea");
    letters.forEach(letter => {
      const key = document.createElement("div");
      key.className = "key";
      key.textContent = letter;
      key.onclick = () => {
        textArea.value += letter;
      };
      keyboard.appendChild(key);
    });
    const deleteKey = document.createElement("div");
    deleteKey.className = "key delete";
    deleteKey.textContent = "Xoa";
    deleteKey.onclick = () => {
      textArea.value = textArea.value.slice(0, -1);
    };
    keyboard.appendChild(deleteKey);