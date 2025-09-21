<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    // Bloque 1/6: imagen-texto 4:8
    .row.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el marco del desarrollo de soluciones digitales, las aplicaciones móviles ocupan hoy un papel protagónico. La expansión del uso de dispositivos móviles ha transformado la forma en que las personas acceden a la información, interactúan con servicios y realizan tareas cotidianas. En este contexto, se hace necesario comprender los fundamentos del desarrollo móvil, debido a que constituyen la base para diseñar e implementar aplicaciones funcionales, eficientes y adaptadas a las necesidades actuales del usuario.

        p(data-aos="fade-left") Esta unidad tiene como propósito ofrecer una visión general del ecosistema móvil, abordando temas esenciales como las plataformas de desarrollo más utilizadas (Android e iOS), las diferencias entre enfoques nativos y multiplataforma, las herramientas básicas para el desarrollo, y el ciclo de vida de una aplicación móvil. A través de este recorrido, se pretende establecer un marco conceptual que permitirá comprender las decisiones técnicas que intervienen, desde el inicio de un proyecto hasta su despliegue.

    // Bloque 2/6: texto
    p(data-aos="fade-up") Al finalizar la unidad, se espera que la persona que aprende sea capaz de:

    .bg-full-width.bg-gradiente-6
      .px-4.px-md-5.py-4

        // Bloque 3/6: color-texto-imagen 8:4
        .row.mb-4
          .col-lg-8
            .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
              ul.lista-ul--color.color-dark.mb-0
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Identificar las principales plataformas móviles y sus características.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Distinguir entre aplicaciones nativas y multiplataforma, reconociendo sus ventajas y desventajas.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Conocer las herramientas más utilizadas en el desarrollo de aplicaciones móviles.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Comprender el ciclo de vida de una aplicación desde su planeación hasta su publicación.
            
            p(data-aos="fade-up") La importancia de estos contenidos, radica en que proporcionan los cimientos para cualquier tipo de desarrollo posterior. Sin una comprensión clara de estos elementos, resulta complejo avanzar hacia niveles más especializados o tomar decisiones fundamentadas en la práctica profesional. La aplicación real de este conocimiento se evidencia en la capacidad de seleccionar las tecnologías adecuadas, optimizar recursos y construir soluciones alineadas con las expectativas del mercado.

            p(data-aos="fade-up") #[strong La unidad está organizada en cuatro temas.]

          .col-lg-4.d-none.d-sm-block
            figure
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in").mb-4.mb-lg-0



        // Bloque 5/6: tarjetas-boton
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/3.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Tema 1
              p.mb-0.text-center Aborda las plataformas de desarrollo móvil.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/3.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Tema 2
              p.mb-0.text-center Profundiza en las diferencias entre aplicaciones nativas y multiplataforma.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/3.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Tema 3
              p.mb-0.text-center Presenta las herramientas de desarrollo más utilizadas.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/intro/3.svg"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Tema 4
              p.mb-0.text-center Analiza el ciclo de vida de una aplicación. Cada tema incluirá actividades de análisis y reflexión, que permitan aplicar los conceptos tratados.

    // Bloque 6/6: bg-full-icono-texto
    .bg-full-width.bg-color-anexo
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Se invita a asumir un rol activo durante el proceso de aprendizaje, explorando los recursos proporcionados, participando en las actividades propuestas y reflexionando sobre la aplicabilidad de los conceptos en escenarios reales. No se requieren conocimientos previos técnicos, pero se recomienda tener familiaridad con el uso básico de dispositivos móviles y plataformas digitales.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.lista-ul--color.color-dark li > i:first-of-type
  color: #453179 !important
</style>
