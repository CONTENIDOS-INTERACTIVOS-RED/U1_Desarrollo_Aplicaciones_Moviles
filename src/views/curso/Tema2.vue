<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diferencias entre aplicaciones nativas y multiplataforma'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/21: imagen-texto-iconobloque 4:8
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 El desarrollo de aplicaciones móviles ha evolucionado considerablemente en la última década, impulsado por la creciente diversidad de dispositivos y plataformas disponibles. En este contexto, una de las decisiones fundamentales para cualquier desarrollador o empresa, es elegir el enfoque tecnológico más adecuado para construir su aplicación: nativa o multiplataforma.

        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta decisión afecta múltiples dimensiones del proyecto: desde la calidad de la experiencia de usuario, el rendimiento y la seguridad, hasta el costo, tiempo de desarrollo y facilidad de mantenimiento. Por ello, comprender las diferencias entre estas dos aproximaciones, es esencial para gestionar eficientemente los recursos y alcanzar los objetivos estratégicos.

    // Bloque 2/21: titulo-segundo
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Aplicaciones nativas

    // Bloque 3/21: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 Las aplicaciones nativas están diseñadas, específicamente, para un sistema operativo móvil determinado. Esto implica que el código se escribe utilizando los lenguajes y herramientas oficiales que el fabricante del sistema provee, logrando una integración completa con el hardware y software de la plataforma.
        
        p(data-aos="fade-left") Principales plataformas nativas:

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 4/21: iconos-color
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 Android
              p.mb-0 Desarrollo con Java o Kotlin, usando Android Studio.

      .col-lg-6
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 iOS
              p.mb-0 Desarrollo con Swift u Objective-C, usando Xcode.

    // Bloque 5/21: texto
    p(data-aos="fade-up") Las características y ventajas del desarrollo nativo, son:

    // Bloque 6/21: sliders-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-lg-1
              h3 Rendimiento óptimo
              p Al compilar directamente en código máquina específico para la plataforma, las aplicaciones nativas aprovechan al máximo la capacidad de procesamiento, memoria y GPU del dispositivo. Esto es crucial para aplicaciones que requieren alto rendimiento gráfico, como videojuegos o software de edición multimedia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-lg-1
              h3 Acceso completo a APIs y hardware
              p Las aplicaciones nativas pueden interactuar sin restricciones con todas las funcionalidades del dispositivo: cámara, GPS, sensores biométricos, NFC, Bluetooth, y más. Esto facilita la creación de funciones avanzadas y experiencias inmersivas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-lg-1
              h3 Mejor experiencia de usuario (UX).
              p Utilizan los componentes de interfaz nativos, lo que permite que la aplicación se vea y se sienta como parte integral del sistema operativo. Los usuarios encuentran familiar la navegación y los comportamientos, aumentando la satisfacción y usabilidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-lg-1
              h3 Mayor estabilidad y seguridad
              p Las herramientas oficiales cuentan con soporte continuo y actualizaciones constantes, lo que permite adaptarse rápidamente a cambios en el sistema operativo y vulnerabilidades de seguridad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-lg-1
              h3 Ejemplos reales
              p Aplicaciones como Google Maps (Android) y Apple Music (iOS), están desarrolladas nativamente para garantizar máxima calidad y funcionalidad en sus respectivas plataformas.

    // Bloque 7/21: texto
    p(data-aos="fade-up") Y las desventajas y retos del desarrollo nativo, son:

    // Bloque 8/21: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b").mb-5
          .div(titulo="Costos y tiempos elevados")
            p Se requiere desarrollar dos (o más) bases de código distintas si se quiere cubrir Android e iOS, duplicando esfuerzos y costos, tanto en el desarrollo inicial como en mantenimiento.
          .div(titulo="Especialización")
            p El equipo de desarrollo debe contar con conocimientos específicos para cada plataforma y lenguaje, lo que puede complicar la gestión de talento y aumentar la curva de aprendizaje.
          .div(titulo="Actualizaciones separadas")
            p Cada plataforma debe actualizarse y probarse por separado, lo que puede generar desfases y mayores esfuerzos en gestión.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/11.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 9/21: titulo-segundo
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Aplicaciones multiplataforma

    // Bloque 10/21: texto-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Las aplicaciones multiplataforma, permiten escribir un solo conjunto de código que puede ejecutarse en varias plataformas móviles (usualmente Android e iOS). Esto se logra a través de frameworks y tecnologías que traducen o interpretan ese código, para funcionar en cada sistema operativo.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 11/21: tabla
    .titulo-figura.mb-2
      h5 Tabla 2. 
      span Principales frameworks multiplataforma

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Framework
            th.bg-color-tabla.text-white Lenguaje
            th.bg-color-tabla.text-white Descripción breve
        tbody
          tr
            td Flutter
            td Dart.
            td Creado por Google, utiliza un motor gráfico propio para renderizar interfaces con alto rendimiento.
          tr
            td React Native
            td JavaScript.
            td Desarrollado por Facebook, usa componentes nativos y permite compartir código entre web y móvil.
          tr
            td Xamarin
            td C#.
            td Plataforma Microsoft, integrada a .NET, enfocada en reutilización de código para apps móviles y Windows.
          tr
            td Ionic
            td HTML, CSS, JS.
            td Basado en tecnologías web, crea aplicaciones híbridas que corren dentro de un contenedor nativo (WebView).

    // Bloque 12/21: texto
    p(data-aos="fade-up") Conozcamos cuáles son sus característica, ventajas, limitaciones y desafíos:

    // Bloque 13/21: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Características y ventajas del desarrollo multiplataforma")
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Eficiencia en costos y tiempo. Al desarrollar un solo código para varias plataformas, se reduce significativamente el tiempo y costo de desarrollo y mantenimiento, permitiendo lanzar productos al mercado, más rápidamente.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Unificación de equipos. Los desarrolladores pueden especializarse en un solo lenguaje o framework, facilitando la gestión y formación del equipo.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Reutilización de código. Gran parte del código puede compartirse incluso con aplicaciones web, especialmente en frameworks como React Native e Ionic, favoreciendo la integración entre plataformas.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Rápida iteración. Cambios y correcciones se aplican una sola vez, acelerando el ciclo de pruebas y despliegue.

          .div(titulo="Limitaciones y desafíos del desarrollo multiplataforma")
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Rendimiento inferior al nativo. Aunque los frameworks modernos han mejorado mucho, no alcanzan el rendimiento óptimo de aplicaciones nativas en operaciones intensivas, como animaciones complejas o procesamiento pesado.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Acceso limitado o complejo a hardware. El acceso a funcionalidades avanzadas del dispositivo, puede requerir el desarrollo de módulos nativos adicionales o plugins específicos, aumentando la complejidad y dependencia de la comunidad de desarrolladores.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Consistencia visual y UX. Aunque muchos frameworks ofrecen componentes nativos o simulados, puede existir inconsistencia en el diseño o comportamiento en diferentes dispositivos o versiones de sistema operativo, afectando la percepción del usuario.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Dependencia de terceros. El soporte, actualización y evolución de la app depende en buena medida del mantenimiento del framework elegido, lo que puede generar riesgos en el largo plazo.

    // Bloque 14/21: titulo-segundo
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Comparación técnica detallada, consideraciones y ejemplos

    // Bloque 15/21: tabla
    p(data-aos="fade-up") En la siguiente tabla se presenta una comparación técnica detallada:

    .titulo-figura.mb-2
      h5 Tabla 3. 
      span Comparación técnica detallada

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-tabla.text-white Aspecto
            th.bg-color-tabla.text-white Aplicaciones nativas
            th.bg-color-tabla.text-white Aplicaciones multiplataforma
        tbody
          tr
            td Lenguaje y entorno.
            td Kotlin/Java (Android), Swift/Objective-C (iOS).
            td Dart (Flutter), JavaScript (React Native), C# (Xamarin), HTML/JS (Ionic).
          tr
            td Compilación.
            td Compilación a código máquina específico para cada SO.
            td Código interpretado o compilado a un código común, que se adapta a cada SO.
          tr
            td Rendimiento.
            td Máximo rendimiento y eficiencia.
            td Bueno, pero puede haber sobrecarga por capa de abstracción.
          tr
            td Interfaz de usuario.
            td Componentes nativos que respetan la guía de diseño.
            td Componentes nativos o renderizados, por motor gráfico o webView.
          tr
            td Acceso a hardware y APIs.
            td Completo y directo.
            td Limitado, depende de plugins o módulos nativos adicionales.
          tr
            td Mantenimiento.
            td Dos o más bases de código separadas.
            td Base de código única, mantenimiento simplificado.
          tr
            td Costo y tiempo de desarrollo.
            td Alto por doble desarrollo y especialización.
            td Bajo a medio, menor inversión inicial y rápida entrega.
          tr
            td Experiencia de usuario.
            td Fluida, optimizada, coherente con plataforma.
            td Aceptable, puede presentar diferencias leves o bugs visuales.
          tr
            td Actualizaciones y soporte.
            td Control total, actualizaciones específicas.
            td Dependen del framework y su comunidad, riesgo de desactualización.



    .bg-full-width.bg-gradiente-5
      .p-4.p-md-5
        // Bloque 16/21: texto
        p(data-aos="fade-up").mb-4 Consideraciones estratégicas para la elección:
        // Bloque 17/21: tarjetas-boton
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/14.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Si el producto requiere alta performance, máxima integración con hardware o funciones críticas (como banca, realidad aumentada, videojuegos), la opción nativa es casi obligatoria para garantizar calidad y seguridad.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/15.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Si el objetivo es minimizar costos y tiempos para validar un producto (MVP) o un proyecto con alcance amplio en ambas plataformas, el desarrollo multiplataforma ofrece ventajas competitivas claras.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/16.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Para startups o proyectos con equipos limitados, el enfoque multiplataforma puede acelerar el lanzamiento y pruebas en mercado, pero debe planificarse una posible migración a nativo para versiones futuras más robustas.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/17.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Para empresas con procesos complejos o productos maduros, el desarrollo nativo garantiza un mejor control y soporte a largo plazo.

    // Bloque 18/21: texto
    p(data-aos="fade-up") Ejemplos concretos y casos reales:

    // Bloque 19/21: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Aplicaciones nativas conocidas")
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | WhatsApp. Aplicación con versión nativa para Android (Java/Kotlin) e iOS (Swift).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Instagram. Inicialmente nativa, aunque ahora incorpora algunos elementos multiplataforma.

          .div(titulo="Aplicaciones multiplataforma destacadas")
            ul.lista-ul--color.color-dark.mb-0
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Facebook Ads Manager. Reescrita con React Native, para facilitar el desarrollo multiplataforma.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Google Ads. Usan Flutter para acelerar su desarrollo.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Alibaba. Usó React Native para sus apps móviles, combinando rendimiento con rapidez.

    // Bloque 20/21: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-4.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 La elección entre aplicaciones nativas y multiplataforma, debe estar fundamentada en un análisis integral que contemple aspectos técnicos, económicos y de negocio. Mientras el desarrollo nativo sigue siendo el estándar para aplicaciones con altos requerimientos de rendimiento, seguridad y experiencia, el desarrollo multiplataforma ha avanzado considerablemente, convirtiéndose en una opción viable para una gran variedad de proyectos.
        
        p(data-aos="fade-left") La decisión no es excluyente: muchas empresas adoptan un modelo híbrido, combinando código nativo para componentes críticos con código multiplataforma, para la lógica de negocio y UI, buscando el mejor equilibrio.
        
        p(data-aos="fade-left") Por último, la capacitación y la actualización constantes en ambas modalidades, es indispensable para el desarrollador móvil moderno, dado que el mercado evoluciona rápidamente y la demanda de aplicaciones de calidad, continúa creciendo.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 21/21: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49379" target="_blank" rel="noopener noreferrer") Robledo Fernández, D. (2014). Desarrollo de aplicaciones para Android II: ( ed.). Ministerio de Educación y Formación Profesional de España.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BQaxPwZWboA&t=125s" target="_blank" rel="noopener noreferrer") MoureDev by Brais Moure. (2020, 17 de enero). ANDROID STUDIO: COMO Crear una APP (para Principiantes) 📲 [Tutorial] [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.lista-ul--color.color-dark li > i:first-of-type
  color: #453179 !important
</style>
