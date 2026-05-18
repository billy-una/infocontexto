export const presentationConfig = {
  totalSeconds: 420,
  slideWarningSeconds: 10,
  pages: [
    {
      id: "presentacion",
      title: "Presentación",
      seconds: 50,
      slides: [
        {
          seconds: 25,
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
          seconds: 25,
          title: "Alcance De La Demo",
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
      seconds: 70,
      slides: [
        {
          seconds: 35,
          title: "Agenda Con Reglas Operativas",
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
          seconds: 35,
          title: "Familiares, Prioridad Y Hora Pico",
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
      seconds: 170,
      slides: [
        {
          seconds: 35,
          title: "Admin: Entrenadores Y Bloques",
          subtitle: "Primero se preparan los recursos base de la agenda.",
          components: [
            {
              type: "rules",
              items: [
                { title: "CRUD entrenadores", text: "Registrar, consultar, editar y eliminar instructores." },
                { title: "CRUD horarios", text: "Crear bloques con fecha, hora, entrenador, tipo y capacidad." },
                { title: "Validación", text: "No se aceptan horarios solapados para el mismo entrenador." }
              ]
            }
          ],
          media: { type: "image", src: "assets/visual-horarios.png", caption: "Acción: abrir Entrenadores y Horarios" }
        },
        {
          seconds: 35,
          title: "Admin: Citas",
          subtitle: "La agenda aplica reglas por tipo de cita, bloque y beneficiario.",
          components: [
            {
              type: "rules",
              items: [
                { title: "Tipos", text: "Cambio de rutina, entrenamiento regular y primera vez." },
                { tone: "family", title: "Beneficiario", text: "Titular o familiar, con pertenencia validada." },
                { tone: "peak", title: "Restricción", text: "Hora pico bloquea familiares y la capacidad se respeta." }
              ]
            }
          ],
          media: { type: "image", src: "assets/visual-citas.png", caption: "Acción: crear cita y cambiar beneficiario a familiar" }
        },
        {
          seconds: 35,
          title: "Admin: Ejercicios Y Rutinas",
          subtitle: "El catálogo de ejercicios alimenta rutinas de 8 semanas.",
          components: [
            {
              type: "rules",
              items: [
                { title: "Ejercicios", text: "Nombre, grupo muscular, dificultad, máquina y evidencia." },
                { tone: "priority", title: "Rutina", text: "Objetivo físico, fecha inicial, ejercicios por día y progresión." },
                { title: "Vigencia", text: "Cada rutina dura 8 semanas y no puede solaparse con otra activa." }
              ]
            }
          ],
          media: { type: "image", src: "assets/visual-rutinas.png", caption: "Acción: mostrar rutina con ejercicios y fechas" }
        },
        {
          seconds: 35,
          title: "Colegiado: Citas Y Cuestionario",
          subtitle: "El colegiado opera con una interfaz más simple, pero con las mismas reglas.",
          components: [
            {
              type: "rules",
              items: [
                { tone: "family", title: "Mis citas", text: "Crear, consultar, editar o cancelar citas propias." },
                { title: "Cuestionario", text: "Registra salud, lesiones, medicamentos, sueño, estrés y contacto." },
                { tone: "priority", title: "Vigencia", text: "El cuestionario dura 6 meses: pendiente, vigente, próximo a vencer o vencido." }
              ]
            }
          ],
          media: { type: "image", src: "assets/visual-cuestionario.png", caption: "Acción: abrir Mis citas y Cuestionario de salud" }
        },
        {
          seconds: 30,
          title: "Colegiado: Rutinas Y Control De Acceso",
          subtitle: "El cierre conecta planificación, progreso e ingreso físico al gimnasio.",
          components: [
            {
              type: "rules",
              items: [
                { title: "Mis rutinas", text: "Ver ejercicios asignados y marcar progreso por fecha." },
                { tone: "peak", title: "Acceso", text: "Recepción valida colegiatura, datos, carnet, suspensión y cita del día." },
                { title: "Ausencia", text: "Si no valida check-in a tiempo, la cita puede marcarse ausente." }
              ]
            }
          ],
          media: { type: "image", src: "assets/visual-acceso.png", caption: "Acción: validar código en Control de acceso" }
        }
      ]
    },
    {
      id: "resultados",
      title: "Resultados",
      seconds: 80,
      slides: [
        {
          seconds: 40,
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
          seconds: 40,
          title: "Impacto En La Operación",
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
      seconds: 50,
      slides: [
        {
          seconds: 25,
          title: "Puntos Para Validar",
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
          seconds: 25,
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
