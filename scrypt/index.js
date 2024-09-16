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

// Читать полностью...
const completely = document.querySelector(".description__full");
const completelyWrap = document.querySelector(".description__paragraph");

if (completely) {
  completely.addEventListener("click", () => {
    completelyWrap.classList.toggle("description__paragraph_full");

    if (completely.textContent === "Свернуть") {
      completely.textContent = "Читать полностью...";
    } else {
      completely.textContent = "Свернуть";
    }
  });
}
//фильтры
const filtersBtn = document.querySelector(".products__filters");
const itemsProducts = document.querySelector(".products__items");
const itemsProductsTitle = document.querySelectorAll(".products__menu-title");
const itemsProductsList = document.querySelectorAll(".products__list-nested");

if (filtersBtn) {
  filtersBtn.addEventListener("click", () => {
    itemsProducts.classList.toggle("active");
    itemsProductsList.forEach((item) => {
      item.classList.remove("active");
    });
    itemsProductsTitle.forEach((item) => {
      item.classList.remove("active");
    });
  });
}

// Функция для выполнения основного кода
function initializeScript() {
  const itemsMobile = document.querySelectorAll(".products__item");

  if (itemsMobile.length) {
    itemsMobile.forEach((item) => {
      item.addEventListener("click", () => {
        const nestedList = item.querySelector(".products__list-nested");
        const titleMobile = item.querySelector(".products__menu-title");
        if (nestedList) {
          nestedList.classList.toggle("active");
          titleMobile.classList.toggle("active");
        }
      });
    });
  }
}

// Проверяем ширину экрана и вызываем функцию при необходимости
function checkScreenSize() {
  if (window.matchMedia("(max-width: 690px)").matches) {
    initializeScript();
  }
}

// Запускаем проверку при загрузке страницы
checkScreenSize();

// Запускаем проверку при изменении размера окна
window.addEventListener("resize", checkScreenSize);

//мобильное меню
const menuMobile = document.querySelector(".menu-mobile");
const headerBurger = document.querySelector(".header__burger");

headerBurger.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-mobile_open");
  headerBurger.classList.toggle("active");
  document.body.classList.toggle("lock");
});

//перебор ссылок моб. меню и закрытие его при клике
const menuLinks = document.querySelectorAll(".header__menu_mobile ul li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("menu-mobile_open");
  });
});
