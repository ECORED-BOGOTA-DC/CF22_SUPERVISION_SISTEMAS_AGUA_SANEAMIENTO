<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Ensayos de laboratorio
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img1.png',style="width: 550px", alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        p Un elemento importante para caracterizar los lodos son los ensayos de laboratorio, los cuales permiten caracterizar sus propiedades para poder identificar cuál es la mejor estrategia para acondicionarlos y tratarlos, de acuerdo con lo establecido en el Standard Methods. 
        p Estas prácticas o ensayos suelen tomar más de 10 horas de elaboración, luego es importante siempre tener el tiempo suficiente y los elementos necesarios para garantizar la veracidad de los resultados.
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Práctica de laboratorio
                  p.text-small Para visualizar un ejemplo de práctica de laboratorio, de extracción y caracterización de lodo, se invita a consultar el siguiente material.
                .col-sm-auto
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo4.pdf')" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-file-download(style="color: #12263F !important")
    Separador
    #t_5_1
    .titulo-segundo.color-acento-botones
      h2 5.1 Muestreo de lodos
    p(data-aos="fade-right") La base normativa que brinda las orientaciones para realizar el muestreo es la Norma Técnica Colombiana (NTC) 5667 – 13, que se denomina Guía para el muestreo de lodos de aguas residuales y plantas de tratamiento de aguas. A manera general, se pueden resaltar las siguientes acciones en el muestreo de lodos:
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Antes de realizar el muestreo se debe revisar muy detalladamente el acceso al punto de muestreo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 El sentido práctico de instalar y mantener equipo automático, si es apropiado.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Definir el tipo de muestra (compuesta o aleatoria).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Establecer el tipo de muestreo (continuo, intermitente, relacionado con el flujo).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Identificar el tamaño de la muestra (si son lodos líquidos o una torta de lodos).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Establecer el almacenamiento, preservación y manipulación: los métodos de muestreo pueden depender del tiempo, en términos de la técnica analítica por usar (por ejemplo, cambio de pH con el tiempo), luego la veracidad dependerá de las tres variables mencionadas, las cuales incluyen temas relacionados con:
          li.d-flex
            ul
              li 
                i.far.fa-dot-circle(style="color: #4DB1F0")
                | Recipientes y preservación de muestras.
              li 
                i.far.fa-dot-circle(style="color: #4DB1F0")
                | Almacenamiento.
              li 
                i.far.fa-dot-circle(style="color: #4DB1F0")
                | Reducción del tamaño de la muestra (cuarteo de la muestra).
              li 
                i.far.fa-dot-circle(style="color: #4DB1F0")
                | Seguridad.
              li 
                i.far.fa-dot-circle(style="color: #4DB1F0")
                | Presentación de informes.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img2.png',style="width: 350px", alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 NTC 5667-13: 1998
                  p.text-small Para ampliar la información acerca de los procedimientos para el muestreo de lodos,  se recomienda consultar la norma técnica colombiana NTC 5667-13: 1998.
                .col-sm-auto
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo5.pdf')" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-file-download(style="color: #12263F !important")
    p.mb-5(data-aos="fade-right") En el caso de un plan de lodos activados, para realizar un seguimiento cotidiano del desempeño de la misma se recomienda realizar muestreos en diferentes puntos para identificar indicadores analíticos y así tomar decisiones de operación. De acuerdo con Calderón (2004), en su documento Operación de plantas de lodos activados, se recomiendan los siguientes puntos de muestreo en una planta usual de lodos activados (ver figura):
    .row.bg-c9.mb-5
      .col-12.px-5(data-aos="fade-right")
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Figura 12]. Puntos de muestreo y parámetros a medir
            figure
              img(src='@/assets/curso/tema5/img1.svg',style="width: 1050px", alt='Muestra esquema de muestreo y parámetros a medir en una planta de lodos donde interviene un afluente, un tanque de aeración, unas líneas de conexión, un sedimentador, un efluente y termina con líneas de recirculación y purga.').m-auto
              figcaption.text-center.mt-3 Nota. Operación de plantas de lodos activados. Calderón (2004).
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Importante
              p Para ampliar la información sobre indicadores visuales y analíticos, al igual que los posibles problemas que se pueden presentar en una planta de lodos activados, se recomienda el documento #[i.txt-c1 “Operación de plantas de lodos activados”] el cual se encuentra en el material complementario.
    Separador
    #t_5_2
    .titulo-segundo.color-acento-botones
      h2 5.2 Caracterización de los lodos
    p(data-aos="fade-right") En los ensayos de laboratorio se debe buscar la caracterización de los siguientes parámetros en los lodos, como mínimo:
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img3.png',style="width: 450px", alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Sólidos suspendidos (SST).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Sólidos suspendidos volátiles (SSV).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Sólidos totales (ST).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Oxígeno disuelto (OD).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Nitrógeno total Kjeldahl.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Fósforo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Metales.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
