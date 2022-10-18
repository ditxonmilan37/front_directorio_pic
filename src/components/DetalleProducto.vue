<template>
    <div>
        <v-card elevation="0" class="pa-5">
            <v-row dense>
                <v-col cols="12" md="7" class="__col_left">

                    <v-row>
                        <v-col cols="4" md="2">

                            <img v-for="item of fotos" :key="item.id" @click="img = item.img"
                                class="__img_pro __div_pro __desktop" :src="require('@/assets/' + item.img)" alt="">

                            <img v-for="item of fotosM" :key="item.id" @click="img = item.img"
                                class="__img_pro __div_pro __mobil" :src="require('@/assets/' + item.img)" alt="">


                        </v-col>
                        <v-col cols="8" md="10">
                            <img class="__img_pro" :src="require('@/assets/' + img)" alt="">
                        </v-col>
                    </v-row>

                </v-col>
                <v-col cols="12" md="5" class="__div_pro_de pl-8">

                    <h1>ZAPATILLAS NIKE</h1>
                    <h1 class="mt-5 __price">$ 4,8</h1>
                    <h1 class="__code">MOQ 200</h1>

                    <v-btn elevation="0" x-large class="mt-15" color="#218AD8" @click="$router.push('/carrito')" dark
                        block>AGREGAR AL PEDIDO</v-btn>

                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'DetalleProductoComponent',
    data() {
        return {
            img: 'zapatilla-1.png',
            fotos: [
                { id: "PP01", img: 'zapatilla-1.png' },
                { id: "PP01", img: 'zapatilla-2.png' },
                { id: "PP01", img: 'zapatilla-3.png' },
                { id: "PP01", img: 'zapatilla-1.png' },
                { id: "PP01", img: 'zapatilla-2.png' },

            ],
            fotosM: [
                { id: "PP01", img: 'zapatilla-1.png' },
                { id: "PP01", img: 'zapatilla-2.png' },
                { id: "PP01", img: 'zapatilla-3.png' },

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

.__col_left {
    border-right: solid 1px rgb(106, 106, 106);
}

.__price {
    font-size: 50px !important;
    color: rgb(39, 39, 39);
}

.__code {
    font-size: 40px !important;
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