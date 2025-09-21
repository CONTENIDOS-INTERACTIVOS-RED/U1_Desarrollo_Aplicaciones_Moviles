# Tema 1: 1. Desarrollo de aplicaciones y análisis de datos en IOT


<!-- 
RUTA DE ASSETS: @/assets/curso/tema1/
DISEÑO DE REFERENCIA: tema1.png
-->

## Bloque 1/1: imagen-texto-iconobloque 4:8
//assets: 1.png, 2.svg

//texto
Las plataformas móviles definen no solo la tecnología sobre la que se construyen las aplicaciones, sino también aspectos claves como la experiencia del usuario, el alcance del mercado y los mecanismos de monetización. Android e iOS son las dos principales plataformas que lideran el mercado global de dispositivos móviles, y conocer sus diferencias técnicas, filosóficas y de negocio, resulta indispensable para el futuro desarrollador de aplicaciones móviles.

//iconobloque
La elección de una plataforma afecta el lenguaje de programación a utilizar, el entorno de desarrollo, el modelo de negocio, la experiencia del usuario y, por supuesto, el alcance que tendrá la aplicación una vez publicada. En esta unidad se realiza una exploración detallada de ambas plataformas, con el fin de que el estudiante pueda tomar decisiones fundamentadas en sus futuros proyectos.

## Bloque 2: titulo-segundo
1.1 Visión general de las plataformas móviles
A continuación, hablaremos sobre las diferentes plataformas móviles.

## Bloque 3: bloque-img
Android
Fue creado por Android Inc. y adquirido por Google en el 2005. Su primera versión oficial se lanzó en el 2008.
Modelo de distribución: abierto. Se basa en el proyecto de código abierto AOSP (Android Open Source Project), lo cual permite a los fabricantes modificarlo e integrarlo en sus propios dispositivos.


## Bloque 4: texto 

## Arquitectura del sistema:

## Bloque 5: figura-completa
Figura 1. Arquitectura Android

## Bloque 6: texto
Lenguajes de desarrollo:

## Bloque 7: tarjetas-boton
//assets: 3.svg, 4.svg, 5.svg
//tarjetas
### Java
El lenguaje tradicional en Android.

### Kotlin
Recomendado por Google desde 2019, por su sintaxis moderna y menor propensión a errores.

### IDE recomendado
Android Studio, basado en IntelliJ IDEA, permite desarrollo visual, pruebas automáticas, integración continua, análisis de rendimiento y emulación en múltiples dispositivos virtuales.

## Bloque 8: bloque-img
//assets: 6.png
iOS
Desarrollado por Apple Inc. y lanzado junto con el primer iPhone en el 2007.
Modelo de distribución: cerrado. Solo puede ejecutarse en dispositivos Apple, bajo estrictas políticas de desarrollo y publicación.

## Bloque 9: texto
Arquitectura del sistema:

## Bloque 10: figura-completa
//assets: 7.png
Figura 2. Arquitectura iOS
Fuente: https://www.maestrosdelweb.com/images/2010/04/arquitectura-iPhoneOS.png 


## Bloque 11: texto
Lenguajes de desarrollo:

## Bloque 12: tarjetas-boton
//assets: 8.svg, 9.svg, 10.svg
//tarjetas
### Objective-C
Lenguaje clásico de Apple.

### Swift
Introducido en el 2014, moderno, seguro, con sintaxis más clara y recomendación oficial actual.

### IDE recomendado
Xcode, que incluye diseño visual, simuladores de todos los modelos de iPhone/iPad, y herramientas como Instrumentos para análisis de rendimiento.


## Bloque 13: texto
Conozcamos más sobre las diferencias entre estas plataformas:

## Bloque 14: slyder-a
//assets: 11.png, 12.png, 13.png


### Ecosistema y experiencia del usuario
Android tiene una experiencia fragmentada debido a la variedad de fabricantes, tamaños de pantalla, resoluciones y versiones del sistema operativo. Esto implica desafíos en el diseño de interfaces responsive y en la compatibilidad del código.
iOS, al estar controlado por un único fabricante, ofrece una experiencia uniforme y predecible, lo que facilita el desarrollo y asegura coherencia en el comportamiento de la app en todos los dispositivos Apple.

### Modelos de negocio y monetización
Google Play Store, permite monetización mediante compras integradas, anuncios y venta directa. Las políticas son más flexibles, lo que permite publicaciones más rápidas, aunque con mayor riesgo de fragmentación de la calidad.
Apple App Store, tiene un proceso de revisión más riguroso y lento, pero esto garantiza aplicaciones de mayor calidad. Los usuarios de iOS tienden a gastar más dinero en aplicaciones y compras dentro de ellas.
Dato relevante. Según SensorTower (2024), aunque Android domina en descargas, iOS genera mayores ingresos por usuario.

### Accesibilidad y curva de aprendizaje
Android Studio + Kotlin, ofrece una curva de aprendizaje accesible, especialmente para desarrolladores con experiencia en Java. Su documentación es extensa, y su comunidad muy activa.
Xcode + Swift, es más intuitivo para diseñadores y desarrolladores acostumbrados al ecosistema Apple. Swift fue diseñado con una sintaxis sencilla, orientada a la seguridad y productividad del código.


## Bloque 15: texto
La siguiente tabla nos presenta casos de uso y ejemplos reales:

## Bloque 16: tabla
Tabla 1. Casos de uso y ejemplos reales

Proyecto
Plataforma sugerida
Justificación

App para agricultores rurales.
Android
Mayor alcance en zonas con teléfonos económicos Android.

Aplicación para diseñadores.
iOS
Usuarios más exigentes en interfaz y rendimiento, mayor uso de iPhone.

App de uso interno empresarial.
iOS (MDM)
Control de dispositivos, distribución interna mediante Apple Business Manager.

App masiva de redes sociales.
Android + iOS
Enfoque multiplataforma, para maximizar mercado y experiencia uniforme.

## Bloque 17: titulo-segundo
1.2 Recomendación para el estudiante

## Bloque 18: texto-iconobloque-imagen
//assets: 15.png

//texto
Se recomienda que, para efectos de práctica, se inicie con Android Studio y Kotlin, debido a su código abierto, amplia documentación, facilidad de instalación en sistemas operativos comunes como Windows y Linux, y su flexibilidad para distribuir apps incluso fuera de Google Play.

Para aquellos con acceso a dispositivos Apple, se sugiere complementar la formación con Xcode y Swift, pues dominar ambas plataformas otorga una ventaja competitiva significativa, en el mercado laboral.

//iconobloque
Comprender las características, fortalezas y limitaciones de Android e iOS, no solo permite elegir adecuadamente una plataforma de desarrollo, sino también anticipar decisiones que influyen en todo el ciclo de vida del producto móvil. La elección no debe basarse únicamente en preferencias personales, sino en un análisis estratégico del mercado, el público objetivo y los recursos disponibles. En los próximos temas se abordarán los enfoques de desarrollo nativo y multiplataforma, lo cual complementará esta base con un enfoque más técnico y táctico sobre cómo implementar las aplicaciones.

## BLOQUE: bloque-material-complementario

Robledo, D. (2017). Desarrollo de aplicaciones para Android I: ( ed.). Ministerio de Educación y Formación Profesional de España. https://elibro.net/es/lc/tecnologicadeloriente/titulos/49432

Víctor Vergel DAM SMR Informática Ciclos Formativos. (2020, 23 de enero). 11 - Android - Ciclo de vida de los activitys [Video]. YouTube. https://www.youtube.com/watch?v=sJRSY45nSW8 