/**
 * Formatea segundos a string "mm:ss" o "Ns" si es menor a 60.
 * @param {number} totalSeconds
 * @returns {string}
 */
export function formatTime(totalSeconds) {
  const seconds = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}s`;
  return `${m}:${String(s).padStart(2, '0')}`;
}
