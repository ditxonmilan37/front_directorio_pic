<template>
    <div>
        <v-card elevation="0" class="__div_promo">
            <v-card-text class="__text_promo">
                {{text}}
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "EnlacesPromoComponent",
    props: {
        text: ""
    }
}
</script>

<style lang="css" scoped>
.__div_promo {
    height: 200px;
    padding: 20px 20px 20px 40px;
    display: flex;
    align-items: center;
    border: solid 1px rgb(196, 196, 196) !important;
}

.__text_promo {
    text-align: right;
    font-size: 36px;
    line-height: 40px;
    font-weight: bold;
    color: #0D5084 !important;
}

@media(max-width: 800px) {
    .__text_promo {
        text-align: center;
        font-size: 24px;
        line-height: 30px;
        font-weight: bold;
        color: #0D5084 !important;
    }

    .__div_promo {
        height: 120px;
        padding: 20px 20px 20px 40px;
        display: flex;
        align-items: center;
        border: solid 1px rgb(196, 196, 196) !important;
    }
}
</style>