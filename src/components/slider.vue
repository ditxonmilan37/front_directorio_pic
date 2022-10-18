<template>
    <div>

        <v-card elevation="0" class="mt-5">
            <v-row dense>
                <v-col cols="12" md="4" class="__desktop">
                    <div class="__div_categorias">
                        <h1 class="__title_categoria_proveedores text-center">CATEGORIAS PROVEEDORES</h1>
                    </div>
                    <div>
                        <CategoryComponent class="pt-5"></CategoryComponent>
                    </div>
                </v-col>
                <v-col cols="12" md="8" class="__slider_main">
                    <v-carousel class="__desktop" :continuous="true" :cycle="true" :show-arrows="false">
                        <v-carousel-item v-for="(item,i) in items" :key="i" :src="require('@/assets/' + item.src)">
                        </v-carousel-item>
                    </v-carousel>
                    <v-carousel class="__mobil" height="200" :continuous="true" :cycle="true" :show-arrows="false">
                        <v-carousel-item v-for="(item,i) in items" :key="i" :src="require('@/assets/' + item.src)">
                        </v-carousel-item>
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
                    src: 'tuempresa.jpg',
                },
                {
                    src: 'zapatilla.png',
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

.__mobil {
    display: none !important;
}

@media(max-width: 800px) {
    .__desktop {
        display: none;
    }

    .v-carousel__item {
        height: 50px !important;
    }

    .__mobil {
        display: block !important;
    }


}
</style>