# DECISIONES · Lo que ya está decidido

| Fecha | Decisión | Por qué |
|---|---|---|
| 2026-11-17 | La web de KubIA es el repo `daniela-silva-web` (HTML estático en Vercel, sin WordPress). No se cambia de plataforma. | Se amplía rápido sin rehacer nada. |
| 2026-11-17 | Un solo nombre de producto: **KubIA Gestión** (no crear "KubIA Administrativo"). | Ya es público, tiene página y SEO; un nombre nuevo confunde a un banco. |
| 2026-11-17 | Mando App solo se presenta como antecedente **después** de aclarar la alianza. | La propuesta de Mando ofrece licencia perpetua del código (Opción B): riesgo de propiedad intelectual. |
| 2026-11-17 | Patrocinantes de la Cumbre van en la web de la Cumbre; en KubIA solo aliados autorizados. | No confundir patrocinio de un evento con alianza permanente. |
| 2026-11-17 | Educación tendrá sección propia en el menú, contada con lo ya realizado. | Es el diferenciador de Daniela. |
| 2026-11-17 | Nada se anuncia como disponible si no existe: pagos con bancos y SENIAT son "en diseño". | Credibilidad ante bancos e instituciones. |
| 2026-11-17 | Micrositio interactivo + ficha PDF de 1 página para Banesco (no solo un PDF largo). | Los bancos suelen bloquear enlaces; el PDF siempre llega. |
| 2026-11-17 | No usar la palabra "startup". | Pedido de Daniela. |
| 2026-11-18 | Trabajo con agentes: Opus (orquesta y estrategia), `programador` = Sonnet (escribe código), `lector` = Haiku (lee e inventaria). | Ahorro de tokens; ver README de agentes. |

## Hallazgos del código (hechos verificados)
- `PWApedidos/src/lib/pagos.ts`: registra pago móvil, transferencia, Zelle, Binance, efectivo y COP con referencia y **revisión manual**. No hay conexión con ningún banco.
- No existe nada de SENIAT ni facturación fiscal en el código revisado.
- `index.html` (kubiav.com) publica para Cleaning Angels "−40% inasistencias y 15 h ahorradas/semana" → falta respaldo.
- Biografía publicada: "8+ años de experiencia", "7+ años formándome afuera", clientes en 5 países (VE, PE, ES, CA, US) → cuadrar con las fechas reales.
- Secciones actuales del home: inicio, problema, calculadora, qr, soluciones, casos, cinco, demo, planes, comparte, nosotros, preguntas, diagnóstico.
- README y `package.json` de la web todavía dicen "Portfolio de Daniela Silva".
- `daniela-silva-web` y `Mando-app` son repos **públicos**: no guardar ahí estrategia sensible.
