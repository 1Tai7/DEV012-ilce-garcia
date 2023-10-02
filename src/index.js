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
const wordCount = "Recuento de palabras";

const liCharacterCount = document.querySelector(
  '[data-testid="character-count"]'
);
const characterCount = "Recuento de caracteres";

const liCharacterNoSpacesCount = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
const characterNoSpacesCount = "Caracteres sin espacios y signos";

const liNumberCount = document.querySelector('[data-testid="number-count"]');
const numberCount = "Recuento de números";

const liNumberSum = document.querySelector('[data-testid="number-sum"]');
const numberSum = "Suma total de números";

const liWordLengthAverage = document.querySelector(
  '[data-testid="word-length-average"]'
);
const wordLengthAverage = "Longitud media de palabras";
//tome la variable textArea y la estoy escuchando cada vez que escribo, borro o hago un espacio
textArea.addEventListener("input", function () {
  //obtengo el valor de testarea y lo establesco en el elemento li y lo muestro en un valor numerico
  //`${} el resultado adentro se combierte en una cadena de texto
  liWordCount.textContent = `${wordCount} ${getWordCount(textArea.value)}`;
  liCharacterCount.textContent = `${characterCount} ${getCharacterCount(
    textArea.value
  )}`;
  liCharacterNoSpacesCount.textContent = `${characterNoSpacesCount} 
    ${getCharacterCountExcludingSpaces(textArea.value)}`;
  liNumberCount.textContent = `${numberCount} ${getNumberCount(
    textArea.value
  )}`;
  liNumberSum.textContent = `${numberSum} ${getNumberSum(textArea.value)}`;
  liWordLengthAverage.textContent = `${wordLengthAverage} 
    ${getAverageWordLength(textArea.value)}`;
});
//tome la variable button y la estoy escuchando cada vez que haga click y despues de la coma se va a ejecutar la funcion
//que dentro de la funcion , tome la funcion textarea y su valor lo iguale a " "
button.addEventListener("click", function () {
  textArea.value = "";
  //contenido de texto del elemento li y lo modificamos dentro del elemento, wordcount es la variables y se suma a una cadena de texto
  liWordCount.textContent = wordCount + " 0";
  liCharacterCount.textContent = characterCount + " 0";
  liCharacterNoSpacesCount.textContent = characterNoSpacesCount + " 0";
  liNumberCount.textContent = numberCount + " 0";
  liNumberSum.textContent = numberSum + " 0";
  liWordLengthAverage.textContent = wordLengthAverage + " 0";
});
