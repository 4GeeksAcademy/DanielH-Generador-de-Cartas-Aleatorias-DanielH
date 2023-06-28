/* eslint-disable */
import "bootstrap";
import "./style.css";

function generadedPalos() {
  const suits = ["♦", "♥", "♠", "♣"];

  let suitRandom = Math.floor(Math.random() * suits.length);
  return suits[suitRandom];
}

function generadedNumber() {
  const cardValue = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let numberRandom = Math.floor(Math.random() * cardValue.length);

  return cardValue[numberRandom];
}

function selectColorSuit() {
  let suitCards = document.querySelectorAll(".cardPalo");
  suitCards.forEach(element => {
    if (element.innerHTML === "♥" || element.innerHTML === "♦") {
      element.style.color = "red";
    } else {
      element.style.color = "";
    }
  });
}

function generateCard() {
  let suitResult = generadedPalos();
  let suitCards = document.querySelectorAll(".cardPalo");
  suitCards.forEach(element => {
    element.innerHTML = suitResult;
  });

  let numberResult = generadedNumber();
  let numberCards = document.querySelector(".card-title");
  numberCards.innerHTML = numberResult;

  selectColorSuit();
}

window.onload = function() {
  generateCard();

  let newCard = document.querySelector("#btn");
  newCard.addEventListener("click", generateCard);

  const secondsSpan = document.querySelector("#seconds");

  setTimeout(() => {
    generateCard();
  }, 10000);

  function countdown(seconds) {
    secondsSpan.innerHTML = `Segundos para nueva carta: ${seconds}`;

    const timer = setInterval(() => {
      seconds--;

      if (seconds === 0) {
        clearInterval(timer);
        countdown(10);
      } else {
        secondsSpan.innerHTML = `Segundos para nueva carta: ${seconds}`;
      }
    }, 1000);
  }
  countdown(10);

  const form = document.getElementById("formulario");

  form.addEventListener("submit", event => {
    event.preventDefault();
    const alturaInput = document.getElementById("height");
    const anchuraInput = document.getElementById("width");
    const card = document.getElementById("carTotal");

    const nuevaAltura = alturaInput.value;
    const nuevaAnchura = anchuraInput.value;

    card.style.height = `${nuevaAltura}px`;
    card.style.width = `${nuevaAnchura}px`;
  });
};
