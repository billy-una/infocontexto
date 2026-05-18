# 🎯 PASOS EXACTOS PARA DESPLEGAR TU WEB A FIREBASE

## 📌 Resumen Rápido

Tu web está lista para desplegar. Solo necesitas:

1. ✅ Instalar firebase-tools
2. ✅ Autenticarte con Firebase  
3. ✅ Ejecutar un comando de deploy
4. ✅ ¡Listo!

---

## 🔧 INSTRUCCIONES PASO A PASO

### PASO 1: Abre Terminal

En VS Code o tu terminal preferida, navega a tu proyecto:

```bash
cd /Users/billitas/Documents/proyectos/infocontexto
```

---

### PASO 2: Instala las Dependencias

```bash
npm install
```

**Output esperado:**
```
added XX packages in XXs
```

Esto instalará:
- `firebase-tools` (herramienta para desplegar)
- `firebase` (SDK para tu app)

---

### PASO 3: Inicia Sesión en Firebase

```bash
firebase login
```

**Qué pasa:**
1. Se abre tu navegador automáticamente
2. Elige tu cuenta de Google (la que usaste para crear el proyecto)
3. Haz clic en "Permitir"
4. Regresa a la terminal

**Output esperado:**
```
✓ Logged in as: tuEmail@gmail.com
```

---

### PASO 4: Verifica que Todo Está Configurado

```bash
firebase projects:list
```

**Output esperado:**
```
Projects you have access to:
  - infocontexto2025-19
```

Si ves tu proyecto, ¡todo está listo! ✅

---

### PASO 5: ¡DESPLIEGA! 🚀

```bash
npm run deploy
```

**Qué pasa en el terminal:**

```
=== Deploying to 'infocontexto2025-19'...

i  deploying hosting
i  uploading new files [X/X]
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/infocontexto2025-19/overview
Hosting URL: https://infocontexto2025-19.web.app
```

---

## ✨ ¡LISTO! Tu Web Está Online

### URLs donde puedes ver tu web:

**👉 URL Principal (usa esta):**
```
https://infocontexto2025-19.web.app
```

**Alternativa:**
```
https://infocontexto2025-19.firebaseapp.com
```

---

## 🔄 Próximas Actualizaciones

Cada vez que quieras actualizar tu web con nuevos cambios:

```bash
npm run deploy
```

¡Eso es todo! 🎉

---

## ❓ ¿Qué Hice?

Creé estos archivos en tu proyecto:

```
📄 package.json         → Define dependencias y comandos
📄 firebase.json        → Configura qué carpeta desplegar
📄 .firebaserc          → Vincula tu proyecto Firebase
📄 .gitignore           → Archivos ignorados por Git
📄 README.md            → Documentación completa del proyecto
📄 DEPLOY.md            → Guía de deploy detallada
📄 QUICK-START.md       → Este archivo (guía rápida)
```

---

## 🆘 Problemas Comunes

### ❌ Error: "firebase: command not found"

**Solución:**
```bash
npm install -g firebase-tools
firebase login
npm run deploy
```

### ❌ Error: "Not logged in to Firebase"

**Solución:**
```bash
firebase logout
firebase login
npm run deploy
```

### ❌ Error: "Permission denied"

**Solución:**
Probablemente usas otro proyecto. Verifica:

```bash
firebase use --list
firebase use infocontexto2025-19
npm run deploy
```

### ❌ Los cambios no se ven en producción

**Solución:**
1. Abre en navegador privado (incógnito) o limpia caché
2. Espera 2 minutos para que Firebase propague
3. Intenta nuevamente el deploy:
   ```bash
   firebase deploy --only hosting --force
   ```

---

## 📞 Soporte Rápido

**¿Necesitas ayuda?**

```bash
# Ver más información
firebase --version

# Ver comandos disponibles
firebase help

# Ver logs
firebase hosting:channel:list
```

---

## 🎓 Próximos Pasos (Opcional)

Una vez deployed, puedes:

1. **Agregar dominio personalizado**
   - En Firebase Console → Hosting → Agregar dominio

2. **Configurar deploy automático**
   - Conectar con GitHub y hacer deploy automático al hacer push

3. **Ver analytics**
   - Firebase Console → Hosting → Ver estadísticas

4. **Revertir a versión anterior**
   - Firebase Console → Hosting → Versiones previas

---

## ✅ Checklist Final

- [ ] `npm install` ejecutado ✓
- [ ] `firebase login` completado ✓
- [ ] `npm run deploy` ejecutado ✓
- [ ] Web visible en https://infocontexto2025-19.web.app ✓
- [ ] ¡Celebra tu deploy! 🎉

---

**¡Tu web está en línea! 🚀**

Fecha: 18 de mayo de 2026
