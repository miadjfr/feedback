const emojiEls = document.querySelectorAll(".emoji");
const btnEl = document.getElementById("btn");

const feedBackEl = document.querySelector(".feedback");
const responseEl = document.querySelector(".response");
const responseAnswer = document.getElementById("answer");
let selectTarget = "";

emojiEls.forEach((emoji) => {
  emoji.addEventListener("click", (event) => {
    removeActive();

    selectTarget = event.target.innerText || event.target.parentNode.innerText;
    console.log("innertext", selectTarget);
    event.target.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectTarget !== "") {
    if (selectTarget == "Unhappy") {
      feedBackEl.style.display = "none";
      responseAnswer.innerText = selectTarget;

      responseEl.style.display = "block";
    } else if (selectTarget == "Netural") {
      feedBackEl.style.display = "none";
      responseAnswer.innerText = selectTarget;

      responseEl.style.display = "block";
    }
    if (selectTarget == "Satisfiedy") {
      feedBackEl.style.display = "none";
      responseAnswer.innerText = selectTarget;

      responseEl.style.display = "block";
    }
  }
});

function removeActive() {
  emojiEls.forEach((emoji) => {
    emoji.classList.remove("active");
  });
}
