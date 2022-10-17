<template>
    <div>
        <v-container>
            <div>

                <v-row dense>
                    <v-col cols="2">
                        <div class="__div_logo">
                            <img class="__img_logo" :src="require('@/assets/' + $route.params.logo )" alt="" />
                        </div>
                    </v-col>
                    <v-col cols="10">
                        <v-card elevation="0" class="__div_proveedor">
                            <v-card-title>
                                <div class="__text">
                                    <h3 class="__text_title">{{$route.params.proveedor}}</h3>
                                    <h3 class="__text_address">Shanghai, China</h3>
                                    <h3 class="__text_categoria">Categoria: {{$route.params.categoria}}</h3>
                                </div>

                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>

                <v-card elevation="0" class="mt-5 pa-5">
                    <v-row>
                        <v-col cols="2" v-for="item, index of productos" :key="item.id"
                            v-if="item.idProveedor == $route.params.idCategoria">
                            <productsThumComponent :idProducto="item.id" height="170px" :price="item.price"
                                :code="`MOQ ${index+1}${item.code}`" :image="item.image">
                            </productsThumComponent>
                        </v-col>
                    </v-row>
                </v-card>

                <BannerCalculadoraComponent class="mt-5 "></BannerCalculadoraComponent>
            </div>
        </v-container>

    </div>
</template>

<script>
import productsThumComponent from '@/components/productsThum.vue';
import BannerCalculadoraComponent from "@/components/BannerCalculadora.vue";
export default {
    name: "DetalleProveedor",
    components: {
        productsThumComponent,
        BannerCalculadoraComponent
    },
    data() {
        return {
            productos: [
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-1.png', price: '3.8', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-2.png', price: '4.7', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-3.png', price: '5.1', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-1.png', price: '3.8', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-2.png', price: '4.7', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-3.png', price: '5.1', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-1.png', price: '3.8', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-2.png', price: '4.7', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-3.png', price: '5.1', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-1.png', price: '3.8', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-2.png', price: '4.7', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-3.png', price: '5.1', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-1.png', price: '3.8', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-2.png', price: '4.7', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-3.png', price: '5.1', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-1.png', price: '3.8', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-2.png', price: '4.7', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-3.png', price: '5.1', code: '00' },

                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-1.jpg', price: '2.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-2.jpg', price: '3.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-3.jpg', price: '4.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-1.jpg', price: '5.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-2.jpg', price: '8.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-3.jpg', price: '7.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-1.jpg', price: '6.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-2.jpg', price: '5.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-3.jpg', price: '4.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-1.jpg', price: '5.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-2.jpg', price: '6.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-3.jpg', price: '7.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-1.jpg', price: '8.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-2.jpg', price: '9.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-3.jpg', price: '7.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-1.jpg', price: '6.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-2.jpg', price: '5.5', code: '00' },
                { id: 'PP02', idProveedor: 'C02', image: 'bisuteria-3.jpg', price: '4.5', code: '00' },

                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-1.jpg', price: '6.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-2.jpg', price: '5.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-3.jpg', price: '4.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-1.jpg', price: '6.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-2.jpg', price: '5.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-3.jpg', price: '4.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-1.jpg', price: '6.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-2.jpg', price: '5.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-3.jpg', price: '4.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-1.jpg', price: '6.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-2.jpg', price: '5.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-3.jpg', price: '4.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-1.jpg', price: '6.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-2.jpg', price: '5.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-3.jpg', price: '4.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-1.jpg', price: '6.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-2.jpg', price: '5.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-3.jpg', price: '4.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-1.jpg', price: '6.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-2.jpg', price: '5.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-3.jpg', price: '4.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-1.jpg', price: '6.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-2.jpg', price: '5.5', code: '00' },
                { id: 'PP03', idProveedor: 'C03', image: 'imprenta-3.jpg', price: '4.5', code: '00' },

                { id: 'PP04', idProveedor: 'C04', image: 'ropa-1.jpg', price: '6.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-2.jpg', price: '5.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-3.jpg', price: '4.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-1.jpg', price: '6.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-2.jpg', price: '5.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-3.jpg', price: '4.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-1.jpg', price: '6.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-2.jpg', price: '5.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-3.jpg', price: '4.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-1.jpg', price: '6.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-2.jpg', price: '5.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-3.jpg', price: '4.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-1.jpg', price: '6.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-2.jpg', price: '5.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-3.jpg', price: '4.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-1.jpg', price: '6.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-2.jpg', price: '5.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-3.jpg', price: '4.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-1.jpg', price: '6.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-2.jpg', price: '5.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-3.jpg', price: '4.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-1.jpg', price: '6.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-2.jpg', price: '5.5', code: '00' },
                { id: 'PP04', idProveedor: 'C04', image: 'ropa-3.jpg', price: '4.5', code: '00' },

                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-1.jpg', price: '6.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-2.jpg', price: '5.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-3.jpg', price: '4.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-1.jpg', price: '6.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-2.jpg', price: '5.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-3.jpg', price: '4.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-1.jpg', price: '6.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-2.jpg', price: '5.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-3.jpg', price: '4.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-1.jpg', price: '6.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-2.jpg', price: '5.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-3.jpg', price: '4.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-1.jpg', price: '6.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-2.jpg', price: '5.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-3.jpg', price: '4.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-1.jpg', price: '6.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-2.jpg', price: '5.5', code: '00' },
                { id: 'PP05', idProveedor: 'C05', image: 'repuesto-3.jpg', price: '4.5', code: '00' },

                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-1.jpg', price: '6.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-2.jpg', price: '5.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-3.jpg', price: '4.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-1.jpg', price: '6.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-2.jpg', price: '5.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-3.jpg', price: '4.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-1.jpg', price: '6.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-2.jpg', price: '5.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-3.jpg', price: '4.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-1.jpg', price: '6.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-2.jpg', price: '5.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-3.jpg', price: '4.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-1.jpg', price: '6.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-2.jpg', price: '5.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-3.jpg', price: '4.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-1.jpg', price: '6.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-2.jpg', price: '5.5', code: '00' },
                { id: 'PP06', idProveedor: 'C06', image: 'iluminacion-3.jpg', price: '4.5', code: '00' },

                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-1.jpg', price: '6.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-2.jpg', price: '5.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-3.jpg', price: '4.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-1.jpg', price: '6.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-2.jpg', price: '5.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-3.jpg', price: '4.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-1.jpg', price: '6.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-2.jpg', price: '5.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-3.jpg', price: '4.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-1.jpg', price: '6.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-2.jpg', price: '5.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-3.jpg', price: '4.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-1.jpg', price: '6.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-2.jpg', price: '5.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-3.jpg', price: '4.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-1.jpg', price: '6.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-2.jpg', price: '5.5', code: '00' },
                { id: 'PP07', idProveedor: 'C07', image: 'deportivo-3.jpg', price: '4.5', code: '00' },

                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-1.jpg', price: '6.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-2.jpg', price: '5.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-3.jpg', price: '4.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-1.jpg', price: '6.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-2.jpg', price: '5.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-3.jpg', price: '4.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-1.jpg', price: '6.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-2.jpg', price: '5.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-3.jpg', price: '4.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-1.jpg', price: '6.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-2.jpg', price: '5.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-3.jpg', price: '4.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-1.jpg', price: '6.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-2.jpg', price: '5.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-3.jpg', price: '4.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-1.jpg', price: '6.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-2.jpg', price: '5.5', code: '00' },
                { id: 'PP08', idProveedor: 'C08', image: 'bolsos-3.jpg', price: '4.5', code: '00' },
            ]
        }
    },

}
</script>

<style lang="css" scoped>
.__div_logo {
    height: 180px;
    background-color: white;
    display: flex;
    border-radius: 15px;
}

.__text_title {
    font-size: 32px;
    text-transform: uppercase;
}

.__text_address {
    font-size: 18px;
    color: rgb(150, 150, 150);
    text-transform: none;
    font-weight: 500;
}

.__text_categoria {
    font-size: 18px;
    color: rgb(68, 68, 68);
    text-transform: none;
    font-weight: 500;
    font-style: italic;
}

.__div_proveedor {
    height: 180px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
}

.__text {
    display: block;
}

.__img_logo {
    max-width: 80%;

    margin: auto;
}
</style>