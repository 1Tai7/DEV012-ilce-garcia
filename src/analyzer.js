const analyzer = {
  getWordCount: (text) => {
    const firstWhite = /^ /;
    const lastWhite = / $/;
    const othersWhite = /[ ]+/g;
    const numbers = /\d+/g;

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
    const white = /\s/g;
    const sign = /[^a-zA-Z0-9 ]/g;
    const abc = /[a-zA-Z]/g;

    text = text.replace(white, "");
    text = text.replace(sign, "");
    text = text.replace(abc, "");

    if (text) {
      return text.length;
    } else {
      return "";
    }
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const number = text.match(/\d+/g);
    let sumatoria = 0;
    if (number) {
      for (const value of number) {
        sumatoria += parseInt(value);
      }
      return sumatoria.toString();
    } else {
      return "";
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
