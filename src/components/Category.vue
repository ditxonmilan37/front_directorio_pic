<template>
    <div>
        <v-btn v-for="item of $store.state.itemsCategoria" :key="item.id"
            @click="$router.push(`/proveedores/${item.id}/${item.text}`)" class="__btn_category" elevation="0" large
            color="#0000" block>

            <v-row>
                <v-col cols="2">
                    <img :src="require('@/assets/' + item.img)" class="mr-5 __img_icon" alt="" />
                </v-col>
                <v-col cols="8">
                    {{item.text}}
                </v-col>
                <v-col cols="2">
                    <v-icon right class="ml-3">
                        mdi-menu-right
                    </v-icon>
                </v-col>
            </v-row>



        </v-btn>
    </div>
</template>

<script>
export default {
    name: "CategoryComponent",
    data() {
        return {

        }
    },
}
</script>

<style lang="css" >
.__btn_category {
    text-transform: none !important;
    color: rgb(107, 107, 107) !important;
    text-align: left !important;
    display: flex !important;
    padding-right: 30px !important;
    padding-left: 40px !important;
    border-radius: 0px !important;

}

.__img_icon {
    max-width: 100%;
}

.__btn_category .v-btn__content {
    display: flex;
    justify-content: flex-start;


}

@media(max-width: 800px) {
    .__btn_category {
        text-transform: none !important;
        color: rgb(107, 107, 107) !important;
        text-align: left !important;
        display: flex !important;
        padding-right: 10px !important;
        padding-left: 10px !important;
        border-radius: 0px !important;

    }
}
</style>