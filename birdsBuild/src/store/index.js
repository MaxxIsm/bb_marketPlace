import { createStore } from "vuex";
import axios from "axios";
import { favoriteModule } from "./modules/favorite";
import { dealsModule } from "./modules/deals";

export default createStore({
  state: {
    products: [],
    selectedType: "Все типы",
    searchQuery: "",
  },

  // getters

  getters: {
    allProducts(state) {
      return state.products;
    },
    filteredProducts(state) {
      let filteredProducts = state.products;
      if (state.selectedType !== "Все типы") {
        filteredProducts = filteredProducts.filter(
          (product) => product.sale_type === state.selectedType
        );
      }

      if (state.searchQuery !== "") {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
      return filteredProducts;
    },
  },

  // mutation

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedType(state, type) {
      state.selectedType = type;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },

  // actions

  actions: {
    async getProducts({ commit }) {
      try {
        const res = await axios.get(
          "https://6410ca3c95656eab41c1d95c.mockapi.io/products"
        );
        const products = res.data;
        commit("setProducts", products);
      } catch (e) {
        console.log(e);
      }
    },
    updateSearchValue({ commit }, searchQuery) {
      commit("setSearchQuery", searchQuery);
    },
  },

  // modules

  modules: {
    favorite: favoriteModule,
    deals: dealsModule,
  },
});
