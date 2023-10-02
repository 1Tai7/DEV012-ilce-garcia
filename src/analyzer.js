const analyzer = {
  getWordCount: (text) => {
    const firstWhite = /^ /;
    const lastWhite = / $/;
    const othersWhite = /[ ]+/g;
    const sign = /[^a-zA-Z0-9 ]/g;

    text = text.replace(sign, "");
    text = text.replace(othersWhite, " ");
    text = text.replace(firstWhite, "");
    text = text.replace(lastWhite, "");
    if (text) {
      //text variable, split, metodo para separar cadenas y length cuenta lso elementos de la matriz
      return text.split(" ").length;
    } else {
      return 0;
    }
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    if (text) {
      return text.length;
    } else {
      return 0;
    }
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const white = /\s/g;
    const sign = /[^a-zA-Z0-9 ]/g;

    text = text.replace(sign, "");
    text = text.replace(white, "");
    if (text) {
      return text.length;
    } else {
      return 0;
    }
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const notNumbers = /\b\d+(\.\d+)?\b/g;
    //match esta sienod utilizada en una cadena de texto para buscar coinciddencias con el regex
    const textArray = text.match(notNumbers);
    if (textArray) {
      return textArray.length;
    } else {
      return 0;
    }
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const notNumbers = /\b\d+(\.\d+)?\b/g;
    const textArray = text.match(notNumbers);
    let sumatory = 0;

    if (textArray) {
      //el filter recorre la array y devuelve un nuevo array con elementos que cumplan la condicion
      //dentro del filter se dice que (el) no sea uan cadena vacia
      const clearTextArray = textArray.filter((el) => el !== "");
      for (let i = 0; i < clearTextArray.length; i++) {
        //se obtiene el elemento actual i y lo almacena en la variable el
        const element = clearTextArray[i];
        //isNaN comprueba si el elemento e sun numero
        //despues number comvierte el elemento a un numero
        //si es un numero, sera sumado al valor existente de sumatoria
        if (!isNaN(Number(element))) sumatory += Number(element);
      }
      return Number(sumatory.toFixed(2));
    }
    return 0;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const words = text.split(" ").filter((el) => el !== "");
    let sumatory = 0;
    let longitud = 0;
    let averageWords;

    if (words) {
      //itera a traves de cada elemento de la array
      for (const values of words) {
        //recorre el elemento values y mira si noe sta vacia
        if (values !== "") {
          sumatory += values.length;
        }
      }
      //obtiene el valor del elemento de la array y lo almacena en longitud
      longitud = words.length;
    }
    if (longitud > 0) {
      averageWords = sumatory / words.length;
    } else {
      averageWords = 0;
    }
    return Number(averageWords.toFixed(2));
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
