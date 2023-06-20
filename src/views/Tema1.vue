<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo de lodos en las PTAR
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los lodos generados son el Producto del Tratamiento de las Aguas Residuales, por lo que van ligados como una fase final de dicho tratamiento; por lo tanto, se considera importante conocer la normativa distrital y nacional con respecto a vertimientos líquidos, desde la cual se enmarca su origen, hasta las consideraciones técnicas que brinden herramientas para hacer una gestión adecuada de los mismos.
          br
          br
          | A continuación, se brindará una explicación breve de los conceptos y variables necesarios para realizar un manejo ambiental de los lodos.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-botones
      h2 1.1 Sólidos del agua residual
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p Varios de los sistemas implementados en una Planta de Tratamiento de Agua Residual (PTAR), van direccionados a retirar la materia orgánica, que se presenta a menudo en forma de sólidos o compuestos inorgánicos; se incluyen a todos los sólidos de origen generalmente mineral, como las sales minerales, arcillas, lodos, arenas y gravas, y ciertos compuestos como sulfatos, carbonatos, etc., que pueden sufrir algunas transformaciones (fenómenos de óxido-reducción y otros).
        p.mb-0 Si las aguas residuales se vierten sin tratar, los residuos sólidos gruesos (plásticos, restos de alimentos, etc.) y sólidos en suspensión sedimentables (arenas y materia orgánica) presentes, pueden originar sedimentos sobre el fondo, o dar lugar a la acumulación de grandes cantidades de sólidos en la superficie y/o en las orillas de los medios receptores, formando capas de flotantes. Los depósitos de fangos y flotantes no sólo son desagradables a la vista, sino que, además, al contener materia orgánica pueden llegar a provocar el agotamiento del oxígeno disuelto, presente en las aguas, y originar el desprendimiento de malos olores.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img2.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
    .cajon.color-primario.p-4.mb-5
      p.mb-0 De acuerdo con Lozano, W. (2012), en su escrito titulado Diseño de plantas de tratamiento de aguas residuales, estos sólidos pueden ser suspendidos (SS), disueltos (SD), y también pueden ser volátiles (SV), los cuales se presumen orgánicos o fijos (SF), pero suelen ser inorgánicos. Parte de los sólidos suspendidos pueden ser también sedimentables (SSed), esta clasificación se muestra en la Figura 1, así mismo todos ellos se determinan gravimétricamente (por peso).
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 1]
          p.mb-0 Composición de los sólidos totales
        figure.mb-5
          img(src='@/assets/curso/tema1/img1.svg',style="width: 850px", alt='Texto que describa la imagen').m-auto
          figcaption.text-center.mt-3 Nota. Clasificación de los diferentes tipos de materia contenida en agua residual. (Droste, 1997)
        p.text-center #[b Según la composición de los sólidos totales observados en la figura anterior, de acuerdo con el diseño de plantas de tratamiento de aguas residuales, estos sólidos se clasifican en:]
    .row.bg-c1.mb-5
      .col-12
        .p-5
          SlyderB(:datos="datosSlyder")
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img7.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
      .col-lg-8
        p De acuerdo con Valdez, E. y Vázquez A. (s.f.), los sólidos volátiles pueden determinarse sobre la muestra original (sólidos volátiles totales), sobre la fracción suspendida (sólidos suspendidos volátiles) o sobre la fracción filtrada (sólidos disueltos volátiles). La determinación se hace por incineración en una mufla del residuo obtenido en el análisis de los sólidos totales. Cuando se trata de determinar los sólidos suspendidos volátiles, debe añadirse, bien un filtro de vidrio (el cual dará lugar a una pequeña pérdida de peso, que habrá que corregir) o un filtro de acetato de celulosa (no da lugar a cenizas). La fracción volátil se obtiene por diferencia entre el residuo remanente después del secado y el posterior a la incineración. Este último se denomina sólidos fijos o cenizas y constituye una medida aproximada del contenido mineral del agua residual.
        p.mb-0 #[b Algunos ejemplos de sólidos generados en una planta de tratamiento pueden ser:]
    .row.justify-content-center
      .col-10.col-lg-4.bg-c2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img8.png',style="width: 250px", alt='Texto que describa la imagen').m-auto
          p Sólidos gruesos del cribado: material grueso retenido sobre la rejilla.
      .col-10.col-lg-4.bg-c3
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img9.png',style="width: 250px", alt='Texto que describa la imagen').m-auto
          p Arenas y materiales del desarenador: arenas y sólidos pesados de sedimentación rápida, pueden tener contenido de grasas y materia orgánica.
      .col-10.col-lg-4.bg-c4
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img10.png',style="width: 250px", alt='Texto que describa la imagen').m-auto
          p Espuma y grasa: material flotante desnatado de tanques de sedimentación o separadores de grasa.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-botones
      h2 1.2 Lodos
    p.mb-5 De acuerdo con el Decreto 1076 de 2015, el lodo es la suspensión de un sólido en un líquido proveniente del tratamiento de aguas residuales.  El lodo es usualmente una mezcla homogénea entre una fracción de sólidos y agua (ver figura 2).
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 2]
          p.mb-0 Representación del lodo y su composición
        figure.mb-5
          img(src='@/assets/curso/tema1/img11.png',style="width: 850px", alt='Texto que describa la imagen').m-auto
          figcaption.text-center.mt-3 Fuente. SENA (2022).
    .row.mb-5
      .col-12.bg-c5
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img12.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
          .col-lg-8
            p.txt-c1.mb-0 #[b ¿Por qué es importante el manejo de los lodos en una PTAR?]
            p Básicamente, todos los lodos crudos tienen un contenido bajo de sólidos (1 - 6 %), sin embargo, poder hacer la disposición y manejo adecuado del lodo implica un problema, y es el gran volumen de lodo por contenido de agua; luego, concentrar los sólidos mediante la máxima remoción posible de agua y reducir su contenido orgánico es elemental.
            p.txt-c1.mb-0 #[b ¿De dónde provienen los lodos?]
            p De manera general se puede decir que existen dos lodos, de acuerdo con su lugar de procedencia (ver figura 3):
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 3]
          p.mb-0 Tipos de lodos de acuerdo con el tratamiento de agua
        figure.mb-5
          img(src='@/assets/curso/tema1/img3.svg',style="width: 1150px", alt='Texto que describa la imagen').m-auto
          figcaption.text-center.mt-3 Fuente. SENA (2022).
        p.text-center #[b Sin embargo, existen otros tipos de clasificación más sencilla y poco descriptiva respecto al lodo generado, teniendo en cuenta:]
    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="1" titulo="Clasificación según el origen del efluente")
        .col-lg-6.mb-4.mb-lg-0
          figure.mb-4
            img(src='@/assets/curso/tema1/img13.png',style="width: 550px", alt='Texto que describa la imagen').m-auto
          p.mb-0 #[b.txt-c1 Lodos urbanos:] provenientes de aguas residuales domésticas o urbanas, producidas por actividades comerciales, humanas e industriales (que tienen su propia PTAR), que no generan grandes concentraciones de elementos contaminantes.
        .col-lg-6
          figure.mb-4
            img(src='@/assets/curso/tema1/img14.png',style="width: 550px", alt='Texto que describa la imagen').m-auto
          p.mb-0 #[b.txt-c1 Lodos industriales:] se genera a partir de aguas residuales procedentes de actividades industriales, ejemplo, industrias alimenticias, papeleras, industrias de procesamiento y extracción de metales, entre otras; generalmente, este tipo de aguas presenta concentraciones de sustancias tóxicas.
      .row(numero="2" titulo="Clasificación según contenido del agua")
        .col-12
          p.my-4.text-center De acuerdo con la cantidad de agua que se encuentre en el lodo, se pueden clasificar en:
          .row
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-4
                img(src='@/assets/curso/tema1/img15.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodos líquidos:] cuyo contenido en agua es superior al 80%.
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-4
                img(src='@/assets/curso/tema1/img16.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodos plásticos o paleables:] su contenido en agua es inferior al 80%, por lo que pueden ser manejados mediante pala y transportados en camiones de caja abierta.
            .col-lg-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img17.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodos sólidos:] cuyo contenido en agua es inferior al 60%.
      .row(numero="3" titulo="Clasificación según sus compuestos químicos")
        .col-12
          p.my-4.text-center De acuerdo con las características propias del lodo y las variables que lo componen, se podría hablar de lodos tipo:
          .row
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-4
                img(src='@/assets/curso/tema1/img18.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Orgánicos:] alto contenido de compuestos orgánicos.
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-4
                img(src='@/assets/curso/tema1/img19.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Inorgánicos:] alto contenido compuestos inorgánicos.
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-4
                img(src='@/assets/curso/tema1/img20.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodos tóxicos y peligrosos:] lodos que tienen características de peligrosidad.
      .row(numero="4" titulo="Tipos de lodos según fase de tratamiento de agua residual")
        .col-12
          .row.mb-4
            .col-lg-6.mb-4.mb-lg-0
              figure.mb-4
                img(src='@/assets/curso/tema1/img21.png',style="width: 550px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodo primario:] proveniente de la sedimentación de aguas residuales (tratamientos primarios), la cantidad generada suele depender del tiempo de retención y de la carga superficial, ya que proviene de sólidos sedimentables, son de color gris y presentan olor desagradable.
            .col-lg-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img22.png',style="width: 550px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodo secundario:] proveniente del tratamiento biológico de aguas residuales (tratamientos secundarios o biológicos que convierten residuos en biomasa), de color pardo o amarillo, inodoros, suelen contener mucha agua, por lo cual son de difícil deshidratación.
          .row
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-4
                img(src='@/assets/curso/tema1/img23.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodo crudo:] lodo generado en PTAR que no ha sido tratado ni estabilizado y produce olor.
            .col-lg-4.mb-4.mb-lg-0
              figure.mb-4
                img(src='@/assets/curso/tema1/img24.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodos digeridos o mixtos:] provenientes de los dos anteriores, separados o mezclados.
            .col-lg-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img25.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
              p.mb-0 #[b.txt-c1 Lodos terciarios:] provenientes de tratamientos terciarios de aguas residuales.
      .row(numero="5" titulo="Clasificación según contenido del agua")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-4
            img(src='@/assets/curso/tema1/img26.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
          p.mb-0 #[b.txt-c1 Lodos tratados:] proceden de estaciones depuradoras residuales de origen industrial, con presencia de componentes similares a los que presentan las aguas residuales domésticas y con bajas concentraciones de elementos contaminantes.
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-4
            img(src='@/assets/curso/tema1/img27.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
          p.mb-0 #[b.txt-c1 Lodos deshidratados y lodos secados:] tipos de lodos que son sometidos, antes de su uso, a procesos de pérdida de agua mediante técnicas, física, químicas o térmicas.
        .col-lg-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img28.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
          p.mb-0 #[b.txt-c1 Lodos compostados:] ideales para actividades agrícolas, son empleados como abono para plantas, sometidos a procesos de transformación biológica aerobia, posteriormente son fermentados mediante compostaje.
      .row(numero="6" titulo="Biosólidos")
        .col-lg-8.mb-4.mb-lg-0
          p Son el producto resultante de estabilización de la fracción orgánica de lodos generados en el tratamiento de aguas residuales municipales, con características físicas, químicas y microbiológicas que permiten su uso. 
          p.mb-0 No son biosólidos las escorias y cenizas, producto de la oxidación o reducción térmica de lodos, así como residuos que se retiran de equipos e instalaciones de la fase preliminar del tratamiento de aguas residuales, ni los provenientes de dragados o de limpieza de sumideros.   La base normativa que brinda criterios para el uso de los biosólidos es el Decreto 1287 de 2014.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img29.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
      .row(numero="7" titulo="Lodo peligroso")
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 Un lodo que se considera peligroso es aquel en el cual se identifican algunas de las características de peligrosidad descritas en el decreto 4741 de 2005, compilado en el Decreto Único Reglamentario 1076 de 2015, en el cual, se entiende por residuo peligroso, aquel residuo o desecho que por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas, puede causar riesgos, daños o efectos no deseados, directos e indirectos, a la salud humana y el ambiente.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img30.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Caracterización de los biosolidos
                  p.text-small A continuación, se invita a descargar el siguiente documento donde se observa la caracterización, categorización, uso de biosólidos y la tasa anual de aplicación.
                .col-sm-auto
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-file-download(style="color: #12263F !important")
        p.mb-5 #[b Para saber si el lodo que se va a manejar tiene características de peligrosidad, se puede realizar alguna de las siguientes acciones (ver figura 4): ]
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 4]
          p.mb-0 Acciones para identificar la peligrosidad de un lodo
        figure.mb-5
          img(src='@/assets/curso/tema1/img5.svg',style="width: 1250px", alt='Texto que describa la imagen').m-auto
          figcaption.text-center.mt-3 Fuente. SENA (2022).
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Caracterización de los biosolidos
                  p.text-small Luego, su clasificación, caracterización, identificación y presentación de los residuos o desechos peligrosos debe ser bajo el marco normativo, revise el documento a continuación.
                .col-sm-auto
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-file-download(style="color: #12263F !important")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Sólidos suspendidos totales (STT)',
        texto:
          'Suponiendo que un metro cúbico de agua residual pesa aproximadamente 1.000.000 de gramos, contiene alrededor de 500 gramos de sólidos totales; éstos pueden estar en forma suspendida (sst) o en disolución (sdt). Los sólidos totales se determinan evaporando un volumen determinado de muestra y pesando el residuo remanente. Los resultados se expresan en mg/l.',
        imagen: require('@/assets/curso/tema1/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sólidos disueltos (SD)',
        texto:
          'En este caso es la presencia de un sólido (soluto) en un líquido solvente en forma homogénea, no decanta, de los aproximadamente 500 gramos de sólidos totales, la mitad son sólidos disueltos, tales como calcio, sodio y compuestos orgánicos solubles.',
        imagen: require('@/assets/curso/tema1/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sólidos en suspensión (SS)',
        texto:
          'Son pequeñas partículas de sólidos dispersas en el agua, no disueltas y que se pueden decantar, por lo general son sólidos que no pasan a través de una membrana filtrante de un tamaño determinado (0,45 micras). Dentro de los sólidos en suspensión se encuentran los sólidos sedimentables, que se decantan por su propio peso, y los no sedimentables.',
        imagen: require('@/assets/curso/tema1/img5.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sólidos volátiles (SV)',
        texto:
          'De acuerdo con Valdez, E. y Vázquez A. (s.f.), en su documento <i>Ingeniería de los sistemas de tratamiento y disposición de aguas residuales</i>, los sólidos volátiles son aquella fracción que se volatiliza a 550 °C, la concentración de sólidos volátiles se suele considerar como una medida aproximada del contenido de materia orgánica, o en ciertos casos, de las concentraciones de sólidos biológicos tales como bacterias o protozoos.',
        imagen: require('@/assets/curso/tema1/img6.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
