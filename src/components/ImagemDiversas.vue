<template>
    <div id="conteudo-principal">
      <h1>Gatos</h1>

      <p>
        É sempre bom ter um amiguinho de estimação!

      </p>
      <div>
        <img class="" src="@/assets/gatosiames.webp" loading="lazy" width="60%"> 
        <!-- <img srcset="@/assets/gatosiames-small.webp 600w, @/assets/gatosiames-medium.webp 1200w, @/assets/gatosiames-large.webp 1800w" 
sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" src="@/assets/gatosiames.webp" loading="lazy" width="60%"> -->
      </div>

      <div>
        <img class="" src="@/assets/gatoragdoll.webp" loading="lazy" width="60%">
      </div>

      <div>
        <img class="" src="@/assets/gatolaranja.jpg"  loading="lazy" width="60%">
      </div>

      <div>
        <img class="" src="@/assets/barra1.jpg" loading="lazy" width="60%">
      </div>

      <div>
        <img class="" src="@/assets/barra2.jpg" loading="lazy" width="60%">
      </div>

      <div>
        <img class="" src="@/assets/barra3.jpg" loading="lazy" width="60%">
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'ImagemDiversas',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>

<img srcset="@/assets/gatosiames-small.webp 600w, @/assets/gatosiames-medium.webp 1200w, @/assets/gatosiames-large.webp 1800w" 
sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" src="@/assets/gatosiames-medium.webp" loading="lazy" width="60%">

  