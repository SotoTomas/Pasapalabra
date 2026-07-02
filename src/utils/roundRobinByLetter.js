export function roundRobinByLetter(questions) {
  // Agrupa las preguntas por letra (case-insensitive)
  const groups = new Map();
  questions.forEach((question) => {
    const key = question.letra.toUpperCase();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(question);
  });

  // Orden alfabético de las letras presentes, respetando la Ñ (locale es)
  const sortedLetters = [...groups.keys()].sort((a, b) =>
    a.localeCompare(b, 'es', { sensitivity: 'base' })
  );

  const result = [];
  let round = 0;
  let addedInLastRound = true;

  while (addedInLastRound) {
    addedInLastRound = false;
    for (const letter of sortedLetters) {
      const group = groups.get(letter);
      if (round < group.length) {
        result.push(group[round]);
        addedInLastRound = true;
      }
    }
    round += 1;
  }

  return result;
}






