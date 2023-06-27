/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

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

  console.log(generadedNumber());
  console.log(generadedPalos());

  let suitResult = generadedPalos();

  let suitCards = document.querySelectorAll(".cardPalo");
  suitCards.forEach(element => {
    element.innerHTML = suitResult;
  });
  let selectColorSuit = fun;

  let numberResult = generadedNumber();

  let numberCards = document.querySelector(".card-title");
  numberCards.innerHTML = numberResult;
  let newCard = document.querySelector("#btn");
  newCard.addEventListener("click", window.onload);
};
