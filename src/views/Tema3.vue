<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tratamiento de los lodos
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12
        figure
          img(src='@/assets/curso/tema3/img1.png',style="width: 1250px", alt='Texto que describa la imagen').m-auto
      .col-lg-10.bg-p1
        .p-4
          p.mb-0 Existen diferentes procedimientos para hacer un tratamiento adecuado de los lodos, su uso depende de condiciones técnicas y espacio. A continuación, se presenta un diagrama con algunos de los procesos más representativos (ver figura 8):
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 8]. Principales procesos por fase tratamiento de lodo
        figure.mb-5
          img(src='@/assets/curso/tema3/img1.svg',style="width: 1050px", alt='Texto que describa la imagen').m-auto
          figcaption.text-center.mt-3 Nota. Tratamiento de aguas residuales. Romero. (2010).
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img2.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
      .col-lg-8(data-aos="fade-left")
        p Todos los niveles de complejidad de manejo de los lodos de aguas residuales van enfocados a hacer un tratamiento eficiente, para ello siempre se aconseja conocer las siguientes variables antes de establecer el sistema o procesos a usar:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Balance de masa de los procesos de tratamiento de agua.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Balance de masa del tren de lodos.
        p #[b Además de eso, tener en cuenta siempre las consideraciones pertinentes: ]
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Los lodos no deben descargarse a cuerpos de agua superficiales o subterráneos.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Los lodos primarios deben estabilizarse.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Se debe establecer un programa de control de olores.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Se debe establecer un programa de control de vectores.
    p(data-aos="fade-down") Es importante aclarar que, aunque cada tratamiento establecido para los lodos se realizara de acuerdo con las características del mismo, el proceso convencional lleva a cabo las siguientes etapas:
    Separador
    #t_3_1
    .titulo-segundo.color-acento-botones
      h2 3.1 Concentración o espesamiento
    p.mb-5(data-aos="fade-right") El espesamiento se conoce como el proceso de separación y tiene como objetivo separar las fases líquida y sólida utilizando la diferencia de densidades. Los equipos mencionados, como el desarenador, sedimentador, espesadores mecánicos y espesadores por flotación son utilizados para lograr esta separación. Se invita a ver el siguiente video.
    .row.bg-c9
      .col-12.px-5(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-10
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_3_2
    .titulo-segundo.color-acento-botones
      h2 3.2 Digestión
    p.mb-5(data-aos="fade-right") Los lodos producidos en el tratamiento de aguas residuales están compuestos en gran medida de materia orgánica que puede empezar procesos de descomposición; debido a esto, la obtención de compuestos más estables se debe realizar a través de procesos de oxidación, al tiempo que se eliminan los microorganismos patógenos que pueda presentar el lodo crudo. Existen principalmente tres tratamientos para realizar la digestión, entre los que se encuentran:
    .row.bg-c1
      .col-12(data-aos="fade-down")
        .p-5
          SlyderB(:datos="datosSlyder")
    Separador
    #t_3_3
    .titulo-segundo.color-acento-botones
      h2 3.3 Acondicionamiento
    p(data-aos="fade-right") En esta etapa se busca el espesado y desaguado del lodo para obtener una mejor concentración de la fase sólida, con mejor consistencia y más homogénea. Se puede realizar de diferentes métodos, como lo son:
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img6.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Acondicionamiento químico")
            .col-12
              p Existen diferentes sustancias que permiten realizar el espesado de los lodos, los más utilizados convencionalmente son los polímeros catiónicos, si el lodo ya ha sido digerido, o los polímeros aniónicos, si es un lodo primario. Sin embargo, el acondicionamiento se puede hacer también con sulfato ferroso, alumbre, cloruro de aluminio, cloruro férrico, entre otros. Finalmente, aunque no es tan común el uso cuando se encuentran pequeñas cantidades de lodo, se puede hacer el acondicionamiento con permanganato de potasio, ya que es un fuerte oxidante.
          .row(numero="2" titulo="Acondicionamiento con calor")
            .col-12
              p Es una práctica que requiere de grandes cantidades de energía, por lo que se utiliza en plantas de tratamiento con bajo caudal o en aquellas donde se ha realizado una digestión anaeróbica con el fin de aprovechar el gas metano generado; el lodo es expuesto a altas temperaturas con el fin de provocar la evaporación del agua y así concentrar la fase sólida.
          .row(numero="3" titulo="Acondicionamiento con congelamiento")
            .col-12
              p Es una técnica poco utilizada, mediante la cual se disminuye la temperatura del lodo, con el fin de aumentar la densidad del líquido presente; requiere un alto gasto energético y elevados costos en el mantenimiento de maquinaría, por lo que no se utiliza a niveles industriales.
    Separador
    #t_3_4
    .titulo-segundo.color-acento-botones
      h2 3.4 Desecación
    p.mb-5(data-aos="fade-right") En estos procesos se busca reducir el porcentaje de agua presente en el lodo con el fin de reducir su volumen y facilitar así su transporte, existen diferentes métodos para realizar este primer paso de deshidratación, entre los cuales se encuentran:
    .row.justify-content-center(data-aos="fade-up")
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img7.png", alt="alt")
          .crd_hover_txt--body1
            h4.mb-3.text-center Filtro prensa
            p.mb-0.text-center Utiliza una correa doble para comprimir el lodo, separando el agua mediante membranas. El agua se drena por gravedad y el sólido se acumula en la membrana como "torta".
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img8.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Filtros al vacío
            p.mb-0.text-center Utilizan un diferencial de presión y un medio poroso (como una membrana o tamiz) para separar el agua y retener los sólidos. Los sólidos concentrados se extraen al retirar el medio poroso del filtro.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img9.png", alt="alt")
          .crd_hover_txt--body1
            h4.mb-3.text-center Centrifugación
            p.mb-0.text-center Se aplica fuerza centrífuga para mover las partículas sólidas a la pared del equipo, una vez tienen contacto por acción de la fricción, reducen su movilidad mientras que se van acumulando.
    Separador
    #t_3_5
    .titulo-segundo.color-acento-botones
      h2 3.5 Secado
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img10.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
      .col-lg-8(data-aos="fade-left")
        p El secado del lodo busca eliminar la mayor cantidad de agua. Los métodos comunes incluyen lechos de secado de arena, donde se aplica el lodo en capas y se deja secar al sol, y el uso de calor a altas temperaturas para evaporar el agua, aunque este último método es menos utilizado debido a su alto consumo energético. A continuación, se dan a conocer algunas definiciones:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[b.txt-c1 Lechos de secado de arena]: es el método más utilizado para plantas pequeñas, de menos de 100 L/s. El lodo se aplica en capas de 20 a 30 cm de altura y se deja secar mediante la acción del sol; al tiempo que se evapora una fracción de agua, la otra parte drena hacia las capas inferiores, donde posteriormente se remueve a través de tuberías.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[b.txt-c1 Uso de calor]: se somete el lodo a altas temperaturas (más de 105 °C) hasta que el agua se evapora, es un procedimiento que consume mucha energía, por lo que no es tan utilizado.
    Separador
    #t_3_6
    .titulo-segundo.color-acento-botones
      h2 3.6 Incineración
    p.mb-5(data-aos="fade-right") Es una técnica que se utiliza cuando no hay espacio suficiente para la disposición de los lodos, es muy restrictivo, debido a que destruye diferentes compuestos orgánicos que pueden ser emitidos a la atmósfera y se pueden presentar incumplimientos, teniendo en cuenta la normatividad ambiental vigente. Normalmente los lodos que son incinerados son crudos desaguados sin estabilizarse; no tiene sentido incinerar los lodos que han sido sometidos a procesos de digestión, debido a que estos tienen una concentración baja de sólidos volátiles, que son precisamente los que suelen dar un mayor poder calorífico. La incineración es un proceso de combustión completa, sin embargo, también se pueden aplicar técnicas tales como la pirólisis donde la materia orgánica se craquea a altas temperaturas, en ausencia de oxígeno, como se puede observar en la siguiente figura.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 9]. Esquema simplificado de un incinerador
        figure
          img(src='@/assets/curso/tema3/img2.svg',style="width: 1050px", alt='Texto que describa la imagen').m-auto
    Separador
    #t_3_7
    .titulo-segundo.color-acento-botones
      h2 3.7 Disposición
    p.mb-5(data-aos="fade-right") Es una técnica utilizada para el almacenamiento final de los lodos para la incorporación a procesos biológicos, o para el aislamiento total en caso de que sean peligrosos. Existen diferentes métodos de disposición, y uno de ellos es la aplicación sobre el suelo y relleno sanitario:
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c10.px-4.py-3
        h3.text-white.mb-0 Aplicación sobre suelo
    .row.mb-5
      .col-lg-8(data-aos="fade-left")
        p Este es uno de los métodos practicados hace muchos años, sin embargo, es solo para biosólidos y no para lodos peligrosos, ya que los primeros suelen contener gran cantidad de materia orgánica, nitrógeno y fósforo, que permite su uso en agricultura y cultivos paisajísticos, por sus propiedades de acondicionador y fertilizante (ver figura 10). 
        p #[b De acuerdo con Romero (2010), se debe tener cuidado con las siguientes variables, si se considera usar esta práctica:]
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Contenido orgánico y de patógenos.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Mezcla de patógenos, parásitos y semillas de los cultivos.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Contenido de nutrientes.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Manejo de olores y humedad.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Contenido de metales pesados y compuestos orgánicos tóxicos.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Determinación de la cantidad apropiada de aplicación del lodo (p.848).
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 10]. Aplicación de lodo sobre suelo
        figure
          img(src='@/assets/curso/tema3/img3.svg',style="width: 1050px", alt='Texto que describa la imagen').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c10.px-4.py-3
        h3.text-white.mb-0 Relleno sanitario
    p(data-aos="fade-right") La disposición en relleno de lodos se puede definir como el enterramiento del lodo, que es el proceso de aplicar el mismo sobre el suelo y se entierra mediante la colocación de una capa de suelo sobre él. Esta alternativa es apropiada cuando se cuenta con el terreno adecuado para tal fin, sin embargo, es bueno aclarar que, en algunos rellenos sanitarios, el lodo compostado y el lodo tratado químicamente, se han usado como material de cobertura; para definir esta alternativa, se debe considerar, de acuerdo con Romero (2010), los siguientes parámetros:
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img11.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
      .col-lg-8(data-aos="fade-left")
        .row
          .col-lg-6.d-none.d-lg-block
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Capacidad del relleno.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Método de construcción.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Preparación del sitio.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Uso del sitio.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Sistema de cobertura.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Cobertura diaria, intermedia y final.
          .col-lg-6.d-none.d-lg-block
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Sistema de recolección de lixiviados.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Control de gas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Control de agua superficial.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Necesidades de transporte.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Cierre del relleno y uso final del sitio.
        .row
          .col-12.d-block.d-lg-none
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Capacidad del relleno.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Método de construcción.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Preparación del sitio.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Uso del sitio.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Sistema de cobertura.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Cobertura diaria, intermedia y final.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Sistema de recolección de lixiviados.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Control de gas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Control de agua superficial.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Necesidades de transporte.
              li.d-flex
                i.fas.fa-check-circle(style="color: #FFA031")
                | 
                p.mb-0 Cierre del relleno y uso final del sitio.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Digestión anaeróbica',
        texto:
          'Se utilizan microorganismos en ausencia de oxígeno para la reducción de sólidos volátiles; normalmente, después de la digestión anaeróbica, estos sólidos se reducen en un 70%, los remanentes quedan con una naturaleza homogénea, estables, con olor a alquitrán, normalmente esta digestión se realiza en dos etapas, la primera con calentamiento y mezcla, donde se produce la mayor cantidad de metano, y la segunda donde se da un asentamiento tranquilo, utilizada principalmente como almacenamiento del lodo digerido.',
        imagen: require('@/assets/curso/tema3/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Digestión aeróbica',
        texto:
          'Este proceso es utilizado principalmente en plantas de tratamiento de aguas residuales que tienen caudales menores a 220 L/s; el objetivo es estabilizar la materia orgánica presente en el lodo crudo. Los microorganismos utilizan oxígeno para el proceso, por lo que es más fácil de operar, no genera malos olores y reduce de mejor forma el contenido de patógenos, sin embargo, este proceso no genera metano, por lo que no se puede hacer un aprovechamiento energético del mismo.',
        imagen: require('@/assets/curso/tema3/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Oxidación húmeda',
        texto:
          'Es un procedimiento que utiliza cal para lograr la estabilización, elimina los agentes patógenos y olores ofensivos mediante la creación de un pH igual a 12. Cuando se realiza este tipo de procedimiento, se debe asegurar que el lodo tenga el suficiente contacto con la cal, por lo que se recomienda que estos se mantengan en reposo por al menos dos horas.',
        imagen: require('@/assets/curso/tema3/img5.png'),
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
