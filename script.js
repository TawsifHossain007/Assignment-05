// Favourite Feature.
const hearts = document.querySelectorAll(".heart-button");
let heartDisplay = document.getElementById("heart-show");

let heartCount = parseInt(heartDisplay.innerText);

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heartCount++;
    heartDisplay.innerText = heartCount;
  });
});

// Copy Function

const copy = document.querySelectorAll(".copy-button");
let copyDisplay = document.getElementById("copy-show");

let copyCount = parseInt(copyDisplay.innerText);

copy.forEach(function (copyBtn) {
  copyBtn.addEventListener("click", function () {
    copyCount++;
    copyDisplay.innerText = copyCount;

    const numberElement = copyBtn.closest(".bg-white").querySelector(".number");
    const number = numberElement.innerText;

    navigator.clipboard.writeText(number);
    alert(number + " copied!");
  });
});
