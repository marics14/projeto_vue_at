<template>
    <ImagemPrincipal/>
    <VideoUnico/>
    <TabelaUnica/>
</template>

<script>
import ImagemPrincipal from './ImagemDiversas.vue';
import TabelaUnica from './TabelaUnica.vue';
import VideoUnico from './VideoUnico.vue';


export default {
    name: 'PaginaPrincipal',
    components: {
          ImagemPrincipal, TabelaUnica,  VideoUnico

    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
