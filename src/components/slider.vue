<template>
    <div>

        <v-card elevation="0" class="mt-5">
            <v-row dense>
                <v-col cols="4">
                    <div class="__div_categorias">
                        <h1 class="__title_categoria_proveedores text-center">CATEGORIAS PROVEEDORES</h1>
                    </div>
                    <div>
                        <CategoryComponent class="pt-5"></CategoryComponent>
                    </div>
                </v-col>
                <v-col cols="8" class="__slider_main">
                    <v-carousel :continuous="true" :cycle="true" :show-arrows="false">
                        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-card>

    </div>
</template>

<script>
import CategoryComponent from '@/components/Category.vue'
export default {
    name: "sliderComponent",
    components: {
        CategoryComponent
    },
    data() {
        return {
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
        }
    },
}
</script>

<style lang="css" scoped>
.__title_categoria_proveedores {
    font-size: 14px !important;
    line-height: 45px;
    color: grey;
}

.__slider_main {
    padding: 0px !important;
}

.__div_categorias {
    height: 45px;
    background-color: white;
    border-bottom: solid 1px rgb(198, 198, 198);
}
</style>