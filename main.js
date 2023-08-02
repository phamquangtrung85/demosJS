const element = document.createElement("div");
element.textContent = "bạn đang xem nội dung từ file main.js";
element.className = "container";

const rootElement = document.getElementById("root");
rootElement.appendChild(element);
