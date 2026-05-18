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
          title: "Agenda con reglas operativas",
          subtitle: "El gimnasio necesita controlar cupos, horarios y restricciones sin depender de validaciones manuales.",
          components: [
            {
              type: "rules",
              items: [
                { title: "Capacidad", text: "Cada bloque tiene cupos por tipo de cita y no debe sobrepasarse." },
                { title: "Solapamientos", text: "Un entrenador no puede tener dos bloques cruzados en la misma fecha." },
                { title: "Estados", text: "Las citas pasan por programada, confirmada, cancelada, atendida o ausente." }
              ]
            }
          ],
          media: {
            type: "image",
            src: "assets/visual-horarios.png",
            caption: "Problema central: orden operativo con trazabilidad"
          }
        },
        {
          seconds: 30,
          title: "Familiares, prioridad y hora pico",
          subtitle: "Las reglas cambian según beneficiario, edad y tipo de bloque.",
          components: [
            {
              type: "rules",
              items: [
                { tone: "priority", title: "Prioritario", text: "Solo personas de 65 años o más pueden usar bloques prioritarios." },
                { tone: "peak", title: "Hora pico", text: "No se permiten citas para familiares en bloques de alta demanda." },
                { tone: "family", title: "Familiares", text: "Deben pertenecer al colegiado y agendan entre 08:00 y 14:30." }
              ]
            }
          ],
          media: {
            type: "image",
            src: "assets/visual-citas.png",
            caption: "Operación con restricciones automáticas"
          }
        }
      ]
    },
    {
      id: "demostracion",
      title: "Demostración",
      seconds: 180,
      slides: [
        {
          seconds: 30,
          title: "Admin: Entrenadores y horarios",
          subtitle: "CRUD entrenadores, bloques, reglas de no solapamiento.",
          components: [
            {
              type: "rules",
              items: [
                { title: "CRUD entrenadores", text: "Registrar, consultar, editar y eliminar instructores." },
                { title: "CRUD bloques/horarios", text: "Crear bloques con fecha, hora, entrenador, tipo y capacidad." },
                { title: "Tipos de bloque", text: "Regular, prioritario (65+) y hora pico (capacidad limitada)." },
                { title: "Validación", text: "No se aceptan horarios solapados para el mismo entrenador." }
              ]
            }
          ],
          // VIDEO 1: DEMOSTRACIÓN - ADMIN ENTRENADORES Y HORARIOS
          // Contenido del video:
          // - Demostración de CRUD de entrenadores (crear, editar, eliminar)
          // - Creación de bloques/horarios con fecha, hora, entrenador, tipo (regular/prioritario/pico), capacidad
          // - Validación de no solapamiento: intentar crear bloque solapado y ver el error
          // - Mostrar los 3 tipos de bloque y sus características
          // URL: /src/public/presentationLayer/videos/demo-entrenadores-horarios.mp4
          media: { type: "video", src: "videos/demo-entrenadores-horarios.mp4", caption: "Video: Gestión de Entrenadores y Horarios", fullscreen: true }
        },
        {
          seconds: 30,
          title: "Admin: Citas",
          subtitle: "CRUD citas, tipos, titulares vs familiares, capacidad por bloque.",
          components: [
            {
              type: "rules",
              items: [
                { title: "Tipos de cita", text: "Cambio de rutina, entrenamiento regular y primera vez." },
                { tone: "family", title: "Titular vs Familiar", text: "Titular es el colegiado; familiar debe pertenecer al colegiado." },
                { title: "Capacidad", text: "Cada bloque respeta cupos por tipo de beneficiario." },
                { tone: "peak", title: "Restricciones", text: "Hora pico no permite familiares; prioritario solo 65+." }
              ]
            }
          ],
          // VIDEO 2: DEMOSTRACIÓN - ADMIN CITAS
          // Contenido del video:
          // - CRUD de citas desde administrador (crear, editar, cancelar)
          // - Mostrar los 3 tipos de cita: cambio de rutina, entrenamiento regular, primera vez
          // - Seleccionar titular vs familiar
          // - Validación de capacidad por bloque
          // - Intentar crear cita que viole restricciones y ver errores
          // URL: /src/public/presentationLayer/videos/demo-citas.mp4
          media: { type: "video", src: "videos/demo-citas.mp4", caption: "Video: Creación y Gestión de Citas", fullscreen: true }
        },
        {
          seconds: 30,
          title: "Reglas de negocio de citas",
          subtitle: "Prioritario, hora pico, familiares, vigencias y límites.",
          components: [
            {
              type: "rules",
              items: [
                { tone: "priority", title: "Prioritario", text: "Solo personas de 65 años o más pueden usar bloques prioritarios." },
                { tone: "peak", title: "Hora pico", text: "No se permiten citas para familiares; capacidad limitada." },
                { tone: "family", title: "Familiares", text: "Deben pertenecer al colegiado; horario 08:00-14:30." },
                { title: "Límite diario", text: "Una cita regular/primera vez por día para el grupo familiar." }
              ]
            }
          ],
          // VIDEO 3: DEMOSTRACIÓN - REGLAS DE NEGOCIO DE CITAS
          // Contenido del video:
          // - Intentar agendar cita prioritario sin ser 65+ → error
          // - Intentar agendar familiar en hora pico → error
          // - Intentar agendar familiar sin pertenecer al colegiado → error
          // - Intentar agendar familiar fuera de 08:00-14:30 → error
          // - Intentar agendar 2 citas regulares/primera vez en el mismo día para el grupo → error
          // - Mostrar citas exitosas que cumplen todas las reglas
          // URL: /src/public/presentationLayer/videos/demo-reglas-citas.mp4
          media: { type: "video", src: "videos/demo-reglas-citas.mp4", caption: "Video: Validación Automática de Reglas", fullscreen: true }
        },
        {
          seconds: 30,
          title: "Admin: Ejercicios y rutinas",
          subtitle: "CRUD ejercicios, crear rutinas, objetivo, vigencia de 8 semanas.",
          components: [
            {
              type: "rules",
              items: [
                { title: "CRUD Ejercicios", text: "Nombre, grupo muscular, dificultad, máquina y evidencia." },
                { title: "Crear Rutina", text: "Objetivo físico, fecha inicial, seleccionar ejercicios por día." },
                { title: "Vigencia", text: "Cada rutina dura 8 semanas exactas sin solaparse con otra activa del mismo colegiado." },
                { title: "Progresión", text: "Seguimiento de ejercicios completados, omitidos o pendientes." }
              ]
            }
          ],
          // VIDEO 4: DEMOSTRACIÓN - ADMIN EJERCICIOS Y RUTINAS
          // Contenido del video:
          // - CRUD de ejercicios (crear, editar, eliminar): nombre, grupo muscular, dificultad, máquina, evidencia
          // - Crear nueva rutina: seleccionar colegiado, objetivo físico, fecha inicial
          // - Asignar ejercicios por día (7 días de la semana)
          // - Mostrar vigencia: 8 semanas exactas desde la fecha inicial
          // - Intentar crear rutina solapada para el mismo colegiado → error
          // - Mostrar rutina activa con ejercicios del día
          // URL: /src/public/presentationLayer/videos/demo-ejercicios-rutinas.mp4
          media: { type: "video", src: "videos/demo-ejercicios-rutinas.mp4", caption: "Video: Gestión de Ejercicios y Rutinas", fullscreen: true }
        },
        {
          seconds: 30,
          title: "Colegiado: Citas, cuestionario y rutinas",
          subtitle: "Gestión de citas, cuestionario (6 meses), rutinas asignadas y progreso.",
          components: [
            {
              type: "rules",
              items: [
                { tone: "family", title: "Mis citas", text: "Crear, consultar, editar o cancelar citas propias." },
                { title: "Cuestionario de salud", text: "Registra salud, lesiones, medicamentos, sueño, estrés y contacto." },
                { title: "Vigencia", text: "Cuestionario válido por 6 meses: pendiente, vigente, próximo a vencer o vencido." },
                { title: "Mis rutinas", text: "Ver ejercicios asignados, vigencia y marcar progreso por fecha." }
              ]
            }
          ],
          // VIDEO 5: DEMOSTRACIÓN - COLEGIADO CITAS, CUESTIONARIO Y RUTINAS
          // Contenido del video:
          // - Acceso como colegiado (iniciar sesión)
          // - Ver "Mis citas": crear nueva cita (respetando las reglas), consultar, editar, cancelar
          // - Llenar cuestionario de salud (preguntas sobre: lesiones, medicamentos, sueño, estrés, contacto de emergencia)
          // - Mostrar vigencia del cuestionario: "Válido hasta [fecha]"
          // - Ver "Mis rutinas": mostrar ejercicios del día, del la semana
          // - Marcar ejercicios como completados, omitidos, pendientes
          // - Mostrar progreso general de la rutina (%)
          // URL: /src/public/presentationLayer/videos/demo-colegiado-citas-rutinas.mp4
          media: { type: "video", src: "videos/demo-colegiado-citas-rutinas.mp4", caption: "Video: Experiencia del Colegiado", fullscreen: true }
        },
        {
          seconds: 30,
          title: "Control de acceso",
          subtitle: "Validar código, carnet, colegiatura, suspensión, cita del día.",
          components: [
            {
              type: "rules",
              items: [
                { title: "Validar Código", text: "Sistema escanea o valida código de colegiado." },
                { title: "Marcar Carnet", text: "Registra presentación del carnet físico." },
                { tone: "priority", title: "Revisar Estado", text: "Colegiatura, datos, suspensión temporal, y cita agendada del día." },
                { title: "Check-in", text: "Si no valida a tiempo, la cita puede marcarse ausente automáticamente." }
              ]
            }
          ],
          // VIDEO 6: DEMOSTRACIÓN - CONTROL DE ACCESO
          // Contenido del video:
          // - Acceso a módulo de Control de Acceso (recepcionista/vigilante)
          // - Validar código de colegiado: ingresar o escanear QR
          // - Mostrar información del colegiado: nombre, foto
          // - Marcar carnet presentado (checkbox)
          // - Revisar estado: estado de colegiatura, datos personales, suspensión temporal, cita del día
          // - Caso 1: Colegiado con todo en orden → acceso permitido
          // - Caso 2: Colegiado suspendido → mostrar mensaje de acceso denegado
          // - Caso 3: Colegiado sin cita del día → mostrar advertencia
          // - Mostrar check-in automático y marcación de asistencia
          // URL: /src/public/presentationLayer/videos/demo-control-acceso.mp4
          media: { type: "video", src: "videos/demo-control-acceso.mp4", caption: "Video: Control de Acceso al Gimnasio", fullscreen: true }
        }
      ]
    },
    {
      id: "resultados",
      title: "Resultados",
      seconds: 60,
      slides: [
        {
          seconds: 30,
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
      seconds: 60,
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
          seconds: 30,
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
