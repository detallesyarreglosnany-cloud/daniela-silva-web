# KubIA HQ · Memoria del proyecto

Carpeta central de estrategia, planes y avances de KubIA Soluciones.
Si se cortó una sesión o se acabaron los tokens, **empieza aquí**.

## Cómo se usa
1. Abre `ESTADO.md`: dónde quedamos y qué sigue (lo primero que se lee en cada sesión).
2. `PLAN.md`: hacia dónde vamos (Cumbre, Banesco, reestructuración de kubiav.com).
3. `DECISIONES.md`: lo que ya se decidió y por qué. No se vuelve a discutir salvo que Daniela lo pida.
4. `IDEAS-EN-ESPERA.md`: ideas buenas que no son para ahora.
5. `BITACORA.md`: registro con fecha de cada avance.

## Regla para Claude (y cualquier agente)
- Al **empezar** una sesión: leer `ESTADO.md` (y solo lo demás si hace falta).
- Al **terminar** cada tarea: actualizar `ESTADO.md`, añadir una línea en `BITACORA.md`
  y mover a `DECISIONES.md` / `IDEAS-EN-ESPERA.md` lo que corresponda. Commit + push.
- Nunca inventar datos de Daniela (títulos, fechas, cifras). Lo que no esté confirmado se marca **[POR CONFIRMAR]**.

## Dónde vive
Rama **`kubia-hq`** del repo `daniela-silva-web` (rama independiente, sin el código de la web).
Para leerla en cualquier sesión: `git fetch origin kubia-hq && git show origin/kubia-hq:ESTADO.md`
Para editarla: `git worktree add ../kubia-hq kubia-hq`, editar, commit y push.

## Reparto de trabajo
- **Opus**: orquesta, decide, revisa y publica.
- **`lector` (Haiku)**: preguntas concretas; ubica archivos, textos, precios, nombres → `ruta:línea`. Solo lectura.
- **`programador` (Sonnet)**: implementa tareas ya decididas. No hace commit.

## Repos relacionados
| Repo | Qué es | Visibilidad |
|---|---|---|
| `daniela-silva-web` | kubiav.com (HTML estático en Vercel) | pública |
| `PWApedidos` | App de pedidos Puerto Venado (Next.js + Prisma) · pedidospv / tiendapv.kubiav.com | privada |
| `Mando-app` | Landing + propuesta de alianza MANDO | pública |
| `SOFTWARE-ADMINISTRATIVO` | [POR CONFIRMAR] ¿Es KubIA Gestión / Administrativo? | privada |
