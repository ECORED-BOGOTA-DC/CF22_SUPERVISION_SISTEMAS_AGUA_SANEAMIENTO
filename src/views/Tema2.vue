<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Variables a considerar en el manejo de los lodos
    .row.justify-content-center(data-aos="fade-right")
      .col-12
        figure
          img(src='@/assets/curso/tema2/img1.png',style="width: 1250px", alt='').m-auto
      .col-lg-10.bg-p1
        .p-4
          p.mb-0 Conocer las características del lodo a tratar es algo importante para definir la forma de manipulación, acondicionamiento, almacenamiento y tratamiento; dentro de las variables más importantes a medir se encuentran los balances de masa, porcentaje de humedad, densidad, entre otros.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-botones
      h2 2.1 Balance de masa del lodo
    p.mb-5(data-aos="fade-right") Teniendo en cuenta que el lodo se encuentra compuesto de una parte de sólidos y otra de agua, se puede inferir que la masa de lodo será igual a la sumatoria de la masa de los sólidos y la masa del agua, como se observa en la siguiente fórmula:
    .row.bg-c6(data-aos="fade-left")
      .col-12.p-5
        .row.align-items-center.justify-content-center.mb-5
          .col-10.col-md-8.col-lg-3.bg-c7.mb-4.mb-lg-0
            .p-4.h-100
              p.text-center.mb-0 m#[sub #[i l]] = m#[sub #[i s]] + m#[sub #[i a]]
              p.text-center.mb-0 m#[sub #[i l]] = masa del lodo
              p.text-center.mb-0 m#[sub #[i s]] = masa del sólido
              p.text-center.mb-0 m#[sub #[i a]] = masa del agua
          .col-10.col-md-8.col-lg.mb-4.mb-lg-0
            p.mb-0 Sin embargo, se podría despejar la fórmula de la siguiente forma:
          .col-10.col-md-8.col-lg-3.bg-c7.mb-4.mb-lg-0
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              .fraction
                span.fup
                  i m #[sub lodo]
                span.bar /
                span.fdn
                  i m #[sub lodo]
              |
              p.mb-0 =
              |
              .fraction
                span.fup
                  i m #[sub agua]
                span.bar /
                span.fdn
                  i m #[sub lodo]
              |
              p.mb-0 =
              |
              .fraction
                span.fup
                  i m #[sub sólidos]
                span.bar /
                span.fdn
                  i m #[sub lodo]
          .col-10.col-md-8.col-lg.mb-4.mb-lg-0
            p.mb-0 Dejando la expresión como:
          .col-10.col-md-8.col-lg-3.bg-c7
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 1 = #[i X#[sub agua]] + #[i X#[sub sólidos]]
        .row
          .col-12
            p.text-center.mb-0 Encontrando el #[b primer condicionante]: el total del lodo estará compuesto de una fracción o porcentaje de humedad + fracción o porcentaje del sólido.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-botones
      h2 2.2 Balance de masa del sólido
    p(data-aos="fade-right") Es importante aclarar que esa porción de sólido que se encuentra en el lodo tiene unas características importantes, y es que está compuesto por sólidos fijos y volátiles.
    p.mb-5(data-aos="fade-right") #[b De acuerdo con la ecuación de masa de sólido:]
    .row.bg-c6(data-aos="fade-left")
      .col-12.p-5
        .row.align-items-center.justify-content-center.mb-5
          .col-10.col-md-8.col-lg-3.bg-c7.mb-4.mb-lg-0
            .p-4.h-100
              p.text-center.mb-0 m#[sub #[i s]] = m#[sub #[i sf]] + m#[sub #[i sv]]
              p.text-center.mb-0 m#[sub #[i s]] = masa de sólidos
              p.text-center.mb-0 m#[sub #[i sf]] = masa de sólidos fijos
              p.text-center.mb-0 m#[sub #[i sv]] = masa de sólidos volátiles
          .col-10.col-md-8.col-lg.mb-4.mb-lg-0
            p.mb-0 Fórmula que se despeja de la siguiente manera:
          .col-10.col-md-8.col-lg-3.bg-c7.mb-4.mb-lg-0
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              .fraction
                span.fup
                  i m #[sub sólido]
                span.bar /
                span.fdn
                  i m #[sub sólido]
              |
              p.mb-0 =
              |
              .fraction
                span.fup
                  i m #[sub sf]
                span.bar /
                span.fdn
                  i m #[sub sólido]
              |
              p.mb-0 +
              |
              .fraction
                span.fup
                  i m #[sub sv]
                span.bar /
                span.fdn
                  i m #[sub sólido]
          .col-10.col-md-8.col-lg.mb-4.mb-lg-0
            p.mb-0 Quedando reducida la expresión a:
          .col-10.col-md-8.col-lg-3.bg-c7
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 1 = #[i X#[sub sólidos fijos]] + #[i X#[sub sólidos volátiles ]]
        .row
          .col-12
            p.text-center.mb-0 Considera #[b el segundo condicionante]: el total de los sólidos estará compuesto de una fracción o porcentaje de sólidos fijos más la fracción o porcentaje de sólidos volátiles.
    Separador
    #t_2_3
    .titulo-segundo.color-acento-botones
      h2 2.3 Humedad de los lodos
    p(data-aos="fade-right") Determinar la humedad en lodos es de vital importancia, ya que permite establecer propiedades que estos pueden llegar a tener, para establecer estrategias en el transporte o para el almacenamiento. La humedad en los lodos se mide a través de una técnica llamada gravimetría, la cual consiste en medir la masa del cuerpo cuando está húmedo, luego iniciar un proceso de secado y finalmente, la diferencia entre el peso inicial y el final será la cantidad de agua que tenía.
    p.mb-5(data-aos="fade-right") #[b La fórmula para calcular el % de humedad es:]
    .row.bg-c6(data-aos="fade-left")
      .col-12.p-5
        .row.align-items-center.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.mb-4.mb-lg-0
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i %H] =
              |
              .fraction
                span.fup
                  i m#[sub lodo] - m#[sub sólido]
                span.bar /
                span.fdn
                  i m#[sub lodo]
              |
              p.mb-0 x100
          .col-10.col-md-8.col-lg.mb-4.mb-lg-0
            p.mb-0 Sin embargo, cuando este porcentaje es hallado según pruebas de laboratorio, la fórmula a aplicar es:
          .col-10.col-md-8.col-lg-3.bg-c7.mb-4.mb-lg-0
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i %H] =
              |
              .fraction
                span.fup
                  i ( P#[sub mh] - P#[sub c] ) - ( P#[sub ms] - P#[sub c] )
                span.bar /
                span.fdn
                  i ( P#[sub ms] - P#[sub c] )
              |
              p.mb-0 x100
          .col-10.col-md-8.col-lg.mb-4.mb-lg-0
            p.mb-0.text-center Donde
          .col-10.col-md-8.col-lg-auto.bg-c8
            .p-4.align-items-center.justify-content-center.h-100
              p.mb-0 #[i P#[sub mh]] = Peso masa húmeda y crisol
              p.mb-0 #[i P#[sub c]] = peso crisol
              p.mb-0 #[i P#[sub ms]] = peso masa seca y crisol
    Separador
    #t_2_4
    .titulo-segundo.color-acento-botones
      h2 2.4 Determinación de volumen de lodo
    p.mb-5(data-aos="fade-right") Las características de los lodos varían mucho, dependiendo de su origen, edad, tipo de proceso del cual provienen y de la fuente original de los mismos; sin embargo, el volumen del lodo es una variable que debe conocerse o estimarse para cuantificar los diferentes componentes del sistema de tratamiento y disposición del lodo.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Existen diferentes alternativas en la medición y determinación del volumen de lodo producida por una PTAR en su operación convencional; en el primero, que es un método experimental, se conoce el volumen de un recipiente, ya que este se encuentra marcado a través de diferentes niveles, lo que permite conocer el volumen en un determinado instante; luego, a través de alguna variable como el tiempo de operación, el caudal o el volumen de agua tratada, se puede hacer una relación con el lodo generado.
    p.mb-5(data-aos="fade-right") Cuando se conoce la masa del lodo, se puede determinar el volumen de los lodos generados por el tratamiento de las aguas residuales en la PTAR a partir de su densidad; sin embargo, para poder determinar la densidad del lodo se deben tener varios aspectos en cuenta, tanto de la fracción líquida como de la fracción sólida, entre los cuales se encuentran. Ver figura 5.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 5]. Aspectos de lodo en fracción líquida y fracción sólida
        figure.mb-5
          img(src='@/assets/curso/tema2/img1.svg',style="width: 850px", alt='Muestra aspectos de lodo en fracción liquida y fracción sólida: PTAR, Humedad del lodo, densidad relativa de los sólidos fijos y densidad relativa de los sólidos volátiles.').m-auto
        p.text-center #[b A continuación, se presentan las fórmulas y cálculos utilizados en la densidad y volumen de los lodos de acuerdo con sus características:]
    TabsA.color-primario.mb-5(data-aos="fade-right")
      .tarjeta.color-primario(titulo="Densidad relativa")
        .p-4.p-lg-5
          .row
            .col-12
              p.mb-4 Para calcular la densidad relativa del lodo, se tiene la ecuación:
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-auto.bg-c7.mb-4.mb-lg-0
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub lodo]
                    |
                    p.mb-0 =
                    .fraction
                      span.fup
                        i X#[sub agua]
                      span.bar /
                      span.fdn
                        i S#[sub agua]
                    |
                    p.mb-0 +
                    .fraction
                      span.fup
                        i X#[sub sólidos]
                      span.bar /
                      span.fdn
                        i S#[sub sólidos]
                .col-10.col-md-8.col-lg.mb-4.mb-lg-0
                  p.text-center.mb-0 Donde
                .col-10.col-md-8.col-lg-auto.bg-c8
                  .p-4.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i S#[sub lodo]] = es la densidad relativa del lodo.
                    p.mb-0 #[i S#[sub agua]] = es la densidad relativa del agua.
                    p.mb-0 #[i S#[sub sólidos]] = es la densidad relativa de los sólidos.
                    p.mb-0 #[i X#[sub agua]] = es la fracción de agua presente en el lodo.
                    p.mb-0 #[i X#[sub sólidos]] = es la fracción de sólidos presesnte en el lodo.
      .tarjeta.color-primario(titulo="Densidad relativa de los sólidos")
        .p-4.p-lg-5
          .row
            .col-12
              p.mb-4 Para conocer la densidad relativa de los sólidos como un global, se debe conocer la densidad relativa, tanto de los sólidos fijos como de los sólidos volátiles, y se tiene así la ecuación:
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-auto.bg-c7.mb-4
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub sólidos]
                    |
                    p.mb-0 =
                    |
                    .fraction
                      span.fup
                        i X#[sub sólidos fijos]
                      span.bar /
                      span.fdn
                        i S#[sub sólidos fijos]
                    |
                    p.mb-0 +
                    |
                    .fraction
                      span.fup
                        i X#[sub sólidos volátiles]
                      span.bar /
                      span.fdn
                        i S#[sub sólidos volátiles]
                .col-10.col-md-8.col.mb-4
                  p.text-center.mb-0 Donde
                .col-10.col-md-8.col-lg-auto.bg-c8
                  .p-4.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i S#[sub sólidos]] = es la densidad relativa de los sólidos.
                    p.mb-0 #[i S#[sub sólidos fijos]] = es la densidad relativa de los sólidos fijos.
                    p.mb-0 #[i S#[sub sólidos volátiles]] = es la densidad relativa de los sólidos volátiles.
                    p.mb-0 #[i X#[sub sólidos fijos]] = es la fracción de sólidos fijos presentes en la fracción sólida.
                    p.mb-0 #[i X#[sub sólidos volátiles]] = es la fracción de sólidos volátiles presentes en la fracción sólida.
      .tarjeta.color-primario(titulo="Densidad relativa de<br>los sólidos como conjunto")
        .p-4.p-lg-5
          .row
            .col-12
              p.mb-4 Calcular la densidad relativa de los sólidos como conjunto, para ello se tiene que:
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-auto.bg-c7.mb-4
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub sólidos]
                    |
                    p.mb-0 =
                    |
                    .fraction
                      span.fup
                        i X#[sub sólidos fijos]
                      span.bar /
                      span.fdn
                        i S#[sub sólidos fijos]
                    |
                    p.mb-0 +
                    |
                    .fraction
                      span.fup
                        i X#[sub sólidos volátiles]
                      span.bar /
                      span.fdn
                        i S#[sub sólidos volátiles]
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub sólidos]
                    |
                    p.mb-0 =
                    |
                    .fraction
                      span.fup
                        i 0.7
                      span.bar /
                      span.fdn
                        i 2
                    p.mb-0 +
                    |
                    .fraction
                      span.fup
                        i 0.3
                      span.bar /
                      span.fdn
                        i 1.5
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub sólidos]
                    |
                    p.mb-0 = 0.35 + 0.2
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub sólidos]
                    |
                    p.mb-0 = 0.55
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    i.mb-0 S#[sub solidos]
                    |
                    p.mb-0 =
                    |
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i 0.55
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    i.mb-0 S#[sub solidos]
                    |
                    p.mb-0 = 1.82
      .tarjeta.color-primario(titulo="Densidad relativa del lodo")
        .p-4.p-lg-5
          .row
            .col-12
              p.mb-4 Una vez se conoce la densidad relativa del conjunto de sólidos, se procede a calcular la densidad relativa del lodo mediante la ecuación:
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-auto.bg-c7.mb-4
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub lodo]
                    |
                    p.mb-0 =
                    |
                    .fraction
                      span.fup
                        i X#[sub agua]
                      span.bar /
                      span.fdn
                        i S#[sub agua]
                    |
                    p.mb-0 +
                    |
                    .fraction
                      span.fup
                        i X#[sub sólidos]
                      span.bar /
                      span.fdn
                        i S#[sub sólidos]
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub lodo]
                    |
                    p.mb-0 =
                    |
                    .fraction
                      span.fup
                        i 0.7
                      span.bar /
                      span.fdn
                        i 1
                    p.mb-0 +
                    |
                    .fraction
                      span.fup
                        i 0.3
                      span.bar /
                      span.fdn
                        i 1.82
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub lodo]
                    |
                    p.mb-0 = 0.7 + 0.165
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i S#[sub lodo]
                    |
                    p.mb-0 = 0.865
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    i S#[sub lodo] = 
                    |
                    .fraction
                      span.fup
                        i 1
                      span.bar /
                      span.fdn
                        i 0.865
                .col-10.col-md-8.col-lg-3.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    i.mb-0 S#[sub lodo] = 1.1560
      .tarjeta.color-primario(titulo="Densidad real")
        .p-4.p-lg-5
          .row
            .col-12
              p.mb-4 Conociendo la densidad relativa del lodo, se puede calcular la densidad real a través de la ecuación:
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-auto.bg-c7.mb-4
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i Densidad real] = #[i densidad relativa x densidad del agua]
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-5.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i Densidad real] = 1.1560 x 1000
                    |
                    .fraction
                      span.fup
                        i kg
                      span.bar /
                      span.fdn
                        i m#[sup 3]
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-5.bg-c8.m-2
                  .p-3.d-flex.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i Densidad real] = 1156.0
                    |
                    .fraction
                      span.fup
                        i kg
                      span.bar /
                      span.fdn
                        i m#[sup 3]
      .tarjeta.color-primario(titulo="Establecer el volumen")
        .p-4.p-lg-5
          .row
            .col-12
              p.mb-4 De este modo, conociendo la densidad del lodo y su masa, se puede establecer el volumen a través de la ecuación:
              .row.align-items-center.justify-content-center
                .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i Densidad] =
                    |
                    .fraction
                      span.fup
                        i masa
                      span.bar /
                      span.fdn
                        i volumen
                .col-10.col-md-8.col-lg-auto.bg-c8.m-2
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i volumen] =
                    |
                    .fraction
                      span.fup
                        i masa
                      span.bar /
                      span.fdn
                        i densidad
                .col-10.col-md-8.col-lg-auto.bg-c8.m-2
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i volumen] =
                    |
                    .fraction
                      span.fup
                        i 4500 kg
                      span.bar /
                      span.fdn
                        i 1156.0 kg / m#[sup 2]
                .col-10.col-md-8.col-lg-auto.bg-c8.m-2
                  .p-4.d-flex.align-items-center.justify-content-center.h-100
                    p.mb-0 #[i volumen = 3.89 m#[sup 3]]
    p.text-center.mb-5(data-aos="fade-right") #[b De este modo, se puede calcular con un ejemplo el volumen del lodo así:]
    .row.mb-5(data-aos="fade-left")
      .col-12.bg-c5
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img3.png',style="width: 450px", alt='').m-auto
          .col-lg-8
            p.mb-0 Se tienen 4500 kg de lodo, con una humedad del 70%; luego de realizar los ensayos correspondientes, se determinó que la densidad relativa de los sólidos fijos es de 2 y el de los sólidos volátiles es de 1.5; si el porcentaje de sólidos fijos es del 70% ¿cuál es el volumen del lodo? ¿Cuál sería la densidad, la masa y el volumen si se redujese la humedad por la acción de un filtro prensa hasta el 30%? (Ver figura 6).
    .row.bg-c9(data-aos="fade-left")
      .col-12.p-5
        .row.justify-content-center.mb-4
          .col-lg-8
            .titulo-sexto.color-acento-botones
              p.mb-0 #[b Figura 6]. Ejemplificación del volumen del lodo
            figure.mb-5
              img(src='@/assets/curso/tema2/img3.svg',style="width: 850px", alt='Muestra ejemplo del volumen del lodo a humedad del 70% y del 30% y se describe en la parte inferior.').m-auto
        p.text-center Cuando #[b el lodo se deshidrata], las propiedades que tienen los sólidos son las mismas, el cambio surge en el porcentaje de agua que este tiene, quedando así:
    .row.bg-c6.mb-5(data-aos="fade-right")
      .col-12.px-5.pt-lg-3.pt-5.pb-5.pb-lg-0
        .row.align-items-center
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img4.png',style="width: 450px", alt='').m-auto
          .col-lg-8
            .row.justify-content-center
              .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                .p-4.d-flex.align-items-center.justify-content-center.h-100
                  .fraction
                    span.fup
                      i 1
                    span.bar /
                    span.fdn
                      i S#[sub lodo]
                  |
                  p.mb-0 =
                  |
                  .fraction
                    span.fup
                      i X#[sub agua]
                    span.bar /
                    span.fdn
                      i S#[sub agua]
                  |
                  p.mb-0 +
                  .fraction
                    span.fup
                      i X#[sub sólidos]
                    span.bar /
                    span.fdn
                      i S#[sub sólidos]
              .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                .p-4.d-flex.align-items-center.justify-content-center.h-100
                  .fraction
                    span.fup
                      i 1
                    span.bar /
                    span.fdn
                      i S#[sub lodo]
                  |
                  p.mb-0 =
                  |
                  .fraction
                    span.fup
                      i 0.3
                    span.bar /
                    span.fdn
                      i 1
                  |
                  p.mb-0 +
                  .fraction
                    span.fup
                      i 0.7
                    span.bar /
                    span.fdn
                      i 1.82
              .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                .p-4.d-flex.align-items-center.justify-content-center.h-100
                  .fraction
                    span.fup
                      i 1
                    span.bar /
                    span.fdn
                      i S#[sub lodo]
                  |
                  p.mb-0 = 0.3 + 0.165
              .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                .p-4.d-flex.align-items-center.justify-content-center.h-100
                  .fraction
                    span.fup
                      i 1
                    span.bar /
                    span.fdn
                      i S#[sub lodo]
                  |
                  p.mb-0 = 0.465
              .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                .p-4.d-flex.align-items-center.justify-content-center.h-100
                  i S#[sub lodo] =
                  |
                  .fraction
                    span.fup
                      i 1
                    span.bar /
                    span.fdn
                      i 0.465
              .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                .p-4.d-flex.align-items-center.justify-content-center.h-100
                  i S#[sub lodo] = 2.15
    p.text-center.mb-5(data-aos="fade-right") Conociendo la densidad relativa del lodo, se puede calcular la #[b densidad real] a través de la ecuación:
    .row.bg-c6.mb-5(data-aos="fade-down")
      .col-12.p-5
        .row.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Densidad real = densidad relativa x densidad del agua]
        .row.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Densidad real = 2,15 x 1000]
              |
              .fraction
                span.fup
                  i kg
                span.bar /
                span.fdn
                  i m#[sup 3]
        .row.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Densidad real = 2150,0]
              |
              .fraction
                span.fup
                  i kg
                span.bar /
                span.fdn
                  i m#[sup 3]
    p.text-center.mb-5(data-aos="fade-right") Del lodo original se conoce que la masa es 4500 kg y el porcentaje de humedad inicial era del 70%, significa que el porcentaje de sólidos es de 30%, entonces:
    .row.bg-c6.mb-5(data-aos="fade-left")
      .col-12.p-5
        .row.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Masa de sólidos = masa de lodo x fracción de sólidos]
          .col-10.col-md-8.col-lg-auto.bg-c8.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Masa de sólidos = 4500 kg x 0,3]
          .col-10.col-md-8.col-lg-auto.bg-c8.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Masa de sólidos = 1350 kg]
    p.text-center.mb-5(data-aos="fade-right") Al deshidratar el lodo, la masa de sólidos no cambia, lo único que varía es la masa de agua, por lo que las fracciones serán diferentes en el lodo deshidratado, para este caso, 70% es sólido y 30% agua; siendo así el lodo después de deshidratarse, tendrá una masa de:
    .row.bg-c6.mb-5(data-aos="fade-down")
      .col-12.p-5
        .row.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Fracción sólidos] =
              |
              .fraction
                span.fup
                  i masa sólidos
                span.bar /
                span.fdn
                  i masa lodo
          .col-10.col-md-8.col-lg-auto.bg-c8.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i 0.7] =
              |
              .fraction
                span.fup
                  i 1350 kg
                span.bar /
                span.fdn
                  i masa lodo
          .col-10.col-md-8.col-lg-auto.bg-c8.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Masa lodo] =
              |
              .fraction
                span.fup
                  i 1350 kg
                span.bar /
                span.fdn
                  i 0.7
          .col-10.col-md-8.col-lg-auto.bg-c8.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Masa lodo] = 1928,57 kg
    p.text-center.mb-5(data-aos="fade-right") Una vez se conoce la masa del lodo y su densidad, se puede #[b conocer el volumen] mediante la ecuación:
    .row.bg-c6(data-aos="fade-left")
      .col-12.p-5
        .row.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Densidad] =
              |
              .fraction
                span.fup
                  i masa
                span.bar /
                span.fdn
                  i v olumen
          .col-10.col-md-8.col-lg-auto.bg-c8.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Volumen] =
              |
              .fraction
                span.fup
                  i masa
                span.bar /
                span.fdn
                  i densidad
          .col-10.col-md-8.col-lg-auto.bg-c8.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Volumen] =
              |
              .fraction
                span.fup
                  i 1928.57 kg
                span.bar /
                span.fdn
                  i 2150 kg/m#[sup 3]
          .col-10.col-md-8.col-lg-auto.bg-c8.m-2
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i Volumen = 0.897 m#[sup 3]]
    Separador
    #t_2_5
    .titulo-segundo.color-acento-botones
      h2 2.5 Características de humedad y densidad relativa del lodo
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img5.png',style="width: 1250px", alt='').m-auto
      .col-lg-10.bg-p1(data-aos="fade-left")
        .p-4
          p.mb-0 La cantidad de lodo producido en una planta de tratamiento suele ser muy variado, dependiendo del proceso de tratamiento usado y de la concentración de aguas residuales. En la siguiente tabla se pueden resumir los valores típicos de las cantidades y características de los lodos producidos por diferentes procesos de tratamiento para aguas residuales.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-botones.mb-5
          p.mb-0 #[b Tabla 1]. Características típicas de los lodos
        .tabla-a.color-secundario
          table
            caption.text-center.mt-3 Nota. Tratamiento de aguas residuales. Romero (2010).
            thead(style="background-color: #DBEFFC")
              tr
                th(rowspan="2" width="50%") Proceso
                th(colspan="2" style="background-color: #BEE2FA !important") % Humedad
                th(colspan="2" style="background-color: #BEE2FA !important") Densidad relativa
              tr
                th.text-center.txt-c1 Intervalo
                th.text-center.txt-c1 Típico
                th.text-center.txt-c1 Sólido
                th.text-center.txt-c1 Lodo
            tbody
              tr
                td Sedimentación primaria
                td 88 - 96
                td 95
                td 1.4
                td 1.02
              tr(style="background-color: #F6FBFF")
                td Filtro percolador
                td 91 - 95
                td 93
                td 1.5
                td 1.02
              tr
                td Precipitación química
                td -
                td 93
                td 1.5
                td 1.025
              tr(style="background-color: #F6FBFF")
                td Lodos activados
                td 90 - 93
                td 92
                td 1.3
                td 1.005
              tr
                td Tanques sépticos
                td -
                td 93
                td 1.3
                td 1.005
              tr(style="background-color: #F6FBFF")
                td Tanques Imhof
                td 90 - 95
                td 90
                td 1.6
                td 1.04
              tr
                td Aireación prolongada
                td 88 - 92
                td 90
                td 1.3
                td 1.015
              tr(style="background-color: #F6FBFF")
                td Lodo primario digerido anaeróbico
                td 90 - 95
                td 93
                td 1.4
                td 1.02
              tr
                td Laguna aireada
                td 88 - 92
                td 90
                td 1.3
                td 1.01
              tr(style="background-color: #F6FBFF")
                td Lodo primario digerido aeróbicamente
                td 93 - 97
                td 96
                td 1.4
                td 1.012
    Separador
    #t_2_6
    .titulo-segundo.color-acento-botones
      h2 2.6 Producción de lodos
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p Cuando se realiza tratamiento a las aguas residuales, es importante conocer la cantidad de lodos que se van a generar, para así mismo dimensionar los equipos, establecer costos y definir espacios para la gestión de los mismos.
        p.mb-0 Existen principalmente dos factores que determinan la cantidad de lodos a generar. El primero de ellos es la carga contaminante de sólidos (influenciada por el caudal y la concentración de sólidos) y el segundo es la generación de lodos por procesos de reproducción biológica, en casos donde se cuente con equipos de tratamiento secundario.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img6.png',style="width: 450px", alt='').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c10.px-4.py-3
        h3.text-white.mb-0 Producción de lodos por remoción de sólidos
    p(data-aos="fade-right") Los lodos generados por remoción de sólidos se obtienen principalmente cuando el agua residual es tratada en un equipo que utilice el diferencial de densidad para la separación de la fase sólida, o cuando se utilicen medios filtrantes para retener los sólidos por tamaño de partícula. 
    p.mb-5(data-aos="fade-right") Para ello es necesario conocer la #[b concentración inicial de sólidos], antes de que el agua ingrese al equipo; la concentración una vez el agua sale, el caudal y la humedad típica del lodo generado en cada uno de los equipos se puede observar en la tabla 6 Características típicas de los lodos.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 7]. Ejemplificación de afluente y efluente de un sedimentador primario
        figure
          img(src='@/assets/curso/tema2/img4.svg',style="width: 850px", alt='Imagen sedimentador primario, debajo se encuentra explicación.').m-auto
          figcaption.text-center.mt-3 Fuente. SENA (2022).
    p.mb-5(data-aos="fade-right") Por ejemplo (ver figura 7), se tiene un sedimentador primario, el cual recibe agua residual a razón de 5 litros por segundo, con una concentración de sólidos de 500 mg/L, y luego de ser tratada, el agua efluente tiene una concentración de 50 mg/L, ¿cuánto lodo se genera en el proceso si se opera durante 8 horas este sedimentador?  A continuación, se invita a ver el desarrollo del siguiente ejercicio con cada uno de sus pasos:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        PasosA.color-primario(tipo="n")
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Calcular la carga contaminante a la entrada del sedimentador.
            .col-lg-8
              .row.justify-content-center
                .col-lg-auto.bg-c8
                  .p-4
                    p #[i Carga contaminante afluente = caudal x concentración]
                    p #[i Carga contaminante afluente = 5 L/s x 500 mg/L]
                    p.mb-0 #[i Carga contaminante afluente = 2500 mg/s]
          .row.align-items-center
            .col-lg-8.order-2.order-lg-1
              .row.justify-content-center
                .col-lg-auto.bg-c8
                  .p-4
                    p #[i Carga contaminante efluente = caudal x concentración]
                    p #[i Carga contaminante efluente = 5 L/s x 50 mg/L]
                    p.mb-0 #[i Carga contaminante efluente = 250 mg/s]
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
              p.mb-0 Calcular la carga contaminante a la salida del sedimentador.
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Restando la carga contaminante a la entrada y a la salida, se puede encontrar la cantidad de sólidos que retiene el sedimentador por segundo.
            .col-lg-8
              .row.justify-content-center
                .col-lg-auto.bg-c8
                  .p-4
                    p #[i Carga contaminante removida = carga contaminante afluente x carga contaminante efluente]
                    p #[i Carga contaminante removida = 5 L/s x 50 mg/L]
                    p.mb-0 #[i Carga contaminante removida = 250 mg/s]
          .row.align-items-center
            .col-lg-8.order-2.order-lg-1
              .row.justify-content-center
                .col-lg-auto.bg-c8
                  .p-4
                    p #[i Carga contaminante removida jornada laboral = 2250 mg/s x 3600 s/hora x 8 horas]
                    p #[i Carga contaminante removida jornada laboral = 64'800.000 mg]
                    p.mb-0 #[i Carga contaminante removida jornada laboral = 64.8 kg]
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
              p.mb-0 Luego se puede calcular la cantidad de sólido removido durante las 8 horas de operación del equipo.
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p.mb-0 Esta sería la masa de los sólidos que se retienen en una jornada laboral de 8 horas en el sedimentador.
            .col-lg-8
              .row.justify-content-center
                .col-lg-auto.bg-c8
                  .p-4
                    p #[i Fracción sólidos = masa de sólidos / masa de lodo]
                    p #[i Masa de lodo = Masa de sólidos / Fracción sólidos]
                    p #[i Masa de lodo = 64.8 kg / 0.08]
                    p.mb-0 #[i Masa de lodo = 810 kg]
    .cajon.color-secundario.p-4.mb-5(data-aos="fade-right")
      p Sin embargo, los lodos no salen secos del equipo, por lo que se hace necesario aumentar la cantidad en masa de agua que pueden llegar a contener, de acuerdo con la información contenida en la tabla.  Características típicas de los lodos, donde se establece que una humedad promedio del lodo obtenido del sedimentador puede ser del 92%, en este caso los sólidos representan solo el 8%, de este modo, contemplando la cantidad de agua presente en el lodo, se puede calcular que el sedimentador genera, en un turno de 8 horas, un total de 810 kg de lodo.
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c10.px-4.py-3
        h3.text-white.mb-0 Producción de lodos por reproducción biológica
    p.mb-5(data-aos="fade-right") Cuando se trabaja con lodos activados, estos utilizan microorganismos que permiten la degradación de los contaminantes orgánicos presentes en el agua; debido a que los microorganismos se alimentan y se reproducen, se genera un lodo que debe ser cuantificado mediante la siguiente ecuación:
    .row.bg-c6.mb-5
      .col-12.px-5.pt-lg-3.pt-5.pb-5.pb-lg-0(data-aos="fade-right")
        .row.align-items-center
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img7.png',style="width: 320px", alt='').m-auto
          .col-lg-8
            .row.justify-content-center
              .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                .p-4.d-flex.align-items-center.justify-content-center.h-100
                  p.mb-0 #[i P#[sub x] = Q ( (]
                  |
                  .fraction
                    span.fup
                      i Y ( S#[sub 0] - S#[sub e] )
                    span.bar /
                    span.fdn
                      i 1 + k#[sub d] + θ#[sub c]
                  |
                  p.mb-0 #[i ) + SS#[sub f] + SS#[sub vnb] ) x 10#[sup -3]]
              .col-10.col-md-8.col-lg-auto.bg-c8.m-2
                .p-4
                  p Donde:
                  p.mb-0 #[i P#[sub x]] = es la masa de sólidos totales desechados, kg/d.
                  p.mb-0 #[i Q] es el caudal de aguas residuales en #[i m#[sup 3] / d].
                  p.mb-0 #[i Y] es el coeficiente máximo de producción de biomasa, generalmente su valor oscila entre 0,4 y 0,8 con un valor típico de 0,6 kg SSV/ kg DBOR o 0,25 a 0,4 kg SSV/kg DQOR.
                  p.mb-0 #[i S#[sub 0]] es el DBO soluble del afluente, #[i mg/L].
                  p.mb-0 #[i S#[sub e]] es el DBO soluble del efluente, #[i mg/L].
                  p.mb-0 #[i θ#[sub c]] es la edad del lodo en días.
                  p.mb-0 #[i k#[sub d]] es la constante de declinación endógena, generalmente entre 0,04 y 0,075 #[i d#[sup -1]]
                  p.mb-0 #[i SS#[sub f]] son los sólidos suspendidos fijos del afluente, #[i mg/L].
                  p.mb-0 #[i SS#[sub vnb]] son los sólidos suspendidos volátiles no biodegradables del afluente, #[i mg/L].
    p.text-center.mb-5(data-aos="fade-right") #[b También, cuando se trabaja con torres biológicas, se debe tener en cuenta la producción de biomasa mediante la ecuación:]
    .row.bg-c6
      .col-12.p-5(data-aos="fade-left")
        .row.align-items-center.justify-content-center
          .col-10.col-md-8.col-lg-3.bg-c7.mb-4.mb-lg-0
            .p-4.d-flex.justify-content-center.h-100
              p.mb-0 #[i P#[sub x] = P + SS#[sub f] + SS#[sub e]]
          .col-10.col-md-8.col-lg-auto.mb-4.mb-lg-0
            p.mb-0 Donde:
          .col-10.col-md-8.col-lg-auto.bg-c8.mb-4.mb-lg-0
            .p-4
              p #[i P#[sub x]] es la producción de lodos en el filtro percolador, #[i kg SST/día].
              p #[i SS#[sub f]] son los sólidos suspendidos fijos aplicados al proceso, #[i kg SSF/día].
              p #[i SS#[sub e]] son los sólidos suspendidos del efluente, #[i SS/día].
              p.mb-0 #[i P] es la biomasa neta producida, #[i kg SSV/día].
    Separador
    #t_2_7
    .titulo-segundo.color-acento-botones
      h2 2.7 Índice Volumétrico de Lodos (IVL)
    p.mb-5(data-aos="fade-right") Es el nombre técnico para hablar de las características de sedimentabilidad que posee el lodo, este índice debe determinarse por lo menos una vez al día, después de periodos de decantación de aproximadamente media hora. El mismo se calcula mediante el cociente entre el resultado del ensayo del Cono Imhoff (tiempo de 30 minutos, en ml/l) y los sólidos suspendidos totales (SST) de los reactores en gramos por litro (g/l).
    .row.bg-c6.mb-5
      .col-12.p-5(data-aos="fade-down")
        .row.align-items-center.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.mb-4
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i IVL =]
              |
              .fraction
                span.fup
                  i Resultado cono imhoff (ml/L)
                span.bar /
                span.fdn
                  i sst#[sub react] (g/L)
          p.text-center.mb-0 El índice se expresa en ml/g, y la calidad del lodo se evalúa de acuerdo con la siguiente escala (ver tabla 7):
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-left")
        .titulo-sexto.color-acento-botones.mb-5
          p.mb-0 #[b Tabla 2]. Escala de sedimentabilidad
        .tabla-a.color-secundario
          table
            caption.text-center.mt-3 Nota. Tratamiento de aguas residuales. Romero (2010).
            thead(style="background-color: #DBEFFC")
              tr
                th Escala
                th Concepto
            tbody
              tr
                td IVL< 90 ml/g
                td Excelente sedimentabilidad.
              tr(style="background-color: #F6FBFF")
                td 90 < IVL < 150 ml/g
                td Buena sedimentabilidad.
              tr
                td IVL > 150 ml/g
                td Malas condiciones de sedimentabilidad.
    p.mb-5(data-aos="fade-right") Suponiendo que se tiene unos lodos producidos en una planta de tratamiento, al caracterizar el mismo se encontró que los sólidos suspendidos son aproximadamente 3.000 mg/L, luego se toma la muestra y se realiza el ensayo del cono imhoff, dando como resultado 120 ml/L.
    .row.justify-content-center
      .col-lg-10.bg-c11(data-aos="fade-down")
        .row
          .col-lg-7
            .p-4
              .row
                .col-12
                  p Lo primero que se debe hacer es realizar la conversión de los SST a g/L.
                  .row.align-items-center.justify-content-center.mb-4
                    .col-10.col-md-8.col-lg-auto.bg-c7.mb-4.mb-lg-0
                      .p-4.d-flex.align-items-center.justify-content-center.h-100
                        p.mb-0  #[i SST#[sub reac] = 3.000]
                        |
                        .fraction
                          span.fup
                            i mg
                          span.bar /
                          span.fdn
                            i L
                        |
                        p.mb-0 = 3.0
                        |
                        .fraction
                          span.fup
                            i g
                          span.bar /
                          span.fdn
                            i L
                  p Se opera la fórmula de IVL.
                  .row.align-items-center.justify-content-center.mb-4
                    .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                      .p-4.d-flex.align-items-center.justify-content-center.h-100
                        p.mb-0  #[i IVL = ]
                        |
                        .fraction
                          span.fup
                            i Resultado cono imhoff (ml/L)
                          span.bar /
                          span.fdn
                            i sst#[sub react] (g/L)
                    .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                      .p-4.d-flex.align-items-center.justify-content-center.h-100
                        p.mb-0  #[i IVL = ]
                        |
                        .fraction
                          span.fup
                            i 120 (ml/L)
                          span.bar /
                          span.fdn
                            i 3.0 (g/L)
                    .col-10.col-md-8.col-lg-auto.bg-c7.m-2
                      .p-4.d-flex.align-items-center.justify-content-center.h-100
                        p.mb-0  #[i IVL = 40 ml/g]
                  .row.align-items-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema2/img5.svg',style="width: 80px", alt='').m-auto
                    .col
                      p.mb-0 De acuerdo con el dato encontrado, se puede inferir que el lodo generado tiene excelentes características de sedimentabilidad.
          .col-lg-5.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img8.png',style="width: 420px", alt='').m-auto
    Separador
    #t_2_8
    .titulo-segundo.color-acento-botones
      h2 2.8 Tiempo de Retención de Sólidos (TRS) o Tiempo de Residencia Celular (TRC)
    p.mb-5(data-aos="fade-right") Esta variable representa el periodo de tiempo medio en el cual la biomasa o lodo permanece en el sistema, su ecuación es:
    .row.bg-c6.mb-5
      .col-12.p-5(data-aos="fade-left")
        .row.align-items-center.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.mb-4.mb-lg-0
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i TRS =]
              |
              .fraction
                span.fup
                  i V x SSVLM#[sub R]
                span.bar /
                span.fdn
                  i Q#[sub p]  x SSVLM#[sub p]  + Q#[sub EF]  x SSVLM#[sub EF]
          .col-10.col-md-8.col-lg-auto.mb-4.mb-lg-0
            p.mb-0 Donde:
          .col-10.col-md-8.col-lg-auto.bg-c8.mb-4.mb-lg-0
            .p-4
              p #[i V] = es el volumen del reactor.
              p #[i SSVLM#[sub R]] = es la concentración de Sólidos Suspendidos Volátiles en la Mezcla (SSVLM) en el reactor.
              p #[i Q#[sub p]] = es el caudal volumétrico de purga de lodos.
              p #[i SSVLM#[sub p]] = es la concentración de SSVLM en la corriente de purga.
              p #[i Q#[sub ef]] = es el caudal volumétrico del efluente.
              p.mb-0 #[i SSVLM#[sub ef]] = es la concentración de SSVLM en el efluente.
    p(data-aos="fade-right") El #[b.txt-c1 TRS]  es un parámetro muy importante para tener en cuenta, tanto en el diseño como en la operación de los sistemas de lodos activos. En condiciones satisfactorias de operación, cuando el licor se mezcla presenta una buena floculación y sedimentación, el valor de #[b.txt-c1 Ssvm]  en el efluente suele ser bajo (con valores típicos inferiores a 15 mg/l) y por tanto el TRS se controla mediante la purga de lodos.
    Separador
    #t_2_9
    .titulo-segundo.color-acento-botones
      h2 2.9 Tasa de purga de lodos
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Esta es una variable operacional de gran importancia en las plantas de tratamiento de lodos activos, se fundamenta en mantener la TRS del sistema mediante la eliminación del exceso de lodo producido en el mismo.
        p Es importante porque la cantidad de lodos activados purgados afectará a la calidad del efluente, la velocidad del crecimiento de microorganismos, la sedimentabilidad de la mezcla, el consumo de oxígeno, los nutrientes requeridos y la posibilidad de que se presente nitrificación.
        .cajon.color-secundario.p-4
          p El objetivo de esta estrategia es que la cantidad de lodos activados en el proceso permanezca lo más constante posible, usando la condición conocida como estado estacionario, que es lo más deseable para la operación de la planta de tratamiento.
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.mb-0 #[b Figura 8]. Esquema de eliminación del exceso de lodo producido en el mismo
        figure
          img(src='@/assets/curso/tema2/img6.svg',style="width: 480px", alt='Muestra gráfica de afluente, fase de alineación, separación de lodos, purga y retorno de lodos.').m-auto
    p.mb-5(data-aos="fade-right") La purga de los lodos activos se puede realizar en el reactor aerobio, pero usualmente se realiza es en la línea de recirculación de lodos para controlar mejor el volumen involucrado; lo que se hace es que el lodo purgado se bombea a los espesadores o a algún proceso de eliminación de agua, y luego a un digestor anaerobio.
    p.text-center.mb-5(data-aos="fade-down") #[b Para determinar la cantidad de lodos a purgar, se puede emplear la siguiente ecuación:]
    .row.bg-c6.mb-5
      .col-12.p-5(data-aos="fade-left")
        .row.align-items-center.justify-content-center
          .col-10.col-md-8.col-lg-auto.bg-c7.mb-4.mb-lg-0
            .p-4.d-flex.align-items-center.justify-content-center.h-100
              p.mb-0 #[i M#[sub p] = P#[sub x] - X#[sub e] Q]
          .col-10.col-md-8.col-lg-auto.mb-4.mb-lg-0
            p.mb-0 Donde:
          .col-10.col-md-8.col-lg-auto.bg-c8.mb-4.mb-lg-0
            .p-4
              p #[i M#[sub p]] es la masa de lodo a purgar.
              p #[i P#[sub x]] producción neta de lodos.
              p #[i X#[sub e]] es la concentración de sólidos en el efluente #[i mg/L].
              p.mb-0 #[i Q] es el caudal en el efluente.
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c10.px-4.py-3
        h3.text-white.mb-0 Indicadores visuales de los lodos
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-4
          p Algo importante para resaltar es que aparte de las mediciones de variables fisicoquímicas, el operador o la persona encargada de una planta de tratamiento debe estar atento a diferentes indicadores que pueden ser observados en el proceso.
        p.mb-0 La planta de tratamiento se considera un ecosistema completo que ofrece respuestas a diferentes condiciones, en este caso, los que reflejaran esos indicadores son los microorganismos presentes en el lodo activado. Dentro de los indicadores visuales más comunes se encuentran:
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img10.png',style="width: 450px", alt='').m-auto
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row(titulo="1. Color")
        .col-lg-8.mb-4.mb-lg-0
          p El cual puede indicar la edad de los lodos; cuando son lodos activados en buen estado suele presentar color café claro, si se ve oscuro o negro puede indicar que hay condiciones de septicidad, si se ve otro color indica la presencia de desechos industriales.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img11.png',style="width: 450px", alt='').m-auto
      .row(titulo="2. Espuma")
        .col-lg-8.mb-4.mb-lg-0
          p Su presencia indica que los niveles de sólidos del lodo no están en el intervalo recomendado o que son lodos jóvenes o viejos, si es blanca indica altas concentraciones de sólidos, si es café oscuro, que el lodo es viejo.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img12.png',style="width: 450px", alt='').m-auto
      .row(titulo="3. Algas")
        .col-lg-8.mb-4.mb-lg-0
          p Su presencia en paredes, canaletas y vertederos significa que el agua contiene muchos nutrientes (nitrógeno y fósforo), por lo cual requerirá un control de exceso de nutrientes por medio de compuestos como cloruro férrico, entre otros.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img13.png',style="width: 450px", alt='').m-auto
      .row(titulo="4. Material flotante")
        .col-lg-8.mb-4.mb-lg-0
          p Usualmente se visualizan en los sedimentadores secundarios y es un indicador de altos niveles de grasas y aceites en el influente de la planta; esa capa de nata significa que se está inyectando demasiado aire y que las microburbujas arrastran a los flóculos fuera del mando de los lodos.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img14.png',style="width: 450px", alt='').m-auto
      .row(titulo="5. Burbujeo")
        .col-lg-8.mb-4.mb-lg-0
          p Indica que el mando de los lodos es demasiado profundo, lo que causa anaerobiosis y la producción de gases (metano, dióxido de carbono y ácido sulfúrico). Las burbujas formadas arrastran sólidos, afectando el funcionamiento del sedimentador. Para solucionarlo, se recomienda aumentar la recirculación o la purga.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img15.png',style="width: 450px", alt='').m-auto
      .row(titulo="6. Acumulación de sólidos")
        .col-lg-8.mb-4.mb-lg-0
          p En esquinas y en espacios como entre los difusores, indica un mezclado deficiente en el tanque de aireación, o que los desarenadores y sedimentadores no están funcionando correctamente.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img16.png',style="width: 450px", alt='').m-auto
      .row(titulo="7. Olor")
        .col-lg-8.mb-4.mb-lg-0
          p Está en lodos activados, cuando el sistema opera bien suele dar una percepción de olor a humedad, pero si se generan malos olores es un indicador de problemas operativos, falta de aireación en un reactor o se están acumulando demasiado tiempo en el sedimentador.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img17.png',style="width: 450px", alt='').m-auto
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c10.px-4.py-3
        h3.text-white.mb-0 Flujo de lodos
    .row.mb-5
      .col-12.mb-5(data-aos="fade-right")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Una actividad preliminar al tratamiento de los lodos es aquella que se reconoce como flujo de lodos, esta contempla las acciones que se deben considerar para hacer un transporte del lodo desde el proceso que lo genera hasta su posterior tratamiento y disposición.
            p Para ello, el elemento que es usado con mayor rigurosidad son las bombas, que pueden ser de diferentes tipos:
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img18.png',style="width: 250px", alt='').m-auto
      .col-12(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Bombas de émbolo")
            .col-lg-6.mb-4.mb-lg-0
              p Usualmente con capacidades de 2,5 a 3,8 L/s por émbolo, con velocidades entre 40 y 50 RPM, son de uso frecuente y su función es hacer una succión del lodo de hasta 3 m.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img19.png',style="width: 450px", alt='').m-auto
          .row(numero="2" titulo="Bombas de cavidad progresiva")
            .col-lg-6.mb-4.mb-lg-0
              p También muy usadas en el bombeo de lodos, tienen cabezas de succión de hasta 8,5 m, con caudales de hasta 75 L/s, sin embargo, se considera costoso el mantenimiento.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img20.png',style="width: 450px", alt='').m-auto
          .row(numero="3" titulo="Bombas centrífugas no atascantes")
            .col-lg-6.mb-4.mb-lg-0
              p Son de uso común, requieren de una selección cuidadosa para que operen óptimamente, ya que los cambios en las características de lodos hacen variable la cabeza de bombeo y el caudal, luego debe tener capacidad suficiente para el bombeo del lodo, debido al gran volumen de agua existente.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img21.png',style="width: 450px", alt='').m-auto
          .row(numero="4" titulo="Bombas de flujo rotativo")
            .col-lg-6.mb-4.mb-lg-0
              p Poseen un impulsor rotativo generando un vórtice dentro del lodo, haciendo que la fuerza impulsora principal sea el mismo líquido. Es importante mencionar que el diseño debe ser muy cuidadoso, ya que usualmente las bombas operan en un intervalo muy estrecho de cabeza de bombeo para una velocidad determinada de rotación.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img22.png',style="width: 450px", alt='').m-auto
          .row(numero="5" titulo="Bombas de diafragma")
            .col-lg-6.mb-4.mb-lg-0
              p Utilizan una membrana flexible para contraer y agrandar una cavidad cerrada, a través de la cual se dirige el flujo mediante válvulas de retención. Su capacidad es baja, hasta 14 L/s.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img23.png',style="width: 450px", alt='').m-auto
          .row(numero="6" titulo="Bombas de pistón")
            .col-lg-6.mb-4.mb-lg-0
              p Son elegidas para sistemas de presión alta, ya que permiten el bombeo a presiones hasta de 13,8 Mpa (megapascales), el problema es que son muy costosas.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img24.png',style="width: 450px", alt='').m-auto
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c10.px-4.py-3
        h3.text-white.mb-0 Uso de válvulas
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        P Las válvulas son un dispositivo instalado en una tubería para controlar la magnitud y/o la dirección del flujo. En su diseño, materiales y tipo dependen de las características del sistema y del fluido que se maneje. Estas son algunas características importantes de las válvulas en sistemas de tuberías:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[B Estructura]: consiste esencialmente en un cuerpo y un disco o tapón ajustado a dicho cuerpo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[B Selección]: una válvula para usarse en un sistema de tuberías depende de su aplicación y de razones económicas.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[B Dimensiones]: regularmente, las válvulas se dimensionan ligeramente más pequeñas que el diámetro de la tubería y se instalan con un reductor a ambos lados. En la práctica de las obras hidráulicas, es preferible mantener la base de la válvula al mismo nivel de la base de la tubería para evitar que se atrape aire; pero en el transporte de aguas residuales y sólidos, las invertidas deberán estar alineadas.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img25.png',style="width: 450px", alt='').m-auto
    P.text-center.mb-5(data-aos="fade-right") #[b A continuación, se presentan algunos tipos adicionales de válvulas comunes en sistemas de tuberías:]
    TabsC.color-primario(data-aos="fade-left")
      .p-3.p-md-4(titulo="Aislantes")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Se instalan frecuentemente a intervalos de 1 a 5 Km; siendo el espaciamiento una función de la economía y de los problemas de operación, podría ser necesario aislar secciones de la tubería para reparar filtraciones, y el volumen de agua que tendría que ser drenada para desecharse sería una función del espaciamiento de las válvulas aisladoras. Dentro de estas se encuentran las válvulas de compuerta y mariposa.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img26.png',style="width: 450px", alt='').m-auto
      .p-3.p-md-4(titulo="De arrastre")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Son instaladas en el fondo de cada inclinación mayor en el perfil de la línea; algunas veces es prudente instalar válvulas de desvío de diámetro pequeño alrededor de las válvulas en línea, para igualar las presiones a través de la compuerta y así facilitar su apertura (la cual puede ser manual o por medio de un activador eléctrico o mecánico).
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img27.png',style="width: 450px", alt='').m-auto
      .p-3.p-md-4(titulo="De aguja y control")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Tienen una acción gradual de cerrado, mientras que las de compuerta y las de mariposa ofrecen poca resistencia al flujo hasta que prácticamente lo cortan y podrían sufrir daños por cavitación. Las válvulas de aguja podrían usarse con pesos de contra balance, resortes, acumuladores, o actuadores para mantener condiciones de presión constante, tanto aguas arriba como aguas abajo de la válvula, o para mantener un flujo constante.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img28.png',style="width: 450px", alt='').m-auto
      .p-3.p-md-4(titulo="Antirretorno")
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Válvula que posee un disco unido al cuerpo por bisagras en su extremo, de forma tal que se abra en la dirección normal del flujo y se cierre cuando este se invierte.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img29.png',style="width: 450px", alt='').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
