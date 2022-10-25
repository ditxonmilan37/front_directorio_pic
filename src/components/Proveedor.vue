<template>
    <div>
        <v-card @click="$router.push(`/detalle/proveedor/${idCategoria}/${categoria}/${idProveedor}/${name}/${logo}/${status}`)"
            link class="__card_proveedor" elevation="0">

            <h2 class="__text_proveedor">{{name}}</h2>

            <v-card-text>
                <div class="__div_img">
                    <img class="__img_proveedor" :src="require('@/assets/' + logo)" alt="" />
                </div>
            </v-card-text>

            <v-card-actions>
                <v-btn block color="#0000" elevation="0">VER MÁS</v-btn>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
export default {
    name: "ProveedorComponent",
    props: {
        name: '',
        logo: '',
        idCategoria: '',
        idProveedor: '',
        categoria: '',
        status: '',

    }
}
</script>

<style lang="css" scoped>
.__text_proveedor {
    text-align: center !important;
    font-size: 16px !important;
    text-transform: uppercase;
}

.__div_img {
    height: 100px;
    display: flex;
}

.__card_proveedor {
    text-align: center !important;
    padding: 10px;
}

.__img_proveedor {
    max-width: 100%;
    margin: auto;
}
</style>