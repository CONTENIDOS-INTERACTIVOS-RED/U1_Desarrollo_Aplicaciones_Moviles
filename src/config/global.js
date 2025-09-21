export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de desarrollo móvil',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plataformas de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Visión general de las plataformas móviles',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Recomendación para el estudiante',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diferencias entre aplicaciones nativas y multiplataforma',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aplicaciones nativas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aplicaciones multiplataforma',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Comparación técnica detallada, consideraciones y ejemplos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'IDEs - Entornos de Desarrollo Integrados',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'SDKs - Kits de Desarrollo de Software',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Emuladores y simuladores',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ciclo de vida de una aplicación móvil',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Robledo Sacristán, C. (2013). Programación en Android: ( ed.). Ministerio de Educación y Formación Profesional de España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49348',
    },
    {
      referencia:
        'Montero Miguel, R. (2014). Desarrollo de aplicaciones para Android: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106426',
    },
    {
      referencia:
        'Robledo Sacristán, C. (2013). Programación en Android: ( ed.). Ministerio de Educación y Formación Profesional de España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49348',
    },
    {
      referencia:
        'Montero Miguel, R. (2014). Desarrollo de aplicaciones para Android: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106426',
    },
    {
      referencia:
        'Robledo Sacristán, C. (2013). Programación en Android: ( ed.). Ministerio de Educación y Formación Profesional de España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49348',
    },
    {
      referencia:
        'Cernuda Menéndez, J. (2015). Creación de juegos y aplicaciones para Android: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/107211',
    },
  ],
  glosario: [
    {
      termino: 'Android',
      significado:
        'Sistema operativo móvil desarrollado por Google, utilizado ampliamente en dispositivos móviles.',
    },
    {
      termino: 'iOS',
      significado:
        'Sistema operativo móvil de Apple, exclusivo para dispositivos como el iPhone y el iPad.',
    },
    {
      termino: 'Aplicación nativa',
      significado:
        'Aplicación desarrollada específicamente para una plataforma como Android o iOS.',
    },
    {
      termino: 'Aplicación multiplataforma',
      significado:
        'Aplicación que puede ejecutarse en múltiples plataformas con una sola base de código.',
    },
    {
      termino: 'IDE',
      significado:
        'Entorno de Desarrollo Integrado, herramienta para escribir, compilar y depurar código.',
    },
    {
      termino: 'SDK',
      significado:
        'Kit de Desarrollo de Software que proporciona herramientas para crear aplicaciones para una plataforma específica.',
    },
    {
      termino: 'Emulador',
      significado:
        'Software que simula un dispositivo móvil para pruebas y desarrollo de aplicaciones.',
    },
    {
      termino: 'Depuración',
      significado:
        'Proceso de identificar y corregir errores en el código de una aplicación.',
    },
    {
      termino: 'Compilación',
      significado:
        'Proceso de convertir código fuente en una aplicación ejecutable.',
    },
    {
      termino: 'UI',
      significado:
        'Interfaz de Usuario, parte visual de la aplicación con la que el usuario interactúa.',
    },
    {
      termino: 'UX',
      significado:
        'Experiencia de Usuario, percepción general que tiene el usuario al interactuar con una aplicación.',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'Etapas por las que pasa una aplicación desde su creación hasta su eliminación.',
    },
    {
      termino: 'Instalación',
      significado: 'Proceso de agregar una aplicación a un dispositivo móvil.',
    },
    {
      termino: 'Repositorio',
      significado:
        'Espacio centralizado donde se almacena y gestiona el código fuente de una aplicación.',
    },
    {
      termino: 'Framework',
      significado:
        'Conjunto de herramientas y bibliotecas para desarrollar aplicaciones de manera estructurada.',
    },
    {
      termino: 'Simulador',
      significado:
        'Herramienta que imita el comportamiento de un dispositivo en un entorno de escritorio.',
    },
    {
      termino: 'Responsive',
      significado:
        'Diseño que se adapta automáticamente a diferentes tamaños de pantalla.',
    },
    {
      termino: 'Compilador',
      significado:
        'Programa que traduce código fuente a código máquina ejecutable.',
    },
    {
      termino: 'Hot Reload',
      significado:
        'Función que permite ver cambios en el código en tiempo real sin recompilar toda la app.',
    },
    {
      termino: 'Widget',
      significado:
        'Elemento de interfaz reutilizable usado en frameworks como Flutter para construir interfaces.',
    },
  ],
}
