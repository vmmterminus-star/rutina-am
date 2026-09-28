# Rutina de la mañana (rutina-am)

App de un solo archivo (`index.html`), publicada en https://vmmterminus-star.github.io/rutina-am/. Valen la usa solo en iPhone, guardada en la pantalla de inicio.
Viene de https://rutina-am-vmm.netlify.app/ (sigue arriba hasta que Valen pase sus datos).

- Datos: solo localStorage (`rutina_cfg_v2`, `rutina_run_v2`, `rutina_log_v1`). Sin nube.
- Respaldo: panel "Respaldo" copia/pega un JSON `{app:'rutina-am',v:1,cfg,store,registro}`. Sirve para pasar datos de Netlify a GitHub.
- `sw.js`: funciona sin internet (primero red, si no hay, caché). Subir `CACHE` si se quiere forzar limpieza.
- Pantalla prendida con Wake Lock mientras hay una rutina en curso.
- Alarma de tres tonos cuando se acaba el tiempo de un paso (ajuste `avisar`); el audio se "despierta" en cada toque porque iOS lo exige. En modo silencio del iPhone no suena.
- Letra: Josefin Sans (decisión de Valen, excepción a la regla de Alexandria).
- Ícono: opción D (reloj malva + sol terracota), embebido; PNG/ICO en `C:\Users\Valen\Apps\iconos\rutina-am.*`.
- Preview local: servidor "rutina-am" puerto 8733.
