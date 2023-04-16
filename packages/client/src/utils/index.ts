export function toSentenceCase(str:string) {
  // Convert the string to lowercase and replace underscores with spaces
  str = str.toLowerCase().replace(/_/g, ' ');

  // Split the string into an array of words
  const words = str.match(/\S+/g) || [];

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back together with spaces
  const sentenceCaseStr = capitalizedWords.join(' ');

  return sentenceCaseStr;
}
