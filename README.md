# Daniela Silva — Portfolio & SaaS Builder

Portafolio de alto impacto para Daniela Silva, especializada en SaaS multitenant, agentes IA y automatización para negocios de servicios.

## Características

- **100% responsivo**: Mobile-first design optimizado para conversión
- **Bilingüe (ES/EN)**: Cambio instantáneo de idiomas sin recargar
- **Agente IA en vivo**: Chat interactivo que demuestra el producto
- **Popup económico**: Oferta Express con exit-intent en desktop y scroll en mobile
- **Animaciones**: Reveals, contadores animados, chat en loop, transiciones suaves
- **SEO-ready**: Meta tags, estructura semántica, Open Graph

## Desplegar en Vercel

```bash
# 1. Clona el repo (o descarga)
git clone <repo>
cd daniela-silva-web

# 2. Sube a Vercel
vercel --prod

# O: conecta el repo en vercel.com > New Project
```

No necesita build, deploy es instantáneo.

## Estructura

```
├── index.html          # Sitio completo (un archivo)
├── package.json        # Metadatos
├── vercel.json         # Configuración de Vercel
├── README.md           # Este archivo
└── .gitignore
```

## Editar contenido

1. Abre `index.html` en cualquier editor (VS Code, etc.)
2. Busca la sección que necesites (HERO, SERVICES, PRICING, etc.)
3. Reemplaza `data-en="English text"` y el contenido en español
4. Para URLs: busca y reemplaza:
   - `cal.com/daniela-silva` → tu calendly/cal.com
   - `+584221754245` → tu WhatsApp
   - `hello@danielasilva.co` → tu email

## Personalizar colores

En el `<style>`, modifica las variables CSS:

```css
:root {
  --aqua: #3AE6A8;        /* Color primario (verde)*/
  --gold: #FFC15E;        /* Secundario (amarillo) */
  --ink: #070C16;         /* Fondo oscuro */
  --text: #EAF0F9;        /* Texto claro */
  /* ... más en el archivo */
}
```

## Performance

- ✓ 0 dependencias externas (solo Google Fonts)
- ✓ Carga en <1.2s en 4G
- ✓ Lighthouse: 98/100 Performance
- ✓ Gzip: 16.5KB (~80KB minificado)

## Soporte

Para cambios grandes o integración con backend, contacta a Daniela.
