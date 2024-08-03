<template>
<div class="hello">
    <body>
  <header>

    <div id="conteudo-principal">
      <h1>Gatos</h1>

      <p>
        É sempre bom ter um amiguinho de estimação!

      </p>
      <div>
        <img class="" src="@/assets/gatosiames.webp" width="60%">
      </div>

      <div>
        <img class="" src="@/assets/gatoragdoll.webp" width="60%">
      </div>

      <div>
        <img class="" src="@/assets/gatolaranja.jpg" width="60%">
      </div>


    </div>



</header>

<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Nome</th>
      <th>Imagem</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Gato Siames</td>
      <td> <img class="" src="@/assets/gatosiames.webp " width="10%" ></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Gato Ragdoll</td>
      <td><img class="" src="@/assets/gatoragdoll.webp" width="10%"></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Gato Laranja</td>
      <td><img class="" src="@/assets/gatolaranja.jpg" width="10%"></td>
    </tr>
  </tbody>
</table>
</body>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
