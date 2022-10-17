<template>
    <div>
        <v-row dense class="__div_pro">
            <v-col cols="1">
                <v-checkbox color="green"></v-checkbox>
            </v-col>
            <v-col cols="1">
                <img class="__img_pro" src="@/assets/zapatilla-1.png" alt="">
            </v-col>
            <v-col class=" pt-3" cols="1">
                <p>ZAPATILLAS</p>
                <p class="__text_pri"><b>MOQ 300</b></p>
                <p>Valor Unit.:</p>
                <p class="__text_pri"><b>6.00 USD</b></p>
            </v-col>
            <v-col class=" pt-3" cols="2">
                <p>Cantidad por Caja:</p>
                <p class="__text_pri"><b>200</b></p>
                <p>Costo Total de la Caja:</p>
                <p class="__text_pri"><b>1,200.00 USD</b></p>
            </v-col>
            <v-col class=" pt-3" cols="3">
                <p>Logística y Aduana para Enviar a Perú</p>
                <p class="__text_pri"><b>900.00 USD</b></p>
                <p>Costo Unitario puesto en Perú</p>
                <p class="__text_pri"><b>10.50 USD</b></p>
            </v-col>
            <v-col class=" pt-3" cols="4">
                <p class="">Costo Total de la Caja Puesto en Perú</p>
                <p>Incluyendo Aduana y Flete de la Caja</p>
                <p class="__text_t5">2,100.00 USD</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'PedidoComponent'
}
</script>

<style lang="css" scoped>
.__img_pro {
    max-width: 100%;
}

.__div_pro {
    font-size: 12px !important;
    font-weight: 500;
    color: rgb(56, 56, 56);
    border: solid 2px rgb(181, 181, 181);
    border-radius: 10px;
}

.__div_pro p {
    line-height: 4px;
}

.__text_t5 {
    font-size: 27px;
    padding-top: 10px;
    color: rgb(51, 51, 51);
    font-weight: bold;
}

.__text_pri {
    font-weight: 700;
    color: rgb(52, 52, 52);
    font-size: 14px;
}
</style>