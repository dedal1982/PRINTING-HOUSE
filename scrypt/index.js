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
  const intervalId = setInterval(() => {
    if (index < text.length) {
      textElement.textContent += text[index];
      underlineElement.classList.remove("blinking-underline");
      void underlineElement.offsetWidth; // Trigger reflow to restart animation
      underlineElement.classList.add("blinking-underline");
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 200);

  const container = document.createElement("div");
  container.appendChild(textElement);
  container.appendChild(underlineElement);

  const typeTextContainer = document.querySelector(".type-text");
  typeTextContainer.appendChild(container);
  return container;
}

// Usage example
typeText("ЭТИКЕТКИ");
