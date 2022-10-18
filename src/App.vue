<template>
  <v-app class="__app_main">
    <v-app-bar height="70" class="__title_appbar" fixed app color="#0D5084" dark elevation="0">
      <v-container>
        <v-toolbar height="70" color="#0D5084" dark elevation="0">
          <v-toolbar-title class="__title_toolbar" @click="$router.push('/')">CALCULADORA DE FLETES <br>E IMPUESTOS DE
            ADUANA
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="__desktop" v-for="item of dataMenu" :key="item.id" elevation="0"
            @click="$router.push(item.link)" color="#0D5084" small>
            {{item.text}}</v-btn>
          <v-btn rounded small elevation="0" color="#0D5084" class="__btn_login __desktop">Iniciar
            sesión
          </v-btn>

          <div class="text-center __mobil">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn elevation="0" color="primary" dark v-bind="attrs" v-on="on">
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in dataMenu" :key="index" link :to="item.link">
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

        </v-toolbar>
      </v-container>
    </v-app-bar>
    <v-container class="__div_category_main __desktop">
      <v-row>
        <v-col lg="4" md="3" col="6" xs="6">


          <v-row justify="space-around">
            <v-menu rounded offset-y>
              <template v-slot:activator="{ attrs, on }">
                <v-btn elevation="0" class="__btn_category_main" color="white" v-bind="attrs" v-on="on">
                  <v-icon class="mr-3">mdi-menu-open</v-icon> Todas las categorias <v-icon class="ml-3">mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-card elevation="0">
                <CategoryComponent class="pt-5"></CategoryComponent>
              </v-card>

            </v-menu>
          </v-row>
        </v-col>
        <v-col lg="8" md="9" col="6" xs="6">

          <v-toolbar height="48" elevation="0" color="white">
            <v-spacer></v-spacer>
            <v-text-field dense rounded filled class="__form_search_main" placeholder="Buscar proveedores...">
            </v-text-field>
            <v-btn color="#0D5084" class="__btn_search_main" dark elevation="0">Buscar</v-btn>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="__div_category_main __mobil">
      <v-row dense>
        <v-col cols="7">


          <v-row dense justify="space-around">
            <v-menu rounded offset-y>
              <template v-slot:activator="{ attrs, on }">
                <v-btn elevation="0" class="__btn_category_main" color="white" v-bind="attrs" v-on="on">
                  Todas las categorias <v-icon class="ml-1">mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-card elevation="0">
                <CategoryComponent class="pt-5"></CategoryComponent>
              </v-card>

            </v-menu>
          </v-row>
        </v-col>
        <v-col cols="5">
          <v-btn class="__btn_pedido" elevation="0" color="white" @click="$router.push('/carrito')" small>MI PEDIDO
          </v-btn>
          <v-btn class="__btn_pedido" elevation="0" color="white" small>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

        </v-col>
      </v-row>
    </v-container>

    <v-main class="__main_app">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import CategoryComponent from '@/components/Category.vue';
export default {
  name: "App",
  components: {
    CategoryComponent
  },

  data: () => ({
    //
    dataMenu: [
      { id: 'M01', text: "INICIO", icon: "", link: "/" },
      { id: 'M02', text: "Casillero en China", icon: "", link: "" },
      { id: 'M03', text: "Curso de Importaciones", icon: "", link: "" },
      { id: 'M04', text: "Contacto", icon: "", link: "" },
    ]

  }),
};
</script>

<style  lang="css">
.__app_main {
  padding-top: 70px;
}

.__title_toolbar {
  font-size: 12px !important;
  cursor: pointer;
}

.__btn_login {
  border: solid 2px white !important;
}

.__btn_category_main {
  text-transform: none !important;
  color: rgb(57, 57, 57) !important;
  margin-top: 20px;
}

.__form_search_main {
  border-radius: 25px 0px 0px 25px !important;
  float: left;
  width: 400px !important;
  margin-top: auto !important;
}

.__btn_search_main {
  border-radius: 0px 25px 25px 0px !important;
  height: 40px !important;
  text-transform: none !important;
  padding: 0px 40px !important;
}

.__div_category_main {
  height: 120px !important;
  padding: 40px 12px !important;
}

.__main_app {
  background-color: #F2F3F7;
  padding: 12px !important;
}

.__mobil {
  display: none !important;
}

@media(max-width: 800px) {
  .__desktop {
    display: none !important;
  }

  .__mobil {
    display: flex !important;
  }

  .__main_app {
    background-color: #F2F3F7;
    padding: 0px !important;
  }

  .__btn_category_main {
    text-transform: none !important;
    color: rgb(57, 57, 57) !important;
    margin-top: 0px;
  }

  .__div_category_main {
    height: 60px !important;
    padding: 20px 0px !important;
  }

  .__btn_pedido {
    box-shadow: 0px 1px 16px -5px rgba(0, 0, 0, 0.25) !important;
  }
}
</style>
