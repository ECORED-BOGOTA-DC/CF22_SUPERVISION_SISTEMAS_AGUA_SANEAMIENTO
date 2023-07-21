export default {
  global: {
    componenteFormativo: 'Evacuación de lodos',
    descripcionCurso:
      'Un elemento generado en los procesos de tratamiento de agua residual son los lodos, los cuales deben ser tratados y manipulados bajo condiciones técnicas para garantizar que sus propiedades fisicoquímicas y microbiológicas no se conviertan en otra fuente de impacto ambiental, en este componente se analiza desde la tipología de lodos hasta la gestión integral que se les puede hacer para disminuir su impacto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo de lodos en la PTAR',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sólidos del agua residual',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Lodos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables a considerar en el manejo de los lodos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Balance de masa del lodo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Balance de masa del sólido',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Humedad de los lodos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Determinación de volumen de lodo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Características de humedad y densidad relativa del lodo',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Producción de lodos',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Índice Volumétrico de Lodos (IVL)',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo:
              'Tiempo de Retención de Sólidos (TRS) o Tiempo de Residencia Celular (TRC)',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Tasa de purga de lodos',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Indicadores visuales de los lodos',
            hash: 't_2_10',
          },
          {
            numero: '2.11',
            titulo: 'Flujo de lodos',
            hash: 't_2_11',
          },
          {
            numero: '2.12',
            titulo: 'Uso de válvulas',
            hash: 't_2_12',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tratamiento de los lodos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concentración o espesamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Digestión',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Acondicionamiento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Desecación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Secado',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Incineración',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Disposición',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Controles operacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Gases',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Olores',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ensayos de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Muestreo de lodos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Caracterización de los lodos',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Variables a considerar en el manejo de los lodos',
      referencia:
        'Calderón, C. (2004). <i>Operación de plantas de lodos activados</i>.',
      tipo: 'Documento',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/018834/MEMORIAS2004/CapituloII/7OperaciondeplantasdelodosactivadosCesarCalderon.pdf',
    },
    {
      tema: 'Variables a considerar en el manejo de los lodos',
      referencia:
        'Decreto 1076 de 2015. [Presidencia de la República de Colombia]. <i>Esta versión incorpora las modificaciones introducidas al Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible a partir de la fecha de su expedición. 26 de mayo de 2015</i>.',
      tipo: 'Normatividad',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      tema: 'Manejo de lodos en la PTAR',
      referencia:
        'Decreto 1287 de 2014. [Ministerio de Vivienda, Ciudad y Territorio]. <i>Por el cual se establecen criterios para el uso de los biosólidos generados en plantas de tratamiento de aguas residuales municipales. 10 de julio de 2014</i>.',
      tipo: 'Normatividad',
      link:
        'http://wsp.presidencia.gov.co/Normativa/Decretos/2014/Documents/JULIO/10/DECRETO%201287%20DEL%2010%20DE%20JULIO%20DE%202014.pdf',
    },
    {
      tema: 'Controles operacionales',
      referencia:
        'Decreto 4741  de 2005. [Presidencia de la República de Colombia]. <i>Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. 30 diciembre de 2005</i>.',
      tipo: 'Normatividad',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=18718',
    },
    {
      tema: 'Controles operacionales',
      referencia:
        'Resolución 1541 de2013. [Ministerio de Ambiente y Desarrollo Sostenible]. <i>Por la cual se establecen los niveles permisibles de calidad del aire o de inmisión, el procedimiento para la evaluación de actividades que generan olores ofensivos y se dictan otras disposiciones. 12 de noviembre 2013</i>.',
      tipo: 'Normatividad',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-1541-de-2013.pdf',
    },
    {
      tema: 'Manejo de lodos en la PTAR',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2018. <i>Práctica de laboratorio de extracción y caracterización de lodos. Centro de gestión industrial (CGI)</i>.',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1KrXT1Cyrd5txhc5-Ejv07cnNUywxccMS/view?usp=sharing',
    },
    {
      tema: 'Manejo de lodos en la PTAR',
      referencia: 'TvAgro. (2015). <i>Tratamiento de Aguas Residuales</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ktxKQC4FWc8',
    },
  ],
  glosario: [
    {
      termino: 'Aguas residuales municipales',
      significado:
        'son las aguas vertidas, recolectadas y transportadas por el sistema de alcantarillado público, compuestas por las aguas residuales domésticas y las aguas no domésticas (Ministerio de Desarrollo Económico, 2000). ',
    },
    {
      termino: 'Ambiente aerobio',
      significado:
        'proceso que requiere o no es destruido por la presencia de oxígeno (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Análisis',
      significado:
        'examen del agua, agua residual o lodos, efectuado por un laboratorio (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Carga orgánica',
      significado:
        'producto de la concentración media de DBO, por el caudal medio determinado en el mismo sitio; se expresa en kilogramos por día (kg/d) (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Estabilización de lodos',
      significado:
        'proceso que comprende los tratamientos destinados a controlar la degradación biológica, la atracción de vectores y la patogenicidad de los lodos generados en las plantas de tratamiento de aguas residuales municipales, acondicionados para su uso o disposición final (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Demanda Bioquímica de Oxígeno (DBO) o Demanda de oxígeno',
      significado:
        'cantidad de oxígeno usado en la estabilización de la materia orgánica carbonácea y nitrogenada, por acción de los microorganismos en condiciones de tiempo y temperatura especificados (generalmente cinco días y 20 ºC). Mide indirectamente el contenido de materia orgánica biodegradable (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Demanda Química de Oxígeno (DQO)',
      significado:
        'medida de la cantidad de oxígeno requerido para oxidación química de la materia orgánica del agua residual, usando como oxidantes sales inorgánicas de permanganato o dicromato en un ambiente ácido y a altas temperaturas (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Edad de lodo',
      significado:
        'tiempo medio de residencia celular en el tanque de aireación (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Efluente',
      significado:
        'líquido que sale de un proceso de tratamiento (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Lodos activados',
      significado:
        'procesos de tratamiento biológico de aguas residuales en ambiente químico aerobio, donde las aguas residuales son aireadas en un tanque que contiene una alta concentración de microorganismos degradadores. Esta alta concentración de microorganismos se logra con un sedimentador que retiene los flóculos biológicos y los retorna al tanque aireado (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Metales pesados',
      significado:
        'son elementos tóxicos que tienen un peso molecular relativamente alto. Usualmente tienen una densidad superior a 5,0 g/cm3 por ejemplo, plomo, plata, mercurio, cadmio, cobalto, cobre, hierro, molibdeno, níquel, zinc (Ministerio de desarrollo económico, 2000).',
    },
  ],
  referencias: [
    {
      referencia:
        'Calderón, C. (2004). <i>Operación de plantas de lodos activados</i>. ',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/018834/MEMORIAS2004/CapituloII/7OperaciondeplantasdelodosactivadosCesarCalderon.pdf',
    },
    {
      referencia:
        'Decreto 1076 de 2015. [Presidencia de la República de Colombia]. Por medio del cual se expide el Decreto único 26 de mayo de 2015. ',
      link: '',
    },
    {
      referencia:
        'Decreto 1287 de 2014. [Ministerio de Vivienda, Ciudad y Territorio]. Por el cual se establecen criterios para el uso de los biosólidos generados en plantas de tratamiento de aguas residuales municipales. 10 de julio de 2014. ',
      link: '',
    },
    {
      referencia:
        'Decreto 4741 de 2005. [Presidencia de la República de Colombia]. Por el cual se reglamenta parcialmente la prevención y el manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. 30 diciembre de 2005. ',
      link: '',
    },
    {
      referencia:
        'Lozano, W. (2012). <i>Diseño de plantas de tratamiento de aguas residuales</i>. Universidad Piloto de Colombia. ',
      link:
        'https://www.researchgate.net/publication/298354134_Diseno_de_Plantas_de_Tratamiento_de_Aguas_Residuales',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2000). <i>Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000</i>. Título - E, tratamiento de aguas residuales. Dirección de agua potable y saneamiento básico. ',
      link: '',
    },
    {
      referencia:
        'Resolución 1541 de 2013. [Ministerio de Ambiente y Desarrollo Sostenible].Por la cual se establecen los niveles permisibles de calidad del aire o de inmisión, el procedimiento para la evaluación de actividades que generan olores ofensivos y se dictan otras disposiciones. 12 de noviembre de 2013. ',
      link: '',
    },
    {
      referencia:
        'Romero. (2010). <i>Tratamiento de aguas residuales</i>. Editorial Escuela Colombiana de Ingeniería. ISBN: 958-8060-13-3. [Figura]. p.850.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2018. <i>Práctica de laboratorio de extracción y caracterización de lodos</i>. Centro de gestión industrial (CGI). ',
      link: '',
    },
    {
      referencia:
        'Valdez, E. y Vázquez A. (s.f.).  <i>Ingeniería de los sistemas de tratamiento y disposición de aguas residuales</i>. ',
      link:
        'http://siar.minam.gob.pe/puno/documentos/ingenieria-sistemas-tratamiento-disposicion-aguas-residuales',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora ambiental',
          centro: 'Centro de gestión industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina castillo',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Adriana Lozano Zapata',
          cargo: 'Correctora de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzáte Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseñador web',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
