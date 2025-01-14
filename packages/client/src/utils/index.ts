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


export function formatPhoneNumber(phoneNumber: string): string {
  if(!phoneNumber) return phoneNumber;
  // Strip all characters from the input except digits
  const cleaned = phoneNumber.replace(/\D/g, '');
  const areaCode = cleaned.slice(0, 3);
  const exchange = cleaned.slice(3, 6);
  const lineNumber = cleaned.slice(6, 10);
  return `${areaCode}-${exchange}-${lineNumber}`;
}


/**
 *function for accessibility that allows user to run a function using the
 *keyboard instead of click.
 * @param e:any, keyboard event
 * @param fn: ()=> void, function to run
 */
export const runFunctionWhenSpaceOrEnterIsClicked = (e: React.KeyboardEvent, fn: (args?: any) => void): void => {
    const enterOrSpace = e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar' || e.which === 13 || e.which === 32;
    if (enterOrSpace) {
        e.preventDefault();
        fn();
    }
};
