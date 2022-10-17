<template>
    <div class="__div_thum" @click="$router.push(`/detalle/producto/${idProducto}`)">
        <div>

            <div class="__cont_img" :style="`height: ${height}`">
                <img class="__img_product" :src="require('@/assets/' + image)" alt="" />
            </div>

        </div>
        <div class="text-center">
            <div class="__price_product">$ {{price}}</div>
            <div>{{code}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "productsThumComponent",
    props: {
        image: '',
        price: "",
        code: "",
        idProducto: '',
        height: ''
    },
    methods: {

    }
}
</script>

<style lang="css" scoped>
.__price_product {
    font-weight: bold;
    color: black;
}

.__div_thum {
    cursor: pointer;
}

.__div_thum:hover .__cont_img {
    background-color: rgb(238, 238, 238);
    border-radius: 10px;
}

.__cont_img {
    width: 100%;

    border: solid 1px rgb(216, 216, 216);
    border-radius: 10px;
    display: flex;

}

.__img_product {
    max-width: 80%;
    margin: auto;


}
</style>