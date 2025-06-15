let boxes = document.querySelectorAll('.box');
    const originalColor = document.body.style.backgroundColor;

    boxes.forEach(box => {
      box.onmouseover = function () {
        let color = box.getAttribute('data-color');
        document.body.style.backgroundColor = color;
      };

      box.onmouseout = function () {
        document.body.style.backgroundColor = originalColor;
      };
    });