<template>
    <div>
        <div class=" __banner">
            <v-row dense>
                <v-col cols="9" class="__col_left">
                    <h1>COTIZA <span style="color: #FF7B18">GRATIS</span> TU FLETE Y ADUANA A TU PAÍS</h1>
                </v-col>
                <v-col cols="3">
                    <v-btn x-large color="#FF7B18" class="__btn_clic" elevation="0" dark block>
                        Clic AQUÍ
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerCalculadoraComponent"
}
</script>

<style lang="css" scoped>
.__banner {
    background-color: #0D5084;
    color: white;
    border-radius: 15px;
    padding: 20px 20px;
}

.__col_left {
    padding: 15px 0px 15px 40px !important;
}

.__btn_clic {
    font-size: 34px !important;
    font-weight: bold;
    display: block;
    height: 100% !important;
}
</style>