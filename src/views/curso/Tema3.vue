<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Uso de herramientas como Jenkins'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>


    //bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.raatti.net/~raatti/books/devops/pdf/learningcontinuousintegrationwithjenkins.pdf" target="_blank" rel="noopener noreferrer") Pathania, N. (2024). Learning Continuous Integration with Jenkins (3.ª ed.). Packt Publishing.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=RET4vHRMDek" target="_blank" rel="noopener noreferrer") OpenWebinars. (2021, 31 de marzo). ¿QUÉ ES JENKINS?. [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
// ===================================
// IMPORTS OBLIGATORIOS PARA ACTIVIDAD
// ===================================
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema3', // Cambiar X por número del tema (Tema1, Tema2, Tema3, etc.)

  // ===================================
  // COMPONENT REGISTRATION
  // ===================================
  components: {
    Actividad,
  },

  // ===================================
  // DATA CON CUESTIONARIO
  // ===================================
  data() {
    return {
      // IMPORTANTE: Cambiar 'temaX' por el tema correspondiente:
      // tema1 → cuestionarios.tema1
      // tema2 → cuestionarios.tema2
      // tema3 → cuestionarios.tema3
      cuestionario: cuestionarios.tema3,
    }
  },

  // ===================================
  // LIFECYCLE - AOS REFRESH OBLIGATORIO
  // ===================================
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
