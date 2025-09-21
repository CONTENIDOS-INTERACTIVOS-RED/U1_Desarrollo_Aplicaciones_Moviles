export default {
  tema4: {
    tema: '4. Ciclo de vida de una aplicación móvil',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre el desarrollo de aplicaciones móviles, plataformas y herramientas.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es la principal diferencia entre una aplicación nativa y una multiplataforma?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto:
              'Las aplicaciones nativas funcionan solo en sistemas operativos de escritorio.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Las aplicaciones multiplataforma se desarrollan con lenguajes exclusivos de Apple.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Las aplicaciones nativas están diseñadas específicamente para un sistema operativo.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto:
              'Las aplicaciones multiplataforma no requieren conexión a internet.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las aplicaciones nativas están diseñadas específicamente para un sistema operativo.',
        mensaje_incorrecto:
          'Incorrecto. Las aplicaciones nativas están diseñadas específicamente para un sistema operativo.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta es comúnmente utilizada para emular dispositivos móviles durante el desarrollo?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Visual Studio Code',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Android Emulator',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Notepad++',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Adobe Illustrator',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Android Emulator es comúnmente utilizado para emular dispositivos móviles.',
        mensaje_incorrecto:
          'Incorrecto. Android Emulator es comúnmente utilizado para emular dispositivos móviles.',
      },
      {
        id: 3,
        texto:
          '¿Qué componente contiene las herramientas necesarias para compilar y ejecutar una app móvil en Android?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'JDK',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'SDK',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'IDE',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'API',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El SDK contiene las herramientas necesarias para compilar y ejecutar apps en Android.',
        mensaje_incorrecto:
          'Incorrecto. El SDK contiene las herramientas necesarias para compilar y ejecutar apps en Android.',
      },
      {
        id: 4,
        texto:
          '¿Qué plataforma permite desarrollar apps para iOS usando el lenguaje Swift?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Android Studio',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Xcode',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Eclipse',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Visual Studio',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Xcode es la plataforma que permite desarrollar apps para iOS usando Swift.',
        mensaje_incorrecto:
          'Incorrecto. Xcode es la plataforma que permite desarrollar apps para iOS usando Swift.',
      },
      {
        id: 5,
        texto:
          '¿Cuál de las siguientes afirmaciones es verdadera sobre el ciclo de vida de una aplicación móvil?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Las apps móviles no requieren gestión de estados.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'El ciclo de vida solo aplica a apps en segundo plano.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'El ciclo de vida permite controlar cómo se comporta una app al iniciarse, pausarse o cerrarse.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Solo las apps iOS tienen ciclo de vida.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El ciclo de vida permite controlar cómo se comporta una app al iniciarse, pausarse o cerrarse.',
        mensaje_incorrecto:
          'Incorrecto. El ciclo de vida permite controlar cómo se comporta una app al iniciarse, pausarse o cerrarse.',
      },
    ],
  },
}
