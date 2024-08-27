window.addEventListener("scroll", function () {
  var header = document.getElementById("sticky-header");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 200) {
    header.style.top = "0";
  } else {
    header.style.top = "-200px";
  }
});

function typeText(text) {
  const textElement = document.createElement("span");
  const underlineElement = document.createElement("span");
  underlineElement.textContent = "_";
  underlineElement.classList.add("blinking-underline");

  let index = 0;
  let currentText = text;
  const intervalId = setInterval(() => {
    if (index < currentText.length) {
      textElement.textContent += currentText[index];
      underlineElement.classList.remove("blinking-underline");
      void underlineElement.offsetWidth;
      underlineElement.classList.add("blinking-underline");
      index++;
    } else {
      clearInterval(intervalId);
      const typeTextContainer = document.querySelector(".type-text");
      typeTextContainer.removeChild(typeTextContainer.lastChild);
      if (currentText === "ЭТИКЕТКИ") {
        currentText = "НАКЛЕЙКИ";
      } else if (currentText === "НАКЛЕЙКИ") {
        currentText = "ЦЕННИКИ";
      } else {
        currentText = "ЭТИКЕТКИ";
      }
      typeText(currentText);
    }
  }, 200);

  const container = document.createElement("div");
  container.appendChild(textElement);
  container.appendChild(underlineElement);

  const typeTextContainer = document.querySelector(".type-text");
  typeTextContainer.appendChild(container);
  return container;
}

typeText("ЭТИКЕТКИ");

//функция появления кнопки "ВВЕРХ" и плавное пролистывание страницы вверх
const buttonUp = document.querySelector(".button-up");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 1000) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
});

buttonUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
