<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img1.png',style="width: 450px", alt='Texto que describa la imagen').m-auto
      .col-lg-7(data-aos="fade-left")
        .cajon.color-primario.p-4
          p Le damos la bienvenida al componente formativo denominado "#[b Evacuación de lodos]". En la actualidad, el incremento de un sinnúmero de actividades industriales ha contribuido a que el uso del agua se realice en una forma indiscriminada, sin pensar que esto aumenta los caudales de vertimiento hacia las fuentes hídricas tanto superficiales como subterráneas, y contribuye a la contaminación del medio. Es por esta razón que los denominados lodos son el resultado o el residuo de complejos tratamientos de agua, y en algunas ocasiones, arrojados directamente al suelo, a los ríos o dispuestos incontroladamente en botaderos de basuras o en rellenos sanitarios. Lo invitamos a aprovechar el contenido y a explorar las actividades y recursos que se disponen para su aprendizaje.
          p.mb-0 #[b Éxitos]
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
