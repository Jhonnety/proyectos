
export const transformString = (inputString: string) => {
  let words = inputString.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let actualWord = words[i];
    if (actualWord.length > 3) {
      result += actualWord.charAt(0).toUpperCase() + actualWord.slice(1).toLowerCase() + " ";
    } else {
      result += actualWord.toLowerCase() + " ";
    }
  }

  return result.trim();
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const capitalizeWords = (str: string) => {
  let lowercaseString = str.toLowerCase();
  let words = lowercaseString.split(' ');
  let capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let result = capitalizedWords.join(' ');

  return result;
};
export const extractNumbers = (str: string) => {
  if (str != null) {
    let foundNumbers = str.match(/\d+/g);
    if (foundNumbers) {
      let numbers = foundNumbers.map(number => parseInt(number, 10));
      return numbers;
    }
  }
  return [];
};