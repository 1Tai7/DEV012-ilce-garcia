const analyzer = {
  getWordCount: (text) => {
    const firstWhite = /^ /;
    const lastWhite = / $/;
    const othersWhite = /[ ]+/g;
    const numbers = /\d+/g;
    const sign = /[^a-zA-Z0-9 ]/g;

    text = text.replace(sign, "");
    text = text.replace(numbers, "");
    text = text.replace(othersWhite, " ");
    text = text.replace(firstWhite, "");
    text = text.replace(lastWhite, "");
    if (text) {
      return text.split(" ").length;
    } else {
      return "";
    }

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    if (text) {
      return text.length;
    } else {
      return "";
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
      return "";
    }
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //debe contar numeros con decimas
    const white = /\s/g;
    const sign = /[^a-zA-Z0-9 ]/g;
    const abc = /[a-zA-Z]/g;

    text = text.replace(white, "");
    text = text.replace(sign, "");
    text = text.replace(abc, "");

    return text.length;

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const number = text.match(/\d+/g);
    let sumatoria = 0;
    if (number) {
      for (const value of number) {
        sumatoria += parseInt(value);
      }
      return sumatoria;
    } else {
      return "";
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const firstWhite = /^ /;
    const lastWhite = / $/;
    const othersWhite = /[ ]+/g;
    const numbers = /\d+/g;
    const sign = /[^a-zA-Z0-9 ]/g;

    text = text.replace(numbers, "");
    text = text.replace(othersWhite, " ");
    text = text.replace(firstWhite, "");
    text = text.replace(lastWhite, "");
    text = text.replace(sign, "");

    const words = text.split(" ").filter((el) => el !== "");
    let sumatoria = 0;
    let longitud = 0;
    let averageWords;
    console.log("w", words);
    if (words) {
      for (const values of words) {
        console.log("all", values);
        console.log("allw", values.length);

        if (values !== "") {
          sumatoria += values.length;
          longitud = words.length;
        }
      }
    }
    if (longitud > 0) {
      averageWords = sumatoria / longitud;
    } else {
      averageWords = 0;
    }
    console.log("long", longitud);
    console.log("sum", sumatoria);
    console.log("calculo", averageWords);
    return averageWords;
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
