import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsCategoria: [
      {
        id: "C01", text: "Zapatillas", link: "#", img: "icon_zapatillas.svg", products: [
          { id: "P01", code: "MOQ 300", price: "4,8", image: "zapatilla-1.png" },
          { id: "P01", code: "MOQ 400", price: "3,2", image: "zapatilla-2.png" },
          { id: "P01", code: "MOQ 200", price: "5,4", image: "zapatilla-3.png" },
        ]
      },
      {
        id: "C02", text: "Bisutería", link: "#", img: "icon_bisuteria.svg", products: [
          { id: "P01", code: "MOQ 300", price: "4,8", image: "bisuteria-1.jpg" },
          { id: "P01", code: "MOQ 400", price: "3,2", image: "bisuteria-2.jpg" },
          { id: "P01", code: "MOQ 200", price: "5,4", image: "bisuteria-3.jpg" },
        ]
      },
      {
        id: "C03", text: "Máquinas para Imprenta", link: "#", img: "icon_imprenta.svg", products: [
          { id: "P01", code: "MOQ 300", price: "4,8", image: "imprenta-1.jpg" },
          { id: "P01", code: "MOQ 400", price: "3,2", image: "imprenta-2.jpg" },
          { id: "P01", code: "MOQ 200", price: "5,4", image: "imprenta-3.jpg" },
        ]
      },
      {
        id: "C04", text: "Ropa", link: "#", img: "icon_ropa.svg", products: [
          { id: "P01", code: "MOQ 300", price: "4,8", image: "ropa-1.jpg" },
          { id: "P01", code: "MOQ 400", price: "3,2", image: "ropa-2.jpg" },
          { id: "P01", code: "MOQ 200", price: "5,4", image: "ropa-3.jpg" },
        ]
      },
      {
        id: "C05", text: "Repuestos de autos", link: "#", img: "icon_repuesto.svg", products: [
          { id: "P01", code: "MOQ 300", price: "4,8", image: "repuesto-1.jpg" },
          { id: "P01", code: "MOQ 400", price: "3,2", image: "repuesto-2.jpg" },
          { id: "P01", code: "MOQ 200", price: "5,4", image: "repuesto-3.jpg" },
        ]
      },
      {
        id: "C06", text: "Iluminación", link: "#", img: "icon_iluminacion.svg", products: [
          { id: "P01", code: "MOQ 300", price: "4,8", image: "iluminacion-1.jpg" },
          { id: "P01", code: "MOQ 400", price: "3,2", image: "iluminacion-2.jpg" },
          { id: "P01", code: "MOQ 200", price: "5,4", image: "iluminacion-3.jpg" },
        ]
      },
      {
        id: "C07", text: "Árticulos Deportivos", link: "#", img: "icon_deportivo.svg", products: [
          { id: "P01", code: "MOQ 300", price: "4,8", image: "deportivo-1.jpg" },
          { id: "P01", code: "MOQ 400", price: "3,2", image: "deportivo-2.jpg" },
          { id: "P01", code: "MOQ 200", price: "5,4", image: "deportivo-3.jpg" },
        ]
      },
      {
        id: "C08", text: "Carteras y Bolsos", link: "#", img: "icon_bolsos.svg", products: [
          { id: "P01", code: "MOQ 300", price: "4,8", image: "bolsos-1.jpg" },
          { id: "P01", code: "MOQ 400", price: "3,2", image: "bolsos-2.jpg" },
          { id: "P01", code: "MOQ 200", price: "5,4", image: "bolsos-3.jpg" },
        ]
      },
    ],

    enlacesPromo: [
      { id: "EP01", text: "COTIZA TU FLETE Y ADUANA", link: "" },
      { id: "EP02", text: "CURSO DE IMPORTACIONES", link: "" },
      { id: "EP03", text: "CASILLERO EN CHINA", link: "" }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
