<template>
    <div>
        <v-card elevation="0" class="pa-2">
            <v-card-title class="__title_category_card">
                {{name}}
            </v-card-title>
            <v-card-text>

                <v-row dense>
                    <v-col cols="4" v-for="item of products" :key="item.id">
                        <productsThumComponent :status="status" :idProducto="item.id" class="__desktop" :price="item.price" height="70px"
                            :code="item.code" :image="item.image">
                        </productsThumComponent>

                        <productsThumComponent :status="status" :idProducto="item.id" class="__mobil" :price="item.price" height="100px"
                            :code="item.code" :image="item.image">
                        </productsThumComponent>
                    </v-col>
                </v-row>

            </v-card-text>
            <v-card-actions>
                <v-btn small block color="#0000" elevation="0" @click="$router.push(`/proveedores/${id}/${name}`)">VER
                    LISTADO DE PROVEEDORES</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import productsThumComponent from "@/components/productsThum.vue"
export default {
    name: "productsMainComponent",
    components: {
        productsThumComponent
    },
    props: {
        name: String,
        link: String,
        id: null,
        status: '',
        products: []
    }
}
</script>

<style lang="css" scoped>
.__title_category_card {
    font-size: 14px;
    color: #0D5084;
}

.__desktop {
    display: block !important;
}

.__mobil {
    display: none !important;
}

@media(max-width: 800px) {
    .__desktop {
        display: none !important;
    }

    .__mobil {
        display: block !important;
    }
}
</style>