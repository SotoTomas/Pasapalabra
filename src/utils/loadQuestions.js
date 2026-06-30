const REQUIRED_TOP_LEVEL = ['id', 'letra', 'tipo', 'informacionGeneral', 'respuesta'];
const WRAPPER_KEYS = ['preguntas', 'questions', 'data', 'items'];

/**
 * Carga el archivo de preguntas mediante fetch y valida su estructura.
 * @param {string} path - ruta al archivo JSON (ej: '/data/preguntas.json')
 * @returns {Promise<{ questions: Array, meta: Object }>}
 * @throws {Error} si el fetch falla o el formato es inválido
 */
export async function loadQuestions(path) {
  let response;

  try {
    response = await fetch(path, { cache: 'no-cache' });
  } catch {
    throw new Error(
      `No se pudo conectar con el archivo de preguntas (${path}). ` +
      `Verificá que el proyecto se esté ejecutando con "npm run dev".`
    );
  }

  if (!response.ok) {
    throw new Error(`El archivo de preguntas respondió con estado ${response.status} (${path}).`);
  }

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('El archivo de preguntas no contiene JSON válido.');
  }

  const { questions, meta } = normalizeData(data);
  validateQuestions(questions);
  return { questions, meta };
}

/**
 * Acepta varias formas comunes de exportar el JSON y las normaliza
 * siempre a { questions, meta }:
 *  - Array directo: [ {...}, {...} ]                          -> meta vacía
 *  - Objeto envoltorio: { "titulo": "...", "preguntas": [...] } -> meta = resto de claves
 *  - Mapa por id: { "1": {...}, "2": {...}, "73": {...} }
 * @param {*} data
 * @returns {{ questions: Array, meta: Object }}
 * @throws {Error} si no reconoce la forma
 */
function normalizeData(data) {
  if (Array.isArray(data)) {
    return { questions: data, meta: {} };
  }

  if (data && typeof data === 'object') {
    const wrapperKey = WRAPPER_KEYS.find((key) => Array.isArray(data[key]));
    if (wrapperKey) {
      const { [wrapperKey]: questions, ...meta } = data;
      return { questions, meta };
    }

    // mapa { "1": {...}, "2": {...} }: cada valor debe parecer una pregunta
    const values = Object.values(data);
    const looksLikeQuestionMap =
      values.length > 0 && values.every((v) => v && typeof v === 'object' && !Array.isArray(v));
    if (looksLikeQuestionMap) {
      return { questions: values, meta: {} };
    }
  }

  const receivedShape = Array.isArray(data)
    ? 'array vacío'
    : data && typeof data === 'object'
    ? `objeto con claves: ${Object.keys(data).join(', ') || '(ninguna)'}`
    : typeof data;

  throw new Error(
    `No reconozco la forma del JSON de preguntas (recibido: ${receivedShape}). ` +
    `Soporto un array [...], un objeto envoltorio como { "preguntas": [...] }, ` +
    `o un mapa por id como { "1": {...}, "2": {...} }.`
  );
}

/**
 * Valida que el array de preguntas tenga la estructura mínima esperada.
 * @param {*} data
 * @throws {Error} si la estructura no es válida
 */
function validateQuestions(data) {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('El JSON de preguntas debe ser un array con al menos un elemento.');
  }

  data.forEach((question, index) => {
    REQUIRED_TOP_LEVEL.forEach((field) => {
      if (!(field in question)) {
        throw new Error(
          `La pregunta en la posición ${index} (id: ${question.id ?? '??'}) ` +
          `no tiene el campo requerido "${field}".`
        );
      }
    });

    if (!question.informacionGeneral.enunciado || !question.informacionGeneral.pregunta) {
      throw new Error(
        `La pregunta con id ${question.id} no tiene "enunciado" o "pregunta" en informacionGeneral.`
      );
    }

    if (!question.respuesta.texto) {
      throw new Error(`La pregunta con id ${question.id} no tiene "respuesta.texto".`);
    }
  });
}
