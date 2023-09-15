import analyzer from "./analyzer.js";

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//declare una variable llamada textArea que es igual a un elemento de html de tipo textarea que contiene un nombre ..
const textArea = document.querySelector("textarea[name='user-input']");
//declare una variable llamada button que es igual a un elemento html que contiene un id ..
const button = document.getElementById("reset-button");

const liWordCount = document.querySelector('[data-testid="word-count"]');
const texto = liWordCount.textContent;
console.log(texto);
const contenidoHTML = elemento.innerHTML;
const liCharacterCount = document.querySelector(
  '[data-testid="character-count"]'
);
const liCharacterNoSpacesCount = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
const liNumberCount = document.querySelector('[data-testid="number-count"]');
const liNumberSum = document.querySelector('[data-testid="number-sum"]');
const liWordLengthAverage = document.querySelector(
  '[data-testid="word-length-average"]'
);

//tome la variable textArea y la estoy escuchando cada vez que escribo, borro o hago un espacio
textArea.addEventListener("input", function () {
  console.log("input");
});

//tome la variable button y la estoy escuchando cada vez que haga click y despues de la coma se va a ejecutar la funcion
//que dentro de la funcion , tome la funcion textarea y su valor lo iguale a " "
button.addEventListener("click", function () {
  textArea.value = "";
});
