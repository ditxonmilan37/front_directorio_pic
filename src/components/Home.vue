<template>
    <div>
        <v-container>
            <v-card elevation="0" class="__card_proveedores">
                <h1 class="__title_proveedores"><img src="@/assets/icon-secure.svg" class="mr-5 __img_icon" alt="" />

                    PROVEEDORES
                    CONFIABLES PARA IMPORTAR</h1>
            </v-card>

            <sliderComponent></sliderComponent>

            <v-row dense>
                <v-col v-for="item of $store.state.itemsCategoria" :key="item.id" cols="12" md="3">
                    <productsMainComponent :products="item.products" :status="2" :name="item.text" :id="item.id" link="#"
                        class="mt-5">
                    </productsMainComponent>
                </v-col>
            </v-row>

            <BannerCalculadoraComponent class="mt-5 "></BannerCalculadoraComponent>

            <v-row dense class="mt-5">
                <v-col cols="12" md="4" v-for="item of $store.state.enlacesPromo" :key="item.id">
                    <EnlacesPromoComponent :text="item.text" />
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import sliderComponent from "@/components/slider.vue";
import productsMainComponent from "@/components/productsMain.vue";
import BannerCalculadoraComponent from "@/components/BannerCalculadora.vue";
import EnlacesPromoComponent from "@/components/EnlacesPromo.vue";
export default {
    name: 'HomeComponent',
    components: {
        sliderComponent,
        productsMainComponent,
        BannerCalculadoraComponent,
        EnlacesPromoComponent
    }
}
</script>

<style lang="css" scoped>
.__card_proveedores {
    color: #2DC57C !important;
    text-align: center !important;
    padding: 10px !important;
}

.__title_proveedores {
    display: flex;
    justify-content: center;

}

@media(max-width: 800px) {
    .__title_proveedores {
        font-size: 3.5vw !important;
        display: flex;
        justify-content: center;
    }

    .__img_icon {
        width: 5% !important;
    }

    .__card_proveedores {
        color: #484848 !important;
        text-align: center !important;
        padding: 10px !important;
    }
}
</style>