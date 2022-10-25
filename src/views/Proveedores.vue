<template>
    <div>
        <v-container>

            <div class="__div_pro">
                <div>
                    IMPORTACIÓN <br> DE {{$route.params.categoria}}
                </div>
            </div>

            <div class="mt-5">
                <h2 class="__text_directorio">Directorio de proveedores de {{$route.params.categoria}}</h2>
            </div>

            <v-row dense class="mt-5">
                <v-col cols="6" md="2" v-for="(item, index) of proveedores" :key="item.id"
                    v-if="item.proveedor == $route.params.idCategoria">
                    <ProveedorComponent :idProveedor="item.id" :idCategoria="$route.params.idCategoria"
                        :categoria="$route.params.categoria" :status="1" :logo="item.logo" :name="item.name + ' ' + index">
                    </ProveedorComponent>
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
import ProveedorComponent from "@/components/Proveedor.vue";
import BannerCalculadoraComponent from "@/components/BannerCalculadora.vue";
import EnlacesPromoComponent from "@/components/EnlacesPromo.vue";
export default {
    name: "Proveedores",
    components: {
        ProveedorComponent,
        BannerCalculadoraComponent,
        EnlacesPromoComponent
    },
    data() {
        return {
            proveedores: [
                { id: 'P01', proveedor: 'C01', name: 'Proveedor', logo: 'adidas.jpg' },
                { id: 'P02', proveedor: 'C01', name: 'Proveedor', logo: 'nike.jpg' },
                { id: 'P03', proveedor: 'C01', name: 'Proveedor', logo: 'puma.jpg' },
                { id: 'P04', proveedor: 'C01', name: 'Proveedor', logo: 'reebok.jpg' },
                { id: 'P05', proveedor: 'C01', name: 'Proveedor', logo: 'converse.jpg' },
                { id: 'P06', proveedor: 'C01', name: 'Proveedor', logo: 'skechers.jpg' },
                { id: 'P07', proveedor: 'C01', name: 'Proveedor', logo: 'vans.jpg' },
                { id: 'P08', proveedor: 'C01', name: 'Proveedor', logo: 'fila.jpg' },
                { id: 'P09', proveedor: 'C01', name: 'Proveedor', logo: 'balance.jpg' },
                { id: 'P10', proveedor: 'C01', name: 'Proveedor', logo: 'salomon.jpg' },
                { id: 'P11', proveedor: 'C01', name: 'Proveedor', logo: 'mizuno.jpg' },
                { id: 'P12', proveedor: 'C01', name: 'Proveedor', logo: 'saucony.jpg' },
                { id: 'P13', proveedor: 'C02', name: 'Proveedor', logo: 'cartier.jpg' },
                { id: 'P14', proveedor: 'C02', name: 'Proveedor', logo: 'chopard.jpg' },
                {
                    id: 'P15', proveedor: 'C02', name: 'Proveedor', logo: 'chowtaifook.jpg'
                },
                { id: 'P16', proveedor: 'C02', name: 'Proveedor', logo: 'damiani.jpg' },
                { id: 'P17', proveedor: 'C02', name: 'Proveedor', logo: 'graff.jpg' },
                { id: 'P18', proveedor: 'C03', name: 'Proveedor', logo: 'canon.jpg' },
                { id: 'P19', proveedor: 'C03', name: 'Proveedor', logo: 'hp.jpg' },
                { id: 'P20', proveedor: 'C03', name: 'Proveedor', logo: 'epson.jpg' },
                { id: 'P21', proveedor: 'C03', name: 'Proveedor', logo: 'brother.jpg' },
                { id: 'P22', proveedor: 'C04', name: 'Proveedor', logo: 'hermes.jpg' },
                { id: 'P23', proveedor: 'C04', name: 'Proveedor', logo: 'chanel.jpg' },
                { id: 'P24', proveedor: 'C04', name: 'Proveedor', logo: 'vuitton.jpg' },
                { id: 'P25', proveedor: 'C04', name: 'Proveedor', logo: 'gucci.jpg' },
                { id: 'P26', proveedor: 'C04', name: 'Proveedor', logo: 'dior.jpg' },
                { id: 'P27', proveedor: 'C04', name: 'Proveedor', logo: 'versace.jpg' },
                { id: 'P28', proveedor: 'C04', name: 'Proveedor', logo: 'fendi.jpg' },
                { id: 'P29', proveedor: 'C04', name: 'Proveedor', logo: 'prada.jpg' },
                { id: 'P30', proveedor: 'C04', name: 'Proveedor', logo: 'laurent.jpg' },
                { id: 'P31', proveedor: 'C04', name: 'Proveedor', logo: 'balenciaga.png' },
                { id: 'P32', proveedor: 'C04', name: 'Proveedor', logo: 'armani.jpg' },
                { id: 'P33', proveedor: 'C04', name: 'Proveedor', logo: 'givenchy.jpg' },
                { id: 'P34', proveedor: 'C04', name: 'Proveedor', logo: 'valentino.png' },
                { id: 'P35', proveedor: 'C04', name: 'Proveedor', logo: 'burberry.jpg' },
                { id: 'P36', proveedor: 'C04', name: 'Proveedor', logo: 'gabanna.jpg' },
                { id: 'P37', proveedor: 'C05', name: 'Proveedor', logo: 'ate.jpg' },
                { id: 'P38', proveedor: 'C05', name: 'Proveedor', logo: 'boch.jpg' },
                { id: 'P39', proveedor: 'C05', name: 'Proveedor', logo: 'brembo.jpg' },
                { id: 'P40', proveedor: 'C05', name: 'Proveedor', logo: 'continental.jpg' },
                { id: 'P41', proveedor: 'C05', name: 'Proveedor', logo: 'dayco.jpg' },
                { id: 'P42', proveedor: 'C05', name: 'Proveedor', logo: 'gates.jpg' },
                { id: 'P43', proveedor: 'C05', name: 'Proveedor', logo: 'hella.jpg' },
                { id: 'P44', proveedor: 'C05', name: 'Proveedor', logo: 'kyb.jpg' },
                { id: 'P45', proveedor: 'C05', name: 'Proveedor', logo: 'magneti.jpg' },
                { id: 'P46', proveedor: 'C05', name: 'Proveedor', logo: 'mannfilter.jpg' },
                { id: 'P47', proveedor: 'C05', name: 'Proveedor', logo: 'ntn.jpg' },
                { id: 'P48', proveedor: 'C06', name: 'Proveedor', logo: 'tradittion.png' },
                { id: 'P49', proveedor: 'C06', name: 'Proveedor', logo: 'abus.png' },
                { id: 'P50', proveedor: 'C06', name: 'Proveedor', logo: 'artec.png' },
                { id: 'P51', proveedor: 'C06', name: 'Proveedor', logo: 'aeg.jpg' },
                { id: 'P52', proveedor: 'C06', name: 'Proveedor', logo: 'albert.jpg' },
                { id: 'P53', proveedor: 'C06', name: 'Proveedor', logo: 'almut.png' },
                { id: 'P54', proveedor: 'C06', name: 'Proveedor', logo: 'aluminor.png' },
                { id: 'P55', proveedor: 'C06', name: 'Proveedor', logo: 'arcchio.jpg' },
                { id: 'P56', proveedor: 'C06', name: 'Proveedor', logo: 'arlo.png' },
                { id: 'P57', proveedor: 'C06', name: 'Proveedor', logo: 'artemide.jpg' },
                { id: 'P58', proveedor: 'C06', name: 'Proveedor', logo: 'astro.jpg' },
                { id: 'P59', proveedor: 'C06', name: 'Proveedor', logo: 'axo.png' },
                { id: 'P60', proveedor: 'C07', name: 'Proveedor', logo: 'adidas.jpg' },
                { id: 'P61', proveedor: 'C07', name: 'Proveedor', logo: 'nike.jpg' },
                { id: 'P62', proveedor: 'C07', name: 'Proveedor', logo: 'puma.jpg' },
                { id: 'P63', proveedor: 'C07', name: 'Proveedor', logo: 'reebok.jpg' },
                { id: 'P64', proveedor: 'C08', name: 'Proveedor', logo: 'kors.jpg' },
                { id: 'P65', proveedor: 'C08', name: 'Proveedor', logo: 'longchamp.jpg' },
                { id: 'P66', proveedor: 'C08', name: 'Proveedor', logo: 'coach.jpg' },
                { id: 'P67', proveedor: 'C08', name: 'Proveedor', logo: 'spade.jpg' },
                { id: 'P68', proveedor: 'C08', name: 'Proveedor', logo: 'rebecca.jpg' },
                { id: 'P69', proveedor: 'C08', name: 'Proveedor', logo: 'tory.jpg' },
                { id: 'P70', proveedor: 'C08', name: 'Proveedor', logo: 'vera.jpg' },
                { id: 'P71', proveedor: 'C08', name: 'Proveedor', logo: 'dooney.jpg' },
                { id: 'P72', proveedor: 'C08', name: 'Proveedor', logo: 'jacobs.jpg' },
                { id: 'P73', proveedor: 'C08', name: 'Proveedor', logo: 'vuitton.jpg' },
                { id: 'P74', proveedor: 'C08', name: 'Proveedor', logo: 'gucci.jpg' },
                { id: 'P75', proveedor: 'C08', name: 'Proveedor', logo: 'dior.jpg' },
                { id: 'P76', proveedor: 'C08', name: 'Proveedor', logo: 'versace.jpg' },

            ]
        }
    },
}
</script>

<style lang="css" scoped>
.__text_directorio {
    color: rgb(87, 87, 87);
}

.__div_pro {
    background-color: #0D5084;
    color: white;
    font-size: 40px;
    font-weight: 600;
    line-height: 45px;
    padding: 80px 50px;
    text-transform: uppercase;
    border-radius: 10px;
}

@media(max-width: 800px) {
    .__div_pro {
        background-color: #0D5084;
        color: white;
        font-size: 20px;
        font-weight: 600;
        line-height: 25px;
        padding: 40px 50px;
        text-transform: uppercase;
        border-radius: 10px;
    }

    .__text_directorio {
        color: rgb(87, 87, 87);
        font-size: 14px;
    }
}
</style>