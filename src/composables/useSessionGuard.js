import { ref } from 'vue';
import { doc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '@/firebase';

const DEVICE_ID_KEY = 'pasapalabra_device_id';

/**
 * Se pone en true cuando esta sesión fue cerrada porque la cuenta
 * inició sesión desde otro dispositivo/navegador.
 */
export const wasKickedOut = ref(false);

let unsubscribeSnapshot = null;

/**
 * Obtiene (o genera y persiste) un id único para este navegador.
 * Vive en localStorage, así que sobrevive a refrescos y a abrir
 * varias pestañas del mismo navegador sin generar conflictos entre ellas.
 * @returns {string}
 */
function getDeviceId() {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}

/**
 * Reclama la sesión para este dispositivo y empieza a escuchar
 * si algún otro dispositivo la reclama después (lo cual expulsa a este).
 * Se debe llamar apenas se confirma que el usuario está logueado.
 * @param {string} uid
 */
export async function claimSession(uid) {
  const deviceId = getDeviceId();
  const sessionRef = doc(db, 'sessions', uid);

  // Reclama la sesión: este dispositivo pasa a ser el "activo".
  await setDoc(sessionRef, {
    deviceId,
    updatedAt: serverTimestamp(),
  });

  stopWatchingSession();

  unsubscribeSnapshot = onSnapshot(sessionRef, (snapshot) => {
    const data = snapshot.data();
    if (data && data.deviceId !== deviceId) {
      wasKickedOut.value = true;
      signOut(auth);
    }
  });
}

/**
 * Detiene la escucha del documento de sesión.
 * Se debe llamar al desloguearse (para no seguir escuchando de más).
 */
export function stopWatchingSession() {
  if (unsubscribeSnapshot) {
    unsubscribeSnapshot();
    unsubscribeSnapshot = null;
  }
}