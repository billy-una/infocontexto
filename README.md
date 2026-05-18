# InfoContexto

Plataforma interactiva de presentación de contenidos con soporte multimedia y gestión dinámica de diapositivas.

## 🚀 Descripción del Proyecto

InfoContexto es una aplicación web que permite crear y gestionar presentaciones interactivas. Utiliza tecnologías modernas de frontend (Vanilla JavaScript, HTML5, CSS3) para proporcionar una experiencia de usuario fluida y responsiva.

### Características Principales

- 📊 **Gestión de Diapositivas**: Sistema flexible para crear y organizar contenido
- ⚙️ **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- 📱 **Responsivo**: Diseño adaptable a diferentes tamaños de pantalla
- 🎨 **Personalizable**: Estilos CSS modulares y fáciles de modificar
- 🔧 **Modal de Configuración**: Interfaz intuitiva para ajustes

## 📁 Estructura del Proyecto

```
infocontexto/
├── src/
│   ├── index.html                 # Punto de entrada principal
│   └── public/
│       └── presentationLayer/
│           ├── index.html         # HTML principal de la aplicación
│           ├── assets/            # Recursos (imágenes, iconos, etc.)
│           ├── css/
│           │   └── presentation.css    # Estilos principales
│           └── js/
│               ├── app.js              # Punto de entrada del JavaScript
│               ├── componentes/        # Componentes modulares
│               │   ├── ConfigModal.js
│               │   ├── PageManager.js
│               │   ├── PageRail.js
│               │   ├── SlideComponent.js
│               │   └── SlideManager.js
│               └── pages/
│                   └── content.js      # Definición de contenidos
├── plantilla/                     # Archivos de plantilla (respaldo)
├── package.json                   # Dependencias y scripts
├── firebase.json                  # Configuración de Firebase Hosting
├── .firebaserc                    # Configuración del proyecto Firebase
├── .gitignore                     # Archivos ignorados por Git
└── README.md                      # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: Firebase Hosting
- **Control de Versiones**: Git
- **Package Manager**: npm

## 📋 Requisitos Previos

- **Node.js** 16.x o superior
- **npm** 7.x o superior
- **Cuenta en Firebase** con proyecto configurado
- **Git** (opcional, para control de versiones)

[Descargar Node.js](https://nodejs.org/)

## ⚡ Instalación

### 1. Clonar o Descargar el Proyecto

```bash
git clone <url-del-repositorio>
cd infocontexto
```

### 2. Instalar Dependencias

```bash
npm install
```

Esto instalará:
- **firebase-tools**: CLI de Firebase para desplegar
- **firebase**: SDK de Firebase para la aplicación

### 3. Autenticarse en Firebase

```bash
firebase login
```

Se abrirá una ventana del navegador para autenticarte con tu cuenta de Google.

## 🚀 Desarrollo Local

### Ejecutar el Servidor de Desarrollo

```bash
npm start
```

Esto iniciará los emuladores de Firebase (si están configurados) o puedes usar:

```bash
npm run serve
```

Para servir los archivos estáticos localmente.

La aplicación estará disponible en `http://localhost:5000`

## 📝 Cómo Modificar el Proyecto

### Agregar Nuevos Componentes

1. Crea un nuevo archivo en `src/public/presentationLayer/js/componentes/`
2. Define tu componente como una clase o función
3. Importa y utiliza en `src/public/presentationLayer/js/app.js`

**Ejemplo:**
```javascript
// src/public/presentationLayer/js/componentes/MiComponente.js
class MiComponente {
  constructor(opciones) {
    this.opciones = opciones;
  }
  
  render() {
    // Tu código aquí
  }
}

export default MiComponente;
```

### Modificar Estilos

Los estilos se encuentran en:
- `src/public/presentationLayer/css/presentation.css` - Estilos principales

Puedes agregar nuevos archivos CSS si lo prefieres:

```html
<!-- En index.html -->
<link rel="stylesheet" href="css/presentation.css">
<link rel="stylesheet" href="css/custom.css">
```

### Agregar Contenido

Modifica `src/public/presentationLayer/js/pages/content.js` para:
- Agregar nuevas páginas
- Modificar el contenido existente
- Actualizar textos e imágenes

### Actualizar Configuración Firebase

El archivo `src/public/presentationLayer/js/app.js` contiene la configuración:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAIMoJmRiclWPxLxdmBeJrYQoFkKNS-KfA",
  authDomain: "infocontexto2025-19.firebaseapp.com",
  projectId: "infocontexto2025-19",
  storageBucket: "infocontexto2025-19.firebasestorage.app",
  messagingSenderId: "263969218786",
  appId: "1:263969218786:web:40480518d9fe3a11adbebb",
  measurementId: "G-03WEHFLR7R"
};
```

## 🚢 Deploy a Firebase Hosting

### Opción 1: Deploy Manual (Recomendado)

```bash
# Construir (si es necesario)
npm run build

# Desplegar
npm run deploy
```

### Opción 2: Deploy desde Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto `infocontexto2025-19`
3. Dirígete a "Hosting"
4. Sigue las instrucciones para conectar tu repositorio

### Opción 3: Deploy Manual con Firebase CLI

```bash
firebase deploy --only hosting
```

## ✅ Verificar el Despliegue

Después del deploy, tu aplicación estará disponible en:

```
https://infocontexto2025-19.web.app
https://infocontexto2025-19.firebaseapp.com
```

Para verificar el estado del despliegue:

```bash
firebase hosting:channel:list
```

## 🔐 Variables de Entorno

Si necesitas variables de entorno (API keys secundarias, etc.), crea un archivo `.env`:

```
# .env (NO subir a Git)
VITE_API_URL=https://api.ejemplo.com
VITE_ENVIRONMENT=production
```

## 🛠️ Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala todas las dependencias |
| `npm start` | Inicia emuladores Firebase |
| `npm run serve` | Sirve la app localmente |
| `npm run deploy` | Despliega en Firebase Hosting |
| `npm run build` | Construye el proyecto |
| `firebase login` | Autentica con Firebase |
| `firebase logout` | Cierra sesión de Firebase |
| `firebase list` | Muestra proyectos disponibles |

## 📊 Gestión de Cambios

### Git Workflow Recomendado

```bash
# 1. Crear rama para nueva feature
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios y commits
git add .
git commit -m "Descripción clara del cambio"

# 3. Pushear rama
git push origin feature/nueva-funcionalidad

# 4. Crear Pull Request en GitHub
# (Revisar y mergear)

# 5. Deploy a producción
git checkout main
git merge feature/nueva-funcionalidad
npm run deploy
```

## 🐛 Solución de Problemas

### Error: "Firebase project not found"

```bash
firebase init hosting
# O verifica .firebaserc está configurado correctamente
```

### Error: "Permission denied" al desplegar

```bash
firebase logout
firebase login
firebase deploy
```

### Cambios no se reflejan en producción

1. Limpia caché del navegador (Ctrl+Shift+Del o Cmd+Shift+Del)
2. Verifica que los archivos estén en `src/public/`
3. Re-ejecuta el deploy:

```bash
firebase deploy --only hosting --force
```

### Problemas con node_modules

```bash
# Limpiar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

## 📚 Recursos Adicionales

- [Documentación Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Firebase CLI Documentation](https://firebase.google.com/docs/cli)
- [JavaScript Guide - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [CSS Grid & Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS)

## 👥 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para reportar problemas o sugerencias:

1. Abre una Issue en GitHub
2. Describe el problema detalladamente
3. Proporciona pasos para reproducirlo

---

**Última actualización**: 18 de mayo de 2026

**Estado**: En desarrollo ✨
