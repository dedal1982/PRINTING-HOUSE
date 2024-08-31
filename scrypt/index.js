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
  const typeTextContainer = document.querySelector(".type-text");
  if (document.body.contains(typeTextContainer)) {
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
    typeTextContainer.appendChild(container);
  }
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

//функция открывающая список продуктов
const items = document.querySelectorAll(".products__item");

function toggleActive(event) {
  const currentItem = event.currentTarget;
  const nestedList = currentItem.querySelector(".products__list-nested");
  const currentTitle = currentItem.querySelector(".products__menu-title");

  items.forEach((item) => {
    const list = item.querySelector(".products__list-nested");
    const title = item.querySelector(".products__menu-title");

    if (list && list !== nestedList) {
      list.classList.remove("active");
    }

    if (title && title !== currentTitle) {
      title.classList.remove("active");
    }
  });

  if (nestedList) {
    nestedList.classList.add("active");
  }

  if (currentTitle) {
    currentTitle.classList.add("active");
  }
}

items.forEach((item) => {
  item.addEventListener("click", toggleActive);
});
// Читать полностью...
const completely = document.querySelector(".description__full");
const completelyWrap = document.querySelector(".description__wrapper");

if (completely) {
  completely.addEventListener("click", () => {
    completelyWrap.classList.add("description__wrapper_full");
  });
}
