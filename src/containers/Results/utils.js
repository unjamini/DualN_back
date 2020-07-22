// @flow

export const countMistakes = (
  lettersAnswers: Array<number>,
  positionsAnswers: Array<number>,
  tappedLetters: Array<number>,
  tappedPositions: Array<number>,
): number => {
  const lettersMistakes = lettersAnswers
    .filter(x => !tappedLetters.includes(x))
    .concat(tappedLetters.filter(x => !lettersAnswers.includes(x))).length;
  const positionsMistakes = positionsAnswers
    .filter(x => !tappedPositions.includes(x))
    .concat(tappedPositions.filter(x => !positionsAnswers.includes(x))).length;
  return lettersMistakes + positionsMistakes;
};

export default { countMistakes };
