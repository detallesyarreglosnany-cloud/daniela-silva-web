# kubiav.com · KubIA Soluciones

Sitio estático (HTML/CSS/JS) publicado en Vercel desde la raíz del repo. Sin build.

## Antes de trabajar
- La memoria del proyecto (estado, plan, decisiones, ideas en espera, bitácora) vive en la rama **`kubia-hq`** de este repo.
  Al empezar: `git fetch origin kubia-hq && git show origin/kubia-hq:ESTADO.md`
  Al terminar una tarea: `git worktree add ../kubia-hq kubia-hq` (si no existe), actualizar `ESTADO.md` y `BITACORA.md`, commit y push a `kubia-hq`.
- Este repo es **público**: no guardar aquí estrategia, propuestas a terceros ni datos sensibles.

## Cómo se reparte el trabajo (obligatorio en toda sesión)
La sesión principal (Opus) **orquesta**: decide, diseña, revisa el diff, hace commit y push. Delegar así:

| Tarea | Quién | Ejemplo |
|---|---|---|
| Preguntas concretas sobre el proyecto: ubicar archivos, textos, precios, nombres; devolver `ruta:línea` | `lector` (Haiku, solo lectura) | "¿Dónde está el hero y qué dice?" |
| Implementar una tarea **ya decidida**, con archivos y criterios claros | `programador` (Sonnet, no hace commit) | "Cambia el hero por este texto en index.html" |
| Estrategia, decisiones, textos para instituciones, revisión final | Opus (sesión principal) | Plan Banesco, biografía |

- Tarea grande = primero `lector` para ubicar, luego Opus decide, luego `programador` implementa, y Opus revisa.
- Tarea pequeña (1-2 líneas) = hacerla directo; lanzar un agente cuesta más.
- No pedirle a `lector` que "lea todo el proyecto" ni que audite: solo preguntas concretas.
- Al lanzar `programador`, darle la tarea completa (archivos, texto exacto, criterio de terminado): empieza sin contexto.

## Reglas de contenido
- No inventar títulos, fechas, cifras, clientes ni logos. Lo no confirmado: `[POR CONFIRMAR]`.
- No presentar como disponible lo que no existe (integración bancaria, SENIAT).
- No usar la palabra "startup".
- Estilo de Daniela: **prohibido usar guiones largos (— o –) en textos**, ni para incisos ni para rangos ("de 9 a 11", no "9–11"). Tampoco paréntesis o corchetes para incisos. Frases cortas y naturales; que no suene a texto hecho con IA. Se permite resaltar palabras con colores.
