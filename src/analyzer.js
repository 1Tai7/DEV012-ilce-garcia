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
    const gg = /\b\d+(\.\d+)?\b/g;

    const textArray = text.match(gg);
    if (textArray) {
      return textArray.length;
    } else {
      return 0;
    }

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const gg = /\b\d+(\.\d+)?\b/g;
    const textArray = text.match(gg);
    let sumatory = 0;

    if (textArray) {
      const clearTextArray = textArray.filter((el) => el !== "");
      for (const element of clearTextArray) {
        if (!isNaN(Number(element))) sumatory += Number(element);
      }
      return Number(sumatory.toFixed(2));
    } else {
      return 0;
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    /* const firstWhite = /^ /;
    const lastWhite = / $/;
    const othersWhite = /[ ]+/g;
    const numbers = /\d+/g;
    const sign = /[^a-zA-Z0-9 ]/g;

    text = text.replace(numbers, "");
    text = text.replace(othersWhite, " ");
    text = text.replace(firstWhite, "");
    text = text.replace(lastWhite, "");
    text = text.replace(sign, "");
*/
    const words = text.split(" ").filter((el) => el !== "");
    let sumatoria = 0;
    let longitud = 0;
    let averageWords;

    if (words) {
      for (const values of words) {
        if (values !== "") {
          sumatoria += values.length;
        }
      }
      longitud = words.length;
    }
    if (longitud > 0) {
      averageWords = sumatoria / words.length;
    } else {
      averageWords = 0;
    }

    return Number(averageWords.toFixed(2));
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
