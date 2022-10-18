<template>
    <div>
        <v-container>
            <v-card elevation="0" class="pa-5">
                <v-toolbar elevation="0" color="white" class="mb-5">
                    <v-toolbar-title>
                        <h2 class="__text_pe">Pedido</h2>
                    </v-toolbar-title>
                    <v-spacer>

                    </v-spacer>
                    <v-btn elevation="0" color="#218AD8" class="__desktop" @click="$router.back()" x-large dark>Seguir
                        Comprando</v-btn>
                    <v-btn elevation="0" color="#218AD8" class="__mobil" @click="$router.back()" small dark>Seguir
                        Comprando</v-btn>
                </v-toolbar>

                <PedidoComponent class="mb-2"></PedidoComponent>
                <PedidoComponent class="mb-2"></PedidoComponent>
                <PedidoComponent class="mb-2"></PedidoComponent>
                <PedidoComponent class="mb-2"></PedidoComponent>
                <PedidoComponent class="mb-2"></PedidoComponent>
                <PedidoComponent class="mb-2"></PedidoComponent>

            </v-card>

        </v-container>

    </div>
</template>

<script>
import PedidoComponent from "@/components/Pedido.vue"
export default {
    name: "Carrito",
    components: {
        PedidoComponent
    }
}
</script>

<style lang="css" scoped>
.__text_pe {
    color: rgb(88, 88, 88)
}

.__desktop {
    display: block;
}

.__mobil {
    display: none;
}

@media(max-width: 800px) {
    .__desktop {
        display: none;
    }

    .__mobil {
        display: block;
    }

    .__text_pe {
        color: rgb(88, 88, 88);
        font-size: 22px !important;
    }
}
</style>