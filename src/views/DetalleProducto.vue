<template>
    <div>
        <v-container>

            <DetalleProductoComponent></DetalleProductoComponent>

            <BannerCalculadoraComponent class="mt-5 "></BannerCalculadoraComponent>
        </v-container>

    </div>
</template>

<script>
import DetalleProductoComponent from '@/components/DetalleProducto.vue';
import BannerCalculadoraComponent from "@/components/BannerCalculadora.vue";
export default {
    name: "DetalleProducto",
    components: {
        DetalleProductoComponent,
        BannerCalculadoraComponent
    }
}
</script>

<style lang="scss" scoped>

</style>