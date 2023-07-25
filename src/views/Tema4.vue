<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Controles operacionales
    .row.justify-content-center(data-aos="fade-right")
      .col-12
        figure
          img(src='@/assets/curso/tema4/img1.png',style="width: 1250px", alt='').m-auto
      .col-lg-10.bg-p1
        .p-4
          p.mb-0 Algunos procesos utilizados para el tratamiento de los lodos tienen como consecuencia la generación de aspectos ambientales, como el gas y la producción de olor, para gestionar adecuadamente los aspectos generados por los procesos de tratamiento de lodos y controlar sus impactos, es importante implementar controles operacionales efectivos.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-botones
      h2 4.1 Gases
    p.mb-5(data-aos="fade-right") En fases de digestión anaerobia del lodo, suelen producirse gases con una composición volumétrica de aproximadamente 65 - 70 % metano (CH4), 25 a 30 % dióxido de carbono (CO2) y muy pequeñas cantidades de nitrógeno, hidrógeno, sulfuro de hidrógeno y algunos otros gases.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ello, se debe establecer un programa de control y manejo de estos gases, que contemple todas las actividades requeridas para hacer una gestión de este subproducto; una opción viable es usarlo como combustible para calderas y motores de combustión interna, que son útiles para el bombeo de agua residual, la generación de electricidad, entre otros.
    Separador
    #t_4_2
    .titulo-segundo.color-acento-botones
      h2 4.2 Olores
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p El contenido orgánico y de patógenos en el lodo puede originar problemas de olores y atraer vectores (moscas, mosquitos y roedores) a los lugares de aplicación o de almacenamiento. Los patógenos (bacterias, virus, protozoos y huevos de gusanos parásitos) se concentran en el lodo y pueden propagar enfermedades, en el caso que exista contacto con el hombre. Para cumplir los límites planteados por la EPA (PART 503 de 1994), el contenido en materia orgánica y patógena se debe reducir considerablemente, mediante procesos de tratamiento.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Para ello se debe incluir también un programa de manejo ambiental de vectores, al igual que establecer controles operacionales durante la ejecución de los tratamientos al lodo, que garantice que se logra estabilizar el contenido orgánico y de patógenos en el mismo.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img3.png',style="width: 550px", alt='').m-auto
    p.mb-5(data-aos="fade-down") La importancia del manejo ambiental de los olores producidos es dada para dar cumplimiento a la base normativa, en este caso la Resolución 1541 de 2013, o la que la modifique o derogue, la cual establece niveles permisibles de calidad de aire o de inmisión, y el procedimiento para la evaluación de actividades que generan olores ofensivos.
    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Resolución 1541 del 12 de noviembre 2013
                  p.text-small Para ampliar la información, se invita a leer la “Resolución 1541 del 12 de noviembre 2013”, desde el capítulo III: niveles permisibles de calidad del aire, la cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo3.pdf')" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-file-download(style="color: #12263F !important")

</template>

<script>
export default {
  name: 'Tema4',
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
