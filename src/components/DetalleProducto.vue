<template>
    <div>
        <v-card elevation="0" class="pa-5" >
            <v-row dense v-if="$route.params.status == 1">
                <v-col cols="12" md="6" class="__col_left">

                    <img class="__img_pro_pro" :src="require('@/assets/' + img)" alt="">

                    <v-row dense>
                        <v-col cols="2" md="2" v-for="item of fotos" class="__desktop" :key="item.id">

                            <img  @click="img = item.img"
                                class="__img_pro __div_pro " :src="require('@/assets/' + item.img)" alt="">

                            
                        </v-col>

                        <v-col cols="4" md="2" v-for="item of fotosM" :key="item.id" class="__mobil">
                        
                            <img @click="img = item.img" class="__img_pro __div_pro " :src="require('@/assets/' + item.img)" alt="">
                        
                        
                        </v-col>
                    </v-row>
                   <v-row dense>
                    <v-col cols="6">
                        <h2>ZAPATILLAS NIKE</h2>
                        <h1 class="mt-1 __price">$ 4,8</h1>
                        <h1 class="__code">MOQ 200</h1>
                    </v-col>
                    <v-col cols="6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, doloremque maiores. </p>
                    </v-col>
                   </v-row>

                </v-col>
                <v-col cols="12" md="6" class="__div_pro_de pl-md-8">

                   <h2>PROVEEDOR 1</h2>
                   <h3>SHANGHAI, CHINA</h3>
                   <h3>CLASIFICACION: GOLD</h3>

                   <div class="mt-10 pa-2" style="background: #f1f1f1; width: 100%;">
                        <h3>Chatear con el proveedor</h3>
                        <v-row dense>
                            <v-col cols="3">
                                <img class="__img_pro" :src="require('@/assets/proveedor.png')" alt="">
                            </v-col>
                            <v-col cols="8">
                                <h2>PROVEEDOR 1</h2>
                                <v-btn color="success" block class="mt-2">CONTACTAR</v-btn>
                            </v-col>
                        </v-row>
                   </div>

                    <v-btn elevation="0" x-large class="mt-15" color="#218AD8" @click="$router.push('/carrito')" dark
                        block>COTIZAR FLETE Y ADUANA</v-btn>

                </v-col>
                <v-col cols="12" class="mt-5" style="background: #e7e7e7">
                    <h2 class="text-center">OTROS PRODUCTOS</h2>
                    <v-row dense>
                        <v-col cols="6" md="2" v-for="item, index of productos" :key="item.id">
                            <productsThumComponent :status="1" :idProducto="item.id" height="170px" :price="item.price"
                                :code="`MOQ ${index+1}${item.code}`" :image="item.image">
                            </productsThumComponent>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col cols="12" class="mt-10">
                    <h2 class="text-center">MÁS PROVEEDORES</h2>

                    <v-row dense>
                        <v-col cols="6" md="2" v-for="(item, index) of proveedores" :key="item.id"
                           >
                            <ProveedorComponent :idProveedor="item.id" :idCategoria="$route.params.idCategoria"
                                :categoria="$route.params.categoria" :status="1" :logo="item.logo" :name="item.name + ' ' + index">
                            </ProveedorComponent>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row v-if="$route.params.status == 2"  v-for="(item, index) of 5" :key="item.id" style="border-bottom: solid 1px grey; cursor: pointer;" @click="$router.push('/detalle/producto/PP01/1')">
                <v-col cols="3" md="2">
                    <img class="__img_pro" :src="require('@/assets/' + img)" alt="">
                </v-col>
                <v-col cols="">
                    <h2 class="__title_2">ZAPATILLAS SPORT DE PVC</h2>
                    <p class="__desktop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque facere incidunt id numquam minima est officia nemo dolor, voluptas assumenda possimus earum laboriosam consequatur.</p>
                    <h1 class="mt-5 __price_2">PRECIO: $ 4,8</h1>
                    <h1 class="__code_2">MOQ 200</h1>
                </v-col>
                <v-col cols="3" md="2">
                    <img class="__img_pro" :src="require('@/assets/proveedor.png')" alt=""></img>
                    <h3>PROVEEDOR {{index + 1}}</h3>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import productsThumComponent from '@/components/productsThum.vue';
import ProveedorComponent from "@/components/Proveedor.vue";
export default {
    name: 'DetalleProductoComponent',
    components: {
        productsThumComponent,
        ProveedorComponent
    },
    data() {
        return {
            img: 'zapatilla-1.png',
            fotos: [
                { id: "PP01", img: 'zapatilla-1.png' },
                { id: "PP01", img: 'zapatilla-2.png' },
                { id: "PP01", img: 'zapatilla-3.png' },
                { id: "PP01", img: 'zapatilla-1.png' },
                { id: "PP01", img: 'zapatilla-2.png' },
                { id: "PP01", img: 'zapatilla-3.png' },
                

            ],
            fotosM: [
                { id: "PP01", img: 'zapatilla-1.png' },
                { id: "PP01", img: 'zapatilla-2.png' },
                { id: "PP01", img: 'zapatilla-3.png' },

            ],
            productos: [
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-1.png', price: '3.8', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-2.png', price: '4.7', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-3.png', price: '5.1', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-1.png', price: '3.8', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-2.png', price: '4.7', code: '00' },
                { id: 'PP01', idProveedor: 'C01', image: 'zapatilla-3.png', price: '5.1', code: '00' },

               
            ],
            proveedores: [
                { id: 'P01', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P02', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P03', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P04', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P05', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P06', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P07', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P08', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P09', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P10', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
                { id: 'P11', proveedor: 'C01', name: 'Proveedor', logo: 'proveedor.png' },
   

            ]
        }
    },
}
</script>

<style lang="css" scoped>
.__img_pro {
    max-width: 80%;
    margin: auto;
}

.__img_pro_pro {
    max-width: 40%;
    margin: auto;
    display: flex;
}

.__col_left {
    border-right: solid 1px rgb(106, 106, 106);
}

.__price {
    font-size: 30px !important;
    color: rgb(39, 39, 39);
}

.__code {
    font-size: 20px !important;
    color: rgb(90, 90, 90);
}

.__price_2 {
    font-size: 20px !important;
    color: rgb(39, 39, 39);
}

.__code_2 {
    font-size: 20px !important;
    color: rgb(90, 90, 90);
}

.__div_pro_de {
    padding: 50px 0px;
}

.__div_pro {
    height: 80px;
    padding: 10px;
    border-radius: 10px;
    border: solid 1px rgb(186, 186, 186);
    margin-bottom: 10px;
    display: flex;
    cursor: pointer;
}

.__desktop {
    display: block;
}

.__mobil {
    display: none;
}

@media(max-width: 800px) {
    .__col_left {
        border-right: solid 0px rgb(106, 106, 106);
    }

    .__desktop {
        display: none;
    }

    .__mobil {
        display: block;
    }

    .__div_pro_de {
        text-align: center;
    }
}
</style>