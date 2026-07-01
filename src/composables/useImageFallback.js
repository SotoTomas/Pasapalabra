import { ref, watchEffect } from 'vue';

/**
 * Genera un placeholder SVG en memoria (data URI) para cuando
 * no existe la imagen física de la pregunta.
 * @param {string} label
 * @returns {string}
 */
function buildPlaceholderImage(label = '?') {
  const safeLabel = String(label).slice(0, 3);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#162033"/>
          <stop offset="100%" stop-color="#0a0e1a"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#g)"/>
      <circle cx="300" cy="260" r="90" fill="none" stroke="#3b82f6" stroke-width="3" opacity="0.5"/>
      <text x="300" y="285" font-family="sans-serif" font-size="64" fill="#60a5fa" text-anchor="middle" font-weight="700">${safeLabel}</text>
      <text x="300" y="400" font-family="sans-serif" font-size="20" fill="#475569" text-anchor="middle">imagen no disponible</text>
    </svg>`.trim();
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

/**
 * Construye las rutas candidatas de imagen para un id de pregunta.
 * @param {number|string} id
 * @returns {string[]}
 */
function buildImageCandidates(id) {
  const padded = String(id).padStart(3, '0');
  return [
    `${base}assets/images/${id}.png`,
    `${base}assets/images/${padded}.png`,];
}

/**
 * Composable que resuelve reactivamente la imagen de una pregunta,
 * probando rutas candidatas y cayendo a un placeholder si ninguna existe.
 * @param {import('vue').Ref<number|string>} idRef
 * @param {import('vue').Ref<string>} labelRef
 * @returns {{ src: import('vue').Ref<string>, onError: () => void }}
 */
export function useImageFallback(idRef, labelRef) {
  const src = ref('');
  let candidates = [];
  let attempt = 0;

  function tryNext() {
    if (attempt >= candidates.length) {
      src.value = buildPlaceholderImage(labelRef.value);
      return;
    }
    src.value = candidates[attempt];
    attempt += 1;
  }

  watchEffect(() => {
    candidates = buildImageCandidates(idRef.value);
    attempt = 0;
    tryNext();
  });

  function onError() {
    tryNext();
  }

  return { src, onError };
}
