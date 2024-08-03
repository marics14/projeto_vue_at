<template>
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
                <td> <img class="" src="@/assets/gatosiames.webp " width="10%"></td>
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

</template>

<script>
export default {
    name: 'TabelaUnica',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, td{
    border: 1px solid black;
    border-collapse: collapse;

}

</style>
