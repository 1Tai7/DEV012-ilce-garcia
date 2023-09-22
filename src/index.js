import analyzer from "./analyzer.js";
const {
  getWordCount,
  getCharacterCount,
  getCharacterCountExcludingSpaces,
  getNumberCount,
  getNumberSum,
  getAverageWordLength,
} = analyzer;
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//declare una variable llamada textArea que es igual a un elemento de html de tipo textarea que contiene un nombre ..
const textArea = document.querySelector("textarea[name='user-input']");
//declare una variable llamada button que es igual a un elemento html que contiene un id ..
const button = document.getElementById("reset-button");

//declare una variable llamada liword.. que es un elemento html con un atributo data-testid que tiene un valor word-count
const liWordCount = document.querySelector('[data-testid="word-count"]');
const wordCount = liWordCount.textContent;

const liCharacterCount = document.querySelector(
  '[data-testid="character-count"]'
);
const characterCount = liCharacterCount.textContent;

const liCharacterCountExcludingSpaces = document.querySelector(
  '[data-testid="character-count-excluding-spaces"]'
);
const characterCountExcludingSpaces =
  liCharacterCountExcludingSpaces.textContent;

const liNumberCount = document.querySelector('[data-testid="number-count"]');
const numberCount = liNumberCount.textContent;

const liNumberSum = document.querySelector('[data-testid="number-sum"]');
const numberSum = liNumberSum.textContent;

const liWordLengthAverage = document.querySelector(
  '[data-testid="word-length-average"]'
);
const wordLengthAverage = liWordLengthAverage.textContent;

//tome la variable textArea y la estoy escuchando cada vez que escribo, borro o hago un espacio
textArea.addEventListener("input", function tgb() {
  //obtuve el valor de testarea y lo establesco en li
  liWordCount.textContent =
    wordCount + "\u2002\u2002\u2002" + getWordCount(textArea.value);
  liCharacterCount.textContent =
    characterCount + "\u2002\u2002\u2002" + getCharacterCount(textArea.value);
  liCharacterCountExcludingSpaces.textContent =
    characterCountExcludingSpaces +
    "\u2002\u2002\u2002" +
    getCharacterCountExcludingSpaces(textArea.value);
  liNumberCount.textContent =
    numberCount + "\u2002\u2002\u2002" + getNumberCount(textArea.value);
  liNumberSum.textContent =
    numberSum + "\u2002\u2002\u2002" + getNumberSum(textArea.value);
  liWordLengthAverage.textContent =
    wordLengthAverage +
    "\u2002\u2002\u2002" +
    getAverageWordLength(textArea.value);
});

//tome la variable button y la estoy escuchando cada vez que haga click y despues de la coma se va a ejecutar la funcion
//que dentro de la funcion , tome la funcion textarea y su valor lo iguale a " "
button.addEventListener("click", function () {
  textArea.value = "";
  liWordCount.textContent = wordCount;
  liCharacterCount.textContent = characterCount;
  liCharacterCountExcludingSpaces.textContent = characterCountExcludingSpaces;
  liNumberCount.textContent = numberCount;
  liNumberSum.textContent = numberSum;
  liWordLengthAverage.textContent = wordLengthAverage;
});
