# Tema 2: 2.  Recolección de datos de sensores

<!-- 
RUTA DE ASSETS: @/assets/curso/tema2/
DISEÑO DE REFERENCIA: tema2.png

INSTRUCCIONES:
- Numerar assets secuencialmente: 1.png, 2.svg, 3.png, etc.
- Usar **texto** para negritas (se renderiza como #[strong texto])
- Respetar orden exacto de marcadores //texto, //color, //assets
- Especificar distribución de columnas cuando sea necesario: 5:7, 4:8, 6:6

.bg-color
  &-1
    background-color: #CDD9F7
  &-2
    background-color: #FCEEB5
  &-3
    background-color: #5C2C88
  &-4
    background-color:**** #B6FBF3
  &-5
    background-color: #062678
  &-6
    background-color: #EDDBFD
-->

## Bloque 1/1: imagen-texto-iconobloque 4:8
//assets: 1.png
//texto
El desarrollo de aplicaciones móviles ha evolucionado considerablemente en la última década, impulsado por la creciente diversidad de dispositivos y plataformas disponibles. En este contexto, una de las decisiones fundamentales para cualquier desarrollador o empresa, es elegir el enfoque tecnológico más adecuado para construir su aplicación: nativa o multiplataforma.
//iconobloque
Esta decisión afecta múltiples dimensiones del proyecto: desde la calidad de la experiencia de usuario, el rendimiento y la seguridad, hasta el costo, tiempo de desarrollo y facilidad de mantenimiento. Por ello, comprender las diferencias entre estas dos aproximaciones, es esencial para gestionar eficientemente los recursos y alcanzar los objetivos estratégicos.

## Bloque 2: titulo-segundo
2.1 Aplicaciones nativas

## Bloque 3: color-texto-imagen
//assets: 2.png
//color 1
Las aplicaciones nativas están diseñadas, específicamente, para un sistema operativo móvil determinado. Esto implica que el código se escribe utilizando los lenguajes y herramientas oficiales que el fabricante del sistema provee, logrando una integración completa con el hardware y software de la plataforma.
//texto
Principales plataformas nativas:

## Bloque 4: iconos-color
//assets: 3.svg, 4.svg

Android
Desarrollo con Java o Kotlin, usando Android Studio.

iOS
Desarrollo con Swift u Objective-C, usando Xcode.

## Bloque 5: texto

//texto
Las características y ventajas del desarrollo nativo, son:

## Bloque 6: sliders-a
//assets: 5.png, 6.png, 7.png, 8.png, 9.png

### Rendimiento óptimo
Al compilar directamente en código máquina específico para la plataforma, las aplicaciones nativas aprovechan al máximo la capacidad de procesamiento, memoria y GPU del dispositivo. Esto es crucial para aplicaciones que requieren alto rendimiento gráfico, como videojuegos o software de edición multimedia.

### Acceso completo a APIs y hardware
Las aplicaciones nativas pueden interactuar sin restricciones con todas las funcionalidades del dispositivo: cámara, GPS, sensores biométricos, NFC, Bluetooth, y más. Esto facilita la creación de funciones avanzadas y experiencias inmersivas.

### Mejor experiencia de usuario (UX).
Utilizan los componentes de interfaz nativos, lo que permite que la aplicación se vea y se sienta como parte integral del sistema operativo. Los usuarios encuentran familiar la navegación y los comportamientos, aumentando la satisfacción y usabilidad.

### Mayor estabilidad y seguridad
Las herramientas oficiales cuentan con soporte continuo y actualizaciones constantes, lo que permite adaptarse rápidamente a cambios en el sistema operativo y vulnerabilidades de seguridad.

### Ejemplos reales
Aplicaciones como Google Maps (Android) y Apple Music (iOS), están desarrolladas nativamente para garantizar máxima calidad y funcionalidad en sus respectivas plataformas.

## Bloque 7: texto
Y las desventajas y retos del desarrollo nativo, son:

## Bloque 8: acordeon-img
//assets: 10.png

Costos y tiempos elevados
Se requiere desarrollar dos (o más) bases de código distintas si se quiere cubrir Android e iOS, duplicando esfuerzos y costos, tanto en el desarrollo inicial como en mantenimiento.

Especialización
El equipo de desarrollo debe contar con conocimientos específicos para cada plataforma y lenguaje, lo que puede complicar la gestión de talento y aumentar la curva de aprendizaje.

Actualizaciones separadas
Cada plataforma debe actualizarse y probarse por separado, lo que puede generar desfases y mayores esfuerzos en gestión.

## Bloque 9: titulo-segundo
2.2 Aplicaciones multiplataforma

## Bloque 10: texto-imagen
//assets: 11.png
//texto
Las aplicaciones multiplataforma, permiten escribir un solo conjunto de código que puede ejecutarse en varias plataformas móviles (usualmente Android e iOS). Esto se logra a través de frameworks y tecnologías que traducen o interpretan ese código, para funcionar en cada sistema operativo.

## Bloque 11: tabla

Tabla 2 Principales frameworks multiplataforma

Framework
Lenguaje
Descripción breve

Flutter
Dart.
Creado por Google, utiliza un motor gráfico propio para renderizar interfaces con alto rendimiento.

React Native
JavaScript.
Desarrollado por Facebook, usa componentes nativos y permite compartir código entre web y móvil.

Xamarin
C#.
Plataforma Microsoft, integrada a .NET, enfocada en reutilización de código para apps móviles y Windows.

Ionic
HTML, CSS, JS.
Basado en tecnologías web, crea aplicaciones híbridas que corren dentro de un contenedor nativo (WebView).

## Bloque 12: texto
Conozcamos cuáles son sus característica, ventajas, limitaciones y desafíos:

## Bloque 13: img-acordeon
//assets: 12.png

Características y ventajas del desarrollo multiplataforma
  //lista-flechas
  - Eficiencia en costos y tiempo. Al desarrollar un solo código para varias plataformas, se reduce significativamente el tiempo y costo de desarrollo y mantenimiento, permitiendo lanzar productos al mercado, más rápidamente.
  - Unificación de equipos. Los desarrolladores pueden especializarse en un solo lenguaje o framework, facilitando la gestión y formación del equipo.
  - Reutilización de código. Gran parte del código puede compartirse incluso con aplicaciones web, especialmente en frameworks como React Native e Ionic, favoreciendo la integración entre plataformas.
  - Rápida iteración. Cambios y correcciones se aplican una sola vez, acelerando el ciclo de pruebas y despliegue.

Limitaciones y desafíos del desarrollo multiplataforma
  //lista-flechas
  - Rendimiento inferior al nativo. Aunque los frameworks modernos han mejorado mucho, no alcanzan el rendimiento óptimo de aplicaciones nativas en operaciones intensivas, como animaciones complejas o procesamiento pesado.
  - Acceso limitado o complejo a hardware. El acceso a funcionalidades avanzadas del dispositivo, puede requerir el desarrollo de módulos nativos adicionales o plugins específicos, aumentando la complejidad y dependencia de la comunidad de desarrolladores.
  - Consistencia visual y UX. Aunque muchos frameworks ofrecen componentes nativos o simulados, puede existir inconsistencia en el diseño o comportamiento en diferentes dispositivos o versiones de sistema operativo, afectando la percepción del usuario.
  - Dependencia de terceros. El soporte, actualización y evolución de la app depende en buena medida del mantenimiento del framework elegido, lo que puede generar riesgos en el largo plazo.

## Bloque 14: titulo-segundo
2.3 Comparación técnica detallada, consideraciones y ejemplos

## Bloque 15: tabla
En la siguiente tabla se presenta una comparación técnica detallada:

Tabla 3. Comparación técnica detallada

Aspecto
Aplicaciones nativas
Aplicaciones multiplataforma

Lenguaje y entorno.
Kotlin/Java (Android), Swift/Objective-C (iOS).
Dart (Flutter), JavaScript (React Native), C# (Xamarin), HTML/JS (Ionic).

Compilación.
Compilación a código máquina específico para cada SO.
Código interpretado o compilado a un código común, que se adapta a cada SO.

Rendimiento.
Máximo rendimiento y eficiencia.
Bueno, pero puede haber sobrecarga por capa de abstracción.

Interfaz de usuario.
Componentes nativos que respetan la guía de diseño.
Componentes nativos o renderizados, por motor gráfico o webView.

Acceso a hardware y APIs.
Completo y directo.
Limitado, depende de plugins o módulos nativos adicionales.

Mantenimiento.
Dos o más bases de código separadas.
Base de código única, mantenimiento simplificado.

Costo y tiempo de desarrollo.
Alto por doble desarrollo y especialización.
Bajo a medio, menor inversión inicial y rápida entrega.

Experiencia de usuario.
Fluida, optimizada, coherente con plataforma.
Aceptable, puede presentar diferencias leves o bugs visuales.

Actualizaciones y soporte.
Control total, actualizaciones específicas.
Dependen del framework y su comunidad, riesgo de desactualización.

## Bloque 16: texto
Consideraciones estratégicas para la elección:

## Bloque 17: tarjetas-boton
//assets: 13.svg, 14.svg, 15.svg, 16.svg

Si el producto requiere alta performance, máxima integración con hardware o funciones críticas (como banca, realidad aumentada, videojuegos), la opción nativa es casi obligatoria para garantizar calidad y seguridad.

Si el objetivo es minimizar costos y tiempos para validar un producto (MVP) o un proyecto con alcance amplio en ambas plataformas, el desarrollo multiplataforma ofrece ventajas competitivas claras.

Para startups o proyectos con equipos limitados, el enfoque multiplataforma puede acelerar el lanzamiento y pruebas en mercado, pero debe planificarse una posible migración a nativo para versiones futuras más robustas.

Para empresas con procesos complejos o productos maduros, el desarrollo nativo garantiza un mejor control y soporte a largo plazo.

## Bloque 18: texto
Ejemplos concretos y casos reales:

## Bloque 19: img-acordeon
//assets: 17.png  

Aplicaciones nativas conocidas
  //lista-flechas
  - WhatsApp. Aplicación con versión nativa para Android (Java/Kotlin) e iOS (Swift).
  - Instagram. Inicialmente nativa, aunque ahora incorpora algunos elementos multiplataforma.

Aplicaciones multiplataforma destacadas
  //lista-fleches
  - Facebook Ads Manager. Reescrita con React Native, para facilitar el desarrollo multiplataforma.
  - Google Ads. Usan Flutter para acelerar su desarrollo.
  - Alibaba. Usó React Native para sus apps móviles, combinando rendimiento con rapidez.


## Bloque 20: color-texto-imagen
//assets: 18.png

//color 
La elección entre aplicaciones nativas y multiplataforma, debe estar fundamentada en un análisis integral que contemple aspectos técnicos, económicos y de negocio. Mientras el desarrollo nativo sigue siendo el estándar para aplicaciones con altos requerimientos de rendimiento, seguridad y experiencia, el desarrollo multiplataforma ha avanzado considerablemente, convirtiéndose en una opción viable para una gran variedad de proyectos.

//texto
La decisión no es excluyente: muchas empresas adoptan un modelo híbrido, combinando código nativo para componentes críticos con código multiplataforma, para la lógica de negocio y UI, buscando el mejor equilibrio.
Por último, la capacitación y la actualización constantes en ambas modalidades, es indispensable para el desarrollador móvil moderno, dado que el mercado evoluciona rápidamente y la demanda de aplicaciones de calidad, continúa creciendo.


## BLOQUE: bloque-material-complementario

Robledo Fernández, D. (2014). Desarrollo de aplicaciones para Android II: ( ed.). Ministerio de Educación y Formación Profesional de España. https://elibro.net/es/lc/tecnologicadeloriente/titulos/49379

MoureDev by Brais Moure. (2020, 17 de enero). ANDROID STUDIO: COMO Crear una APP (para Principiantes) 📲 [Tutorial] [Video]. YouTube. https://www.youtube.com/watch?v=BQaxPwZWboA&t=125s 