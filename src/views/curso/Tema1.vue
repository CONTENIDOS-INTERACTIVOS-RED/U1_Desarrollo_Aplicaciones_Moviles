<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Plataformas de desarrollo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/19: imagen-texto-iconobloque 4:8
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Las plataformas móviles definen no solo la tecnología sobre la que se construyen las aplicaciones, sino también aspectos claves como la experiencia del usuario, el alcance del mercado y los mecanismos de monetización. Android e iOS son las dos principales plataformas que lideran el mercado global de dispositivos móviles, y conocer sus diferencias técnicas, filosóficas y de negocio, resulta indispensable para el futuro desarrollador de aplicaciones móviles.

        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La elección de una plataforma afecta el lenguaje de programación a utilizar, el entorno de desarrollo, el modelo de negocio, la experiencia del usuario y, por supuesto, el alcance que tendrá la aplicación una vez publicada. En esta unidad se realiza una exploración detallada de ambas plataformas, con el fin de que el estudiante pueda tomar decisiones fundamentadas en sus futuros proyectos.

    // Bloque 2/19: titulo-segundo
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Visión general de las plataformas móviles
    
    p(data-aos="fade-up") A continuación, hablaremos sobre las diferentes plataformas móviles.

    // Bloque 3/19: bloque-img
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.text-white
          .p-4
            h3 Android  
            p.mb-0(data-aos="fade-up") Fue creado por Android Inc. y adquirido por Google en el 2005. Su primera versión oficial se lanzó en el 2008. 
            p.mb-0(data-aos="fade-up") Modelo de distribución: abierto. Se basa en el proyecto de código abierto AOSP (Android Open Source Project), lo cual permite a los fabricantes modificarlo e integrarlo en sus propios dispositivos.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/3.svg', alt='')

    // Bloque 4/19: texto
    h3(data-aos="fade-up") Arquitectura del sistema:

    // Bloque 5/19: figura-completa
    .titulo-figura.mb-2
      h5 Figura 1. 
      span Arquitectura Android

    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/figura1.png", data-aos="zoom-in", style="max-width: 493px").mx-auto

    // Bloque 6/19: texto
    h3(data-aos="fade-up") Lenguajes de desarrollo:

    .bg-full-width.bg-gradiente-3.mb-5
      .p-4.p-md-5
        // Bloque 7/19: tarjetas-boton
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.png"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Java
              p.mb-0.text-center El lenguaje tradicional en Android.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/5.png"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center Kotlin
              p.mb-0.text-center Recomendado por Google desde 2019, por su sintaxis moderna y menor propensión a errores.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.png"
                alt=""
                style="width: 90px"
              )
              h4.mb-2.text-center IDE recomendado
              p.mb-0.text-center Android Studio, basado en IntelliJ IDEA, permite desarrollo visual, pruebas automáticas, integración continua, análisis de rendimiento y emulación en múltiples dispositivos virtuales.

    // Bloque 8/19: bloque-img
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.text-white
          .p-4
            h3 iOS  
            p.mb-0(data-aos="fade-up") Desarrollado por Apple Inc. y lanzado junto con el primer iPhone en el 2007. 
            p.mb-0(data-aos="fade-up") Modelo de distribución: cerrado. Solo puede ejecutarse en dispositivos Apple, bajo estrictas políticas de desarrollo y publicación.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/7.svg', alt='')

    // Bloque 9/19: texto
    h3(data-aos="fade-up") Arquitectura del sistema:

    // Bloque 10/19: figura-completa
    .titulo-figura.mb-2
      h5 Figura 2. 
      span Arquitectura iOS

    figure.bg-color-info.p-4.p-md-5.mb-0
      img(src="@/assets/curso/tema1/figura2.png", data-aos="zoom-in", style="max-width: 476px").mx-auto
    figcaption.mt-2.text-center.mb-5 Nota. Fuente: https://www.maestrosdelweb.com/images/2010/04/arquitectura-iPhoneOS.png

    // Bloque 11/19: texto
    h3(data-aos="fade-up") Lenguajes de desarrollo:

    .bg-full-width.bg-gradiente-3.mb-5
      .p-4.p-md-5
        // Bloque 12/19: tarjetas-boton
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/8.svg"
                alt=""
                style="width: 90px"
              )
              h3.mb-2.text-center Objective-C
              p.mb-0.text-center Lenguaje clásico de Apple.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/9.svg"
                alt=""
                style="width: 90px"
              )
              h3.mb-2.text-center Swift
              p.mb-0.text-center Introducido en el 2014, moderno, seguro, con sintaxis más clara y recomendación oficial actual.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/10.svg"
                alt=""
                style="width: 90px"
              )
              h3.mb-2.text-center IDE recomendado
              p.mb-0.text-center Xcode, que incluye diseño visual, simuladores de todos los modelos de iPhone/iPad, y herramientas como Instrumentos para análisis de rendimiento.

    // Bloque 13/19: texto
    p(data-aos="fade-up") Conozcamos más sobre las diferencias entre estas plataformas:

    // Bloque 14/19: slyder-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-lg-1
              h3 Ecosistema y experiencia del usuario
              p Android tiene una experiencia fragmentada debido a la variedad de fabricantes, tamaños de pantalla, resoluciones y versiones del sistema operativo. Esto implica desafíos en el diseño de interfaces responsive y en la compatibilidad del código.
              p iOS, al estar controlado por un único fabricante, ofrece una experiencia uniforme y predecible, lo que facilita el desarrollo y asegura coherencia en el comportamiento de la app en todos los dispositivos Apple.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-lg-1
              h3 Modelos de negocio y monetización
              p Google Play Store, permite monetización mediante compras integradas, anuncios y venta directa. Las políticas son más flexibles, lo que permite publicaciones más rápidas, aunque con mayor riesgo de fragmentación de la calidad.
              p Apple App Store, tiene un proceso de revisión más riguroso y lento, pero esto garantiza aplicaciones de mayor calidad. Los usuarios de iOS tienden a gastar más dinero en aplicaciones y compras dentro de ellas.
              p #[strong Dato relevante.] Según SensorTower (2024), aunque Android domina en descargas, iOS genera mayores ingresos por usuario.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7.order-lg-1
              h3 Accesibilidad y curva de aprendizaje
              p Android Studio + Kotlin, ofrece una curva de aprendizaje accesible, especialmente para desarrolladores con experiencia en Java. Su documentación es extensa, y su comunidad muy activa.
              p Xcode + Swift, es más intuitivo para diseñadores y desarrolladores acostumbrados al ecosistema Apple. Swift fue diseñado con una sintaxis sencilla, orientada a la seguridad y productividad del código.

    // Bloque 15/19: texto
    p(data-aos="fade-up") La siguiente tabla nos presenta casos de uso y ejemplos reales:

    // Bloque 16/19: tabla
    .titulo-figura.mb-2
      h5 Tabla 1. 
      span Casos de uso y ejemplos reales

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Proyecto
            th.bg-color-tabla.text-white Plataforma sugerida
            th.bg-color-tabla.text-white Justificación
        tbody
          tr
            td App para agricultores rurales.
            td Android
            td Mayor alcance en zonas con teléfonos económicos Android.
          tr
            td Aplicación para diseñadores.
            td iOS
            td Usuarios más exigentes en interfaz y rendimiento, mayor uso de iPhone.
          tr
            td App de uso interno empresarial.
            td iOS (MDM)
            td Control de dispositivos, distribución interna mediante Apple Business Manager.
          tr
            td App masiva de redes sociales.
            td Android + iOS
            td Enfoque multiplataforma, para maximizar mercado y experiencia uniforme.

    // Bloque 17/19: titulo-segundo
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Recomendación para el estudiante

    // Bloque 18/19: texto-iconobloque-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Se recomienda que, para efectos de práctica, se inicie con Android Studio y Kotlin, debido a su código abierto, amplia documentación, facilidad de instalación en sistemas operativos comunes como Windows y Linux, y su flexibilidad para distribuir apps incluso fuera de Google Play.

        p(data-aos="fade-left").mb-4 Para aquellos con acceso a dispositivos Apple, se sugiere complementar la formación con Xcode y Swift, pues dominar ambas plataformas otorga una ventaja competitiva significativa, en el mercado laboral.

        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Comprender las características, fortalezas y limitaciones de Android e iOS, no solo permite elegir adecuadamente una plataforma de desarrollo, sino también anticipar decisiones que influyen en todo el ciclo de vida del producto móvil. La elección no debe basarse únicamente en preferencias personales, sino en un análisis estratégico del mercado, el público objetivo y los recursos disponibles. En los próximos temas se abordarán los enfoques de desarrollo nativo y multiplataforma, lo cual complementará esta base con un enfoque más técnico y táctico sobre cómo implementar las aplicaciones.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")

    // Bloque 19/19: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49432" target="_blank" rel="noopener noreferrer") Robledo, D. (2017). Desarrollo de aplicaciones para Android I: ( ed.). Ministerio de Educación y Formación Profesional de España.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=sJRSY45nSW8" target="_blank" rel="noopener noreferrer") Víctor Vergel DAM SMR Informática Ciclos Formativos. (2020, 23 de enero). 11 - Android - Ciclo de vida de los activitys [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
