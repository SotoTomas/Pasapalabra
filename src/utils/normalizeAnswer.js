/**
 * Normaliza un texto para comparación de respuestas:
 * quita mayúsculas, acentos, guiones, espacios dobles y caracteres especiales.
 * @param {string} text
 * @returns {string}
 */
export function normalizeAnswer(text) {
  if (typeof text !== 'string') return '';

  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[-_]/g, ' ')
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Compara dos respuestas usando normalizeAnswer.
 * @param {string} userAnswer
 * @param {string} correctAnswer
 * @returns {boolean}
 */
export function answersMatch(userAnswer, correctAnswer) {
  return normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
}
