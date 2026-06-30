# Pasapalabra del Arte — Vue 3 + Vite + Pinia

Reescritura completa en Vue 3 (Composition API, `<script setup>`), Vite y Pinia. Sin Options API, sin estado global fuera de Pinia, sin manipulación manual del DOM.

## Instalación y arranque

```bash
npm install
npm run dev
```

Abrí la URL que te indique la terminal (por defecto `http://localhost:5173`).

Build de producción:

```bash
npm run build
npm run preview
```

## Tu archivo de preguntas

Reemplazá `public/data/preguntas.json` por el tuyo, **misma estructura, mismo nombre de archivo, misma carpeta**. No hace falta tocar ningún componente ni el store: todo se carga dinámicamente desde ese path.

```json
{
  "id": 73,
  "pagina": 25,
  "letra": "H",
  "tipo": "comienza",
  "informacionGeneral": {
    "enunciado": "...",
    "pregunta": "..."
  },
  "respuesta": { "texto": "..." }
}
```

## Imágenes

Guardá las imágenes en `public/assets/images/`, con el mismo `id` que la pregunta como nombre de archivo: `73.jpg` o `073.jpg` (también soporta `.png`). Si una imagen no existe, se muestra automáticamente un placeholder SVG generado en memoria.

## Estructura

```
index.html
vite.config.js
public/
  data/preguntas.json     -> tu archivo de preguntas
  assets/images/          -> imágenes de cada pregunta
src/
  main.js                 -> bootstrap de la app
  App.vue                 -> enrutamiento simple entre pantallas
  stores/
    game.js                -> Pinia: estado central (preguntas, score, timer, navegación)
  components/
    StartScreen.vue
    SettingsScreen.vue
    GameScreen.vue          -> topbar, progreso, navegación, controles
    QuestionCard.vue        -> imagen, enunciado, input, feedback
    EndScreen.vue
  composables/
    useImageFallback.js     -> resolución reactiva de imagen + placeholder
  utils/
    normalizeAnswer.js
    shuffleArray.js
    formatTime.js
    loadQuestions.js        -> fetch + validación del JSON
  assets/styles/
    main.css
    animations.css
```

## Arquitectura

**Pinia (`stores/game.js`) es el único source of truth.** Mantiene el array de preguntas con su `status` (`pending` / `correct` / `incorrect` / `timeout`), el índice actual, el puntaje y el temporizador. Todos los componentes leen del store con `useGameStore()` y disparan acciones (`submitAnswer`, `goNext`, `pauseGame`, etc.); ningún componente muta el estado directamente.

**El temporizador vive dentro del store**, no en un componente: así sobrevive a cualquier remount de `GameScreen.vue` y el conteo nunca se desincroniza de la pregunta activa. Usa una variable de closure (`intervalId`) fuera de la reactividad de Vue, igual que harías con una clase `Timer`, pero expone `secondsLeft`/`totalSeconds` como refs reactivos para que la UI los pinte solos.

**Navegación entre pantallas:** `App.vue` mantiene un `ref('start'|'settings'|'game'|'end')` local — es estado de UI, no de juego, así que no contamina el store. Cada pantalla es un componente que se monta/desmonta con `v-if`.

**Imágenes:** `useImageFallback(idRef, letraRef)` es un composable que prueba rutas candidatas (`id.jpg`, `id` con padding, `.png`) y cae a un SVG generado en memoria si ninguna existe — igual lógica que la versión anterior, pero como composable reactivo en vez de función imperativa sobre el DOM.

**Puntaje por racha:** 1ª correcta consecutiva = 10 pts, 2ª = 20, 3ª = 30… Un fallo o tiempo agotado resetea la racha a 0; el puntaje acumulado nunca baja.

**Escalabilidad:** nada en el código depende de la cantidad de preguntas — funciona igual con 20 que con 5000, siempre que el JSON respete la estructura.
