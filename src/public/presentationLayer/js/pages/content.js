export const presentationConfig = {
  totalSeconds: 420,
  slideWarningSeconds: 10,
  pages: [
    {
      id: "presentacion",
      title: "Presentación",
      seconds: 60,
      slides: [
        {
          seconds: 30,
          title: "Sistema de Gestión del Gimnasio",
          subtitle: "Mi Colegio • CCECR",
          components: [
            {
              type: "text",
              text: "Solución web para administrar entrenadores, horarios, citas, rutinas, ejercicios, cuestionario de salud y control de acceso del gimnasio."
            },
            {
              type: "metrics",
              items: [
                { value: "2", label: "perfiles: admin y colegiado" },
                { value: "8", label: "módulos funcionales" },
                { value: "6m", label: "vigencia del cuestionario" }
              ]
            }
          ],
          media: {
            type: "image",
            src: "assets/visual-acceso.png",
            caption: "Gestión integral del gimnasio"
          }
        },
        {
          seconds: 30,
          title: "Alcance de la demo",
          subtitle: "Recorrido por procesos administrativos y experiencia del colegiado",
          components: [
            {
              type: "rules",
              items: [
                { tone: "family", title: "Administrador", text: "Entrenadores, horarios, citas, ejercicios, rutinas y control de acceso." },
                { tone: "priority", title: "Colegiado", text: "Citas, cuestionario de salud, rutinas asignadas y progreso." },
                { tone: "peak", title: "Reglas", text: "Capacidad, familiares, hora pico, prioridad para adultos mayores y vigencias." }
              ]
            }
          ],
          media: {
            type: "image",
            src: "assets/visual-horarios.png",
            caption: "Reglas de negocio visibles"
          }
        }
      ]
    },
    {
      id: "problema",
      title: "Problema",
      seconds: 60,
      slides: [
        {
          seconds: 30,
          title: "El problema",
          subtitle: "",
          components: [
            {
              type: "story",
              variant: "problem",
              lead: "La gestión del gimnasio se realizaba en papel, lo que generaba múltiples dificultades.",
              items: [
                { icon: "▣", title: "Ineficiencia", text: "Búsqueda manual de rutinas, citas y expedientes en archivos físicos." },
                { icon: "!", title: "Errores y retrasos", text: "Mayor probabilidad de errores, duplicidad de datos y atención más lenta." },
                { icon: "◢", title: "Impacto ambiental", text: "Alto consumo de papel y recursos innecesarios." }
              ],
              visual: { type: "image", src: "assets/problema.jpeg", alt: "Gestión manual en papel" },
              note: {
                icon: "▤",
                text: "Necesitábamos una forma más ágil, confiable y sostenible de gestionar la información."
              }
            }
          ]
        },
        {
          seconds: 30,
          title: "La solución",
          subtitle: "",
          components: [
            {
              type: "story",
              variant: "solution",
              lead: "Sistema digital centralizado para la gestión del gimnasio.",
              items: [
                { icon: "▤", title: "Rutinas digitales", text: "Acceso inmediato a la información del colegiado." },
                { icon: "✓", title: "Gestión de citas", text: "Organización eficiente de horarios, bloques y cupos." },
                { icon: "▥", title: "Calendario institucional", text: "Control centralizado de actividades y reglas operativas." }
              ],
              visual: { type: "image", src: "assets/solucion.jpeg", alt: "Sistema digital centralizado" },
              badges: [
                { icon: "✓", text: "Menos errores" },
                { icon: "✓", text: "Procesos más ágiles" },
                { icon: "✓", text: "Cero papel innecesario" },
                { icon: "✓", text: "Información confiable" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "demostracion",
      title: "Demostración",
      seconds: 200,
      slides: [
        {
          seconds: 10,
          title: "Admin: Entrenadores",
          subtitle: "",
          components: [
            {
              type: "rules",
              items: [
                { title: "Accion", text: "Abrir modulo Entrenadores, mostrar lista y crear/editar rapido." },
                { title: "Guion", text: "Iniciamos en el perfil administrador. Aqui gestionamos entrenadores: registrar, consultar, editar y eliminar." },
                { title: "Regla", text: "Los entrenadores quedan disponibles para asignarse a los bloques de horario del gimnasio." }
              ]
            }
          ],
          // VIDEO 1: DEMOSTRACION - ADMIN ENTRENADORES
          // Contenido del video:
          // - Abrir modulo Entrenadores
          // - Mostrar listado
          // - Crear o editar entrenador rapidamente
          // URL: /src/public/presentationLayer/videos/demo-entrenadores.mp4
          media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/infocontexto2025-19.firebasestorage.app/o/presentation%2Fvideos%2Fclips%2F5-admin-entrenadores.mp4?alt=media&token=35954f8f-ee85-439f-b1cd-a5fdf9e0cdf9", caption: "Video: Entrenadores", fullscreen: true }
        },
        {
          seconds: 41,
          title: "Admin: Horarios / Bloques",
          subtitle: "",
          components: [
            {
              type: "rules",
              items: [
                { title: "Accion", text: "Entrar a Horarios/Bloques y mostrar fecha, hora, entrenador, tipo y capacidad." },
                { title: "Bloques", text: "Cada bloque define un rango de tiempo, entrenador asignado y cupos disponibles por tipo de cita." },
                { title: "Tipos", text: "Regular, prioritario para adultos mayores 65+ y hora pico para alta demanda." },
                { title: "Regla", text: "El sistema evita bloques solapados para el mismo entrenador." }
              ]
            }
          ],
          // VIDEO 2: DEMOSTRACION - ADMIN HORARIOS / BLOQUES
          // Contenido del video:
          // - Entrar a Horarios/Bloques
          // - Mostrar o crear bloque con fecha, hora inicio, hora fin, entrenador, tipo y capacidad
          // - Explicar regular, prioritario y hora pico
          // URL: /src/public/presentationLayer/videos/demo-bloques.mp4
          media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/infocontexto2025-19.firebasestorage.app/o/presentation%2Fvideos%2Fclips%2F5-admin-bloques-horarios.mp4?alt=media&token=acc766b6-080f-48a6-9dd7-096cac84ecde", caption: "Video: Bloques", fullscreen: true }
        },
        {
          seconds: 34,
          title: "Admin: Citas",
          subtitle: "",
          components: [],
          // VIDEO 3: DEMOSTRACION - ADMIN CITAS
          // Contenido del video:
          // - Crear o editar cita
          // - Seleccionar colegiado, beneficiario, tipo y bloque
          // - Mostrar validacion de capacidad y restricciones
          // URL: /src/public/presentationLayer/videos/demo-citas-admin.mp4
          media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/infocontexto2025-19.firebasestorage.app/o/presentation%2Fvideos%2Fclips%2F5-admin-citas-admin.mp4?alt=media&token=64d239b3-5878-4473-84cd-277c4a3a1316", caption: "Video: Citas Admin", fullscreen: true }
        },
        {
          seconds: 22,
          title: "Admin: Ejercicios",
          subtitle: "",
          components: [
            {
              type: "rules",
              items: [
                { title: "Accion", text: "Entrar a Ejercicios y mostrar los campos principales." },
                { title: "Datos", text: "Nombre, grupo muscular, dificultad, maquina y evidencia." },
                { title: "Uso", text: "El catalogo se reutiliza cuando el administrador arma rutinas por dia." }
              ]
            }
          ],
          // VIDEO 4: DEMOSTRACION - ADMIN EJERCICIOS
          // Contenido del video:
          // - Abrir modulo Ejercicios
          // - Mostrar listado y campos principales
          // - Crear o editar rapidamente
          // URL: /src/public/presentationLayer/videos/demo-ejercicios.mp4
          media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/infocontexto2025-19.firebasestorage.app/o/presentation%2Fvideos%2Fclips%2F2-admin-ejercicios.mp4?alt=media&token=479a2a9b-0596-4913-bc46-3adafcef2c99", caption: "Video: Ejercicios", fullscreen: true }
        },
        {
          seconds: 22,
          title: "Admin: Rutinas",
          subtitle: "",
          components: [
            {
              type: "rules",
              items: [
                { title: "Accion", text: "Entrar a Rutinas, buscar colegiado, mostrar objetivo, inicio y ejercicios por dia." },
                { title: "Vigencia", text: "Cada rutina dura 8 semanas." },
                { title: "Regla", text: "No puede solaparse con otra rutina activa del mismo colegiado." },
                { title: "Seguimiento", text: "El progreso queda por ejercicio: pendiente, completado u omitido." }
              ]
            }
          ],
          // VIDEO 5: DEMOSTRACION - ADMIN RUTINAS
          // Contenido del video:
          // - Buscar colegiado
          // - Mostrar objetivo fisico, fecha de inicio y ejercicios por dia
          // - Explicar vigencia de 8 semanas y no solapamiento
          // URL: /src/public/presentationLayer/videos/demo-rutinas-admin.mp4
          media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/infocontexto2025-19.firebasestorage.app/o/presentation%2Fvideos%2Fclips%2F2-admin-crear-rutina.mp4?alt=media&token=a4d0fc3f-0fc9-4a13-b6b4-e62d99a2db1c", caption: "Video: Rutinas", fullscreen: true }
        },
        {
          seconds: 33,
          title: "Colegiado: Mis citas",
          subtitle: "",
          components: [
            {
              type: "rules",
              items: [
                { title: "Accion", text: "Cambiar a perfil colegiado y entrar a Mis citas." },
                { title: "Operacion", text: "El usuario crea, edita o cancela sus citas." },
                { title: "Reglas", text: "Se mantienen capacidad, prioridad, hora pico y restricciones de familiares." }
              ]
            }
          ],
          // VIDEO 6: DEMOSTRACION - COLEGIADO MIS CITAS
          // Contenido del video:
          // - Cambiar a perfil colegiado
          // - Entrar a Mis citas
          // - Crear, editar o cancelar cita
          // URL: /src/public/presentationLayer/videos/demo-citas-colegiado.mp4
          media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/infocontexto2025-19.firebasestorage.app/o/presentation%2Fvideos%2Fclips%2F1-colegiado-citas.mp4?alt=media&token=8a12f68c-48a2-4d46-af24-a087e5956721", caption: "Video: Citas del Colegiado", fullscreen: true }
        },
        {
          seconds: 23,
          title: "Colegiado: Mis rutinas",
          subtitle: "",
          components: [
            {
              type: "rules",
              items: [
                { title: "Accion", text: "Entrar a Mis rutinas, ver ejercicios y marcar progreso." },
                { title: "Consulta", text: "El colegiado revisa ejercicios por dia y semana." },
                { title: "Progreso", text: "Cada ejercicio puede quedar pendiente, completado u omitido." }
              ]
            }
          ],
          // VIDEO 7: DEMOSTRACION - COLEGIADO MIS RUTINAS
          // Contenido del video:
          // - Entrar a Mis rutinas
          // - Ver ejercicios asignados
          // - Marcar progreso
          // URL: /src/public/presentationLayer/videos/demo-mis-rutinas.mp4
          media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/infocontexto2025-19.firebasestorage.app/o/presentation%2Fvideos%2Fclips%2F1-colegiado-rutinas.mp4?alt=media&token=e91b31af-2fea-44c6-9226-2ce7c2e75f60", caption: "Video: Rutinas del Colegiado", fullscreen: true }
        },
        {
          seconds: 15,
          title: "Control de acceso",
          subtitle: "",
          components: [
            {
              type: "rules",
              items: [
                { title: "Accion", text: "Volver a Control de acceso, validar codigo y marcar carnet." },
                { title: "Validaciones", text: "Colegiatura, datos actualizados, carnet, suspension activa y cita del dia." },
                { title: "Cierre", text: "La recepcion confirma si el ingreso se permite y registra la operacion." }
              ]
            }
          ],
          // VIDEO 8: DEMOSTRACION - CONTROL DE ACCESO
          // Contenido del video:
          // - Validar codigo o carnet del colegiado
          // - Revisar colegiatura, datos, suspension y cita del dia
          // - Permitir o denegar ingreso
          // URL: /src/public/presentationLayer/videos/demo-control-acceso.mp4
          media: { type: "video", src: "https://firebasestorage.googleapis.com/v0/b/infocontexto2025-19.firebasestorage.app/o/presentation%2Fvideos%2Fclips%2F5-control-acceso.mp4?alt=media&token=630563d8-95b3-4903-be9f-8409bb990d02", caption: "Video: Control de Acceso", fullscreen: true }
        }
      ]
    },
    {
      id: "resultados",
      title: "Resultados",
      seconds: 55,
      slides: [
        {
          seconds: 25,
          title: "Resultados Funcionales",
          subtitle: "El sistema reduce errores manuales y centraliza las reglas críticas.",
          components: [
            {
              type: "metrics",
              items: [
                { value: "8 sem", label: "vigencia de rutina" },
                { value: "6 mes", label: "vigencia de cuestionario" },
                { value: "1 día", label: "límite por grupo familiar para citas regulares/primera vez" }
              ]
            },
            {
              type: "text",
              text: "Se automatiza la validación de cupos, restricciones por familiares, prioridad de adultos mayores, hora pico, asistencia y suspensiones."
            }
          ],
          media: { type: "image", src: "assets/visual-acceso.png", caption: "Operación controlada y trazable" }
        },
        {
          seconds: 30,
          title: "Impacto en la operación",
          subtitle: "Admin controla la agenda y el colegiado consulta/gestiona su experiencia.",
          components: [
            {
              type: "rules",
              items: [
                { title: "Menos duplicidad", text: "La agenda bloquea solapamientos y citas no permitidas." },
                { tone: "family", title: "Mejor atención", text: "Las reglas para familiares quedan explícitas." },
                { tone: "priority", title: "Prioridad clara", text: "Los bloques para adultos mayores se validan por edad." }
              ]
            }
          ],
          media: { type: "image", src: "assets/visual-horarios.png", caption: "Control institucional sin perder facilidad de uso" }
        }
      ]
    },
    {
      id: "retroalimentacion",
      title: "Retroalimentación",
      seconds: 45,
      slides: [
        {
          seconds: 30,
          title: "Puntos para validar",
          subtitle: "Aspectos que conviene revisar con usuarios reales antes del cierre.",
          components: [
            {
              type: "rules",
              items: [
                { title: "Claridad", text: "Mensajes de error para hora pico, prioridad y familiares." },
                { title: "Tiempo", text: "Duración ideal por pantalla durante la demostración." },
                { title: "Control", text: "Confirmar si el cuestionario debe bloquear todas las rutas del colegiado." }
              ]
            }
          ],
          media: { type: "image", src: "assets/visual-cuestionario.png", caption: "Retroalimentación orientada a ajustes finales" }
        },
        {
          seconds: 15,
          title: "Cierre",
          subtitle: "El sistema integra agenda, salud, rutinas y acceso bajo reglas de negocio verificables.",
          components: [
            {
              type: "text",
              text: "La demostración muestra cómo la solución separa responsabilidades entre administración y colegiado, manteniendo restricciones institucionales en cada flujo."
            }
          ],
          media: { type: "image", src: "assets/visual-rutinas.png", caption: "Gracias" }
        }
      ]
    }
  ]
};
