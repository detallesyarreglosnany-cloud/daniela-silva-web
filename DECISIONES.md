# DECISIONES · Lo que ya está decidido

| Fecha | Decisión | Por qué |
|---|---|---|
| 2026-11-17 | La web de KubIA es el repo `daniela-silva-web` (HTML estático en Vercel, sin WordPress). No se cambia de plataforma. | Se amplía rápido sin rehacer nada. |
| 2026-11-17 | Un solo nombre de producto: **KubIA Gestión** (no crear "KubIA Administrativo"). | Ya es público, tiene página y SEO; un nombre nuevo confunde a un banco. |
| 2026-11-18 | Mando App no se menciona en la web ni en la bio: era un nombre ficticio; todo se presenta como plataforma KubIA. | Decisión de Daniela. |
| 2026-11-17 | Patrocinantes de la Cumbre van en la web de la Cumbre; en KubIA solo aliados autorizados. | No confundir patrocinio de un evento con alianza permanente. |
| 2026-11-17 | Educación tendrá sección propia en el menú, contada con lo ya realizado. | Es el diferenciador de Daniela. |
| 2026-11-17 | Nada se anuncia como disponible si no existe: pagos con bancos y SENIAT son "en diseño". | Credibilidad ante bancos e instituciones. |
| 2026-11-17 | Micrositio interactivo + ficha PDF de 1 página para Banesco (no solo un PDF largo). | Los bancos suelen bloquear enlaces; el PDF siempre llega. |
| 2026-11-17 | No usar la palabra "startup". | Pedido de Daniela. |
| 2026-11-18 | Trabajo con agentes: Opus (orquesta y estrategia), `programador` = Sonnet (escribe código), `lector` = Haiku (lee e inventaria). | Ahorro de tokens; ver README de agentes. |

| 2026-11-18 | Sin cifras en la comunicación ("empresarios de Amazonas", no "300"). | Decisión de Daniela. |
| 2026-11-18 | Puerto Venado se retira de la web; su sistema pasa a demo anónima (otro nombre y rubro). | Datos sensibles: precios, personas, teléfonos, fotos. |
| 2026-11-18 | La verificación de pagos se está conversando con Banesco (respuesta esta semana). | Une la invitación a la Cumbre con una conversación ya abierta. |

| 2026-11-18 | En "Míralo funcionando" no se etiqueta Demo ni Cliente; si preguntan, se explica. | Decisión de Daniela. |
| 2026-11-18 | Educación se llama **KubIA Capacitación**. | Coherente con KubIA Tienda/Agenda/Gestión. |
| 2026-11-18 | Cleaning Angels sin cifras: "Hoy sus clientes reservan solos." | Regla de no publicar cifras. |

| 2026-11-18 | **Sin guiones largos (— –) ni incisos entre paréntesis** en ningún texto (web, correos, dossier). Que no suene a IA. Colores para resaltar sí. | Pedido de Daniela. |
| 2026-11-18 | Hero publicado: "Creado en Amazonas, para que ningún amazonense tenga que irse." + "Deja el cuaderno" como franja para comerciantes. | Opción B aprobada. |

| 2026-11-18 | Colores de marca: solo verde y blanco para resaltar; nada de naranja ni azul. | Pedido de Daniela. |

| 2026-11-18 | Correo oficial: kubiasoluciones@gmail.com. Daniela no tiene empresa ni firma personal registrada. | Datos de Daniela. |
| 2026-11-18 | Equipo: Daniela Silva (fundadora, desarrollo y soporte), Roxett Ceballos (soporte y atención al cliente), Mariana Cumana (marketing). Asesoras: Ana Alicia Nieves (legal, abogada), Alis Mayris Silva (educación, magíster). | Datos de Daniela. |
| 2026-11-18 | El RIF no se guarda en el repo (público) ni se publica sin confirmación: contiene la cédula. | Privacidad. |
| 2026-11-18 | Las tarjetas de Soluciones mantienen colores distintos; uniformidad solo en textos. | Decisión de Daniela. |
| 2026-11-18 | Hero con dos caminos: "Para mi negocio" / "Para empresas e instituciones". | Decisión de Daniela. |

## Hallazgos del código (hechos verificados)
- `PWApedidos/src/lib/pagos.ts`: registra pago móvil, transferencia, Zelle, Binance, efectivo y COP con referencia y **revisión manual**. No hay conexión con ningún banco.
- No existe nada de SENIAT ni facturación fiscal en el código revisado.
- `index.html` (kubiav.com) publica para Cleaning Angels "−40% inasistencias y 15 h ahorradas/semana" → falta respaldo.
- Biografía publicada: "8+ años de experiencia", "7+ años formándome afuera", clientes en 5 países (VE, PE, ES, CA, US) → cuadrar con las fechas reales.
- Secciones actuales del home: inicio, problema, calculadora, qr, soluciones, casos, cinco, demo, planes, comparte, nosotros, preguntas, diagnóstico.
- README y `package.json` de la web todavía dicen "Portfolio de Daniela Silva".
- `daniela-silva-web` y `Mando-app` son repos **públicos**: no guardar ahí estrategia sensible.
- Demo Puerto Venado: catálogo y tasa **en vivo** desde la API real `pedidospv.kubiav.com` (`demo/puerto-venado/index.html:695,732`); 4 WhatsApp reales (:858); asesores con nombre (:856-857); 163 fotos de productos + 15 imágenes (presidente, equipo, camión). Tarjeta en `index.html:688-690`, imagen `assets/casos/puerto-venado.webp`.
- Lo que ya se publicó en un repo público queda en el historial de git aunque se borre.
