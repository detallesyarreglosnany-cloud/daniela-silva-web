# PLAN MAESTRO · v2 (2026-11-18)

## 1. La idea central
KubIA es una **empresa de soluciones digitales creada en Amazonas** (sin la palabra "startup"), en **etapa piloto**.
No compite por volumen: demuestra **que sabe hacerlo, que ya lo está haciendo y que lo hace desde aquí**, ajustado a las limitaciones del territorio.

**Lo que Banesco (y cualquier aliado) debe ver:**
1. Sabemos hacerlo → demos funcionando + clientes reales.
2. Lo estamos haciendo → personal en capacitación, sistemas en uso, verificación de pagos y módulo contable en camino.
3. Desde Amazonas → diseñado para poca señal, internet lento y cortes de luz.
4. Hacia dónde vamos → ruta clara, y el lugar exacto donde entra el banco.

**Historia que lo sostiene (video + ponencia + /nosotros):** amazonense, becaria y migrante en Perú durante la pandemia;
aprovechó becas, capacitaciones y oportunidades; reconoce el valor de ONG, financiamiento y formación; volvió para devolverlo,
para que ningún amazonense tenga que irse. [POR CONFIRMAR: fechas, beca, estudios, regreso]

## 2. Hero
Título (elegir): A. Herramientas digitales creadas en Amazonas, para que ningún amazonense tenga que irse.
B. Creado en Amazonas, para que ningún amazonense tenga que irse. (recomendado para la web)
C. Creado por una amazonense que tuvo que irse, para que ningún otro tenga que hacerlo. (recomendado para video/ponencia)
D. Desde Amazonas, para que el amazonense no tenga que irse.
Subtítulo: Desarrollamos sistemas digitales ajustados a cada negocio, capacitamos a personas y equipos, y acompañamos a cada
cliente en su mismo idioma. Lo que aquí es limitación —la luz, la señal, la distancia— para nosotros es el punto de partida.
Botones: [Necesito una solución] [Conocer KubIA]. Debajo sigue "Deja el cuaderno…". No mencionar al Estado.

## 3. Principio de producto: "Hecho para Amazonas"
Estándar propio, visible en la web y en el dossier:
1. Funciona con poca señal y sigue funcionando sin internet (ya existe: app liviana/PWA).
2. Pesa poco: carga rápido con datos móviles.
3. Si sabe usar WhatsApp, sabe usar KubIA: teléfono, enlaces, formularios simples.
4. Se aprende viendo: cada función tiene un video corto o recorrido guiado por voz (ya existe en Coalmar).
5. Se comparte por enlace: el cliente final no instala nada.
6. Se acompaña en persona: capacitación incluida en cada implementación.

## 4. Soluciones: 7 productos en 3 grupos + capacitación transversal
- **Vender:** KubIA Tienda · KubIA Agenda · KubIA Asistente
- **Operar y cobrar:** KubIA Distribución · KubIA Gestión · (en camino) Verificación de pagos · (en camino) Módulo contable
- **A la medida:** KubIA a la Medida · KubIA Corporativo
- **Capacitación:** incluida en todo + talleres propios
Estado en cada uno: **Funcionando** / **En piloto** / **En camino**.

## 5. Vitrina de soluciones (demos + clientes)
Las demos SON válidas como portafolio (práctica estándar: se protege la identidad del cliente). Regla de honestidad:
- Etiqueta **Cliente** = negocio real que autorizó aparecer (Coalmar, Cleaning Angels).
- **Puerto Venado sale de la web**: su sistema se convierte en una demo con otro nombre y otro rubro (catálogo, pedidos, seguimiento de envío, pago en línea, cobranza y control administrativo).
- Etiqueta **Demo** = negocio de ejemplo creado por KubIA (ej. consultorio de obstetricia).
- ⚠️ Hoy la sección se titula "Casos reales" e incluye la demo de la obstetra (ficticia) → renombrar a "Míralo funcionando" con etiquetas.
Demos por sector (existentes + a crear): distribución, tienda/bodega, agenda de servicios (Cleaning Angels), salud (obstetra),
gestión administrativa (base: Mando / SOFTWARE-ADMINISTRATIVO), farmacia, restaurante, taller. Cada demo con vista
"como cliente" y "como dueño", y video de 60 s.

## 6. Demo especial para Banesco: "El recorrido de un pago"
Mockup interactivo (etiquetado "Concepto") de una bodega de Puerto Ayacucho:
cliente pide por enlace → paga por pago móvil → registra la referencia → **hoy: verificación manual** →
**con el banco: verificación automática** → el pedido sale y el pago queda conciliado en Gestión/Contable.
Muestra al banco exactamente dónde entra. Base real: `PWApedidos/src/lib/pagos.ts`.

## 7. La Cumbre como motor (4 dic 2026)
- Demo en vivo con el teléfono **en modo avión**: "si se va la señal, sigue funcionando".
- QR en pantalla y en las mesas: cada asistente abre la demo de su sector y pide su diagnóstico gratuito.
- Eso genera **cifras propias y honestas** (registros, diagnósticos, sectores) → informe post-Cumbre para Banesco y aliados.
- Patrocinantes solo en cumbre.kubiav.com; en KubIA solo aliados autorizados.

## 8. Educación: "KubIA Capacitación" (confirmado)
- Primera cohorte: el personal que Daniela ya capacita [POR CONFIRMAR quién/autorización].
- Formato Amazonas: cápsulas de video cortas por WhatsApp + práctica presencial.
- Líneas: orientación digital para comerciantes; uso de herramientas para equipos; jóvenes en oficios digitales (con aliados).
- Constancia de participación.

## 9. Banesco: piezas
1. Visita en persona a la agencia de Puerto Ayacucho.
2. Correo corto. Asunto: "Empresarios de Amazonas, 4 de diciembre: una propuesta para Banesco". **No poner cifras de asistentes** (decisión de Daniela).
3. Ficha PDF de 1 página.
4. Micrositio privado (dossier interactivo): Amazonas → Cumbre → Daniela → Hecho para Amazonas → Vitrina → Recorrido de un pago → Cómo participar.
Ofertas: espacio en la Cumbre (cuentas jurídicas, afiliación de comercios a cobros digitales), ponencia, y piloto de verificación de pagos con 3 comercios.

## 10. Web después de la Cumbre
Menú: Inicio · Soluciones · Vitrina · Educación · Nosotros · Impacto y alianzas · Contacto.
Se conservan: calculadora, QR, planes y precios de Tienda, prueba gratis, diagnóstico, comparte y gana (en área comercial), FAQ por solución.

## 11. Activos que tenemos para aprovechar
PWApedidos (Puerto Venado: pedidos, vendedores, rutas, pagos) · Coalmar (panel, créditos, comisiones, guía por voz) ·
Cleaning Angels (agenda, DC/VA/MD) · demo obstetra · Mando (multi-negocio; aclarar licencia) · SOFTWARE-ADMINISTRATIVO ·
módulo contable (en desarrollo aparte) · verificación de pagos: **la respuesta la da Banesco esta semana** → ya hay conversación abierta con el banco.

## 12. Qué no tomamos de la propuesta externa
Hero genérico · exceso de categorías · programas educativos inventados · imágenes de stock · anunciar integración bancaria/SENIAT como existente · plan de 5 fases antes de la Cumbre.

## Evaluación como inversor / Banesco Innova (2026-11-18)
Fortalezas: historia real y coherente, producto que se puede probar, diseño para Amazonas (offline, liviano), encaje con banca (cobros/pago móvil), velocidad de ejecución.
Debilidades: tracción no visible, fundadora sola (riesgo de dependencia), demasiadas líneas (7 productos + capacitación + gobierno + cumbre), home muy largo para lector institucional (16 secciones; "Comparte y gana" visible), faltan señales formales (RIF, correo institucional).
Acciones antes de postular:
1. Hoja interna de tracción (no pública): negocios activos, pedidos procesados, pagos registrados, personas capacitadas.
2. Una cuña clara para el banco: pedidos + cobros verificados para distribuidoras y bodegas.
3. Mostrar equipo: personal en capacitación, asesores, aliados técnicos.
4. Página/ruta institucional corta (micrositio Banesco) sin lo comercial.
5. Señales formales: RIF, correo institucional, política de privacidad.
Colores: las tarjetas de soluciones SÍ mantienen colores distintos (decisión de Daniela); uniformidad solo en textos.
