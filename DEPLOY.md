# 🚀 GUÍA RÁPIDA DE DEPLOY A FIREBASE HOSTING

## Paso 1: Instalación de Dependencias

```bash
cd /Users/billitas/Documents/proyectos/infocontexto
npm install
```

**Qué hace**: Instala `firebase-tools` (CLI de Firebase) y el SDK de Firebase.

---

## Paso 2: Autenticación en Firebase

```bash
firebase login
```

**Qué hace**: 
- Abre tu navegador automáticamente
- Te pide que inicies sesión con Google
- Genera un token de autenticación local

**Nota**: Solo necesitas hacer esto una vez por máquina.

---

## Paso 3: Verificar Configuración

```bash
firebase projects:list
```

Deberías ver tu proyecto `infocontexto2025-19` en la lista.

---

## Paso 4: Deploy Inicial

```bash
npm run deploy
```

O de forma alternativa:

```bash
firebase deploy --only hosting
```

**Qué hace**:
1. Toma todos los archivos de `src/public/`
2. Los sube a Firebase Hosting
3. Proporciona URLs donde está disponible la app

---

## Paso 5: Verificar el Deploy

Accede a tu aplicación en:

### URLs Disponibles:
- **Principal**: https://infocontexto2025-19.web.app
- **Alternativa**: https://infocontexto2025-19.firebaseapp.com

---

## Deployments Futuros

Para futuras actualizaciones, solo ejecuta:

```bash
npm run deploy
```

O manualmente:

```bash
firebase deploy --only hosting
```

---

## 🔄 Workflow de Desarrollo

### 1. Desarrollo Local
```bash
npm run serve
# Tu app estará en http://localhost:5000
```

### 2. Haz tus cambios
- Modifica archivos en `src/public/`
- Recarga el navegador para ver cambios

### 3. Deploy a Producción
```bash
npm run deploy
```

---

## 📋 Checklist Pre-Deploy

Antes de hacer deploy, verifica:

- [ ] Los cambios están en `src/public/`
- [ ] No hay errores en la consola de desarrollo
- [ ] Las imágenes y recursos cargan correctamente
- [ ] Los scripts JavaScript funcionan

---

## ⚠️ Troubleshooting Rápido

### Error: "Firebase CLI not installed"
```bash
npm install -g firebase-tools
```

### Error: "Not logged in"
```bash
firebase login
firebase projects:list
```

### Error: "Permission denied"
```bash
firebase logout
firebase login
npm run deploy
```

### Ver estado de despliegues
```bash
firebase hosting:channel:list
```

### Ver logs de la aplicación
```bash
firebase functions:log
```

---

## 📊 Información del Proyecto

| Dato | Valor |
|------|-------|
| **Proyecto Firebase** | infocontexto2025-19 |
| **Carpeta a desplegar** | src/public |
| **URL Producción** | https://infocontexto2025-19.web.app |

---

## ✅ Post-Deploy

Después de desplegar:

1. ✅ Espera 1-2 minutos para que se propague
2. ✅ Borra caché: `Ctrl+Shift+Del` o `Cmd+Shift+Del`
3. ✅ Abre URL de producción en navegador privado
4. ✅ Verifica que todo funciona correctamente

---

## 🎯 Próximos Pasos

1. **Configurar CI/CD**: Auto-deploy al push a main (GitHub Actions)
2. **Agregar dominio personalizado**: Si tienes un dominio
3. **Configurar HTTPS**: Ya viene incluido con Firebase
4. **Monitorar**: Ver analytics en Firebase Console

---

**Creado**: 18 de mayo de 2026
