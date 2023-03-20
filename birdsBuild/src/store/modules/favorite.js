import axios from "axios";

export const favoriteModule = {
  state: () => ({
    favorites: [],
    selectedType: "Все типы",
    searchQuery: "",
  }),

  // GETTERS

  getters: {
    favoriteProducts(state) {
      return state.favorites;
    },

    filteredFavoriteProducts(state) {
      let filteredFavoriteProducts = state.favorites;
      if (state.selectedType !== "Все типы") {
        filteredFavoriteProducts = filteredFavoriteProducts.filter(
          (product) => product.sale_type === state.selectedType
        );
      }

      if (state.searchQuery !== "") {
        filteredFavoriteProducts = filteredFavoriteProducts.filter((product) =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
      return filteredFavoriteProducts;
    },
  },

  // MUTATIONS

  mutations: {
    // ADDS

    addFavorite(state, product) {
      if (!state.favorites.includes(product)) {
        state.favorites.push(product);
        sessionStorage.setItem("favorites", JSON.stringify(state.favorites));
      } else {
        this.commit("removeFavorite", product);
      }
    },

    // REMOVES
    removeFavorite(state, product) {
      const index = state.favorites.find((p) => p.id === product.id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
        sessionStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },

    // SETS
    setFavoriteProducts(state, products) {
      state.favorites = products;
      sessionStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    setSelectedFavoriteType(state, type) {
      state.selectedType = type;
    },
    setFavoriteSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },

  // ACTIONS
  actions: {
    // post
    addFavorite({ commit, state }, product) {
      const index = state.favorites.findIndex((p) => p.id === product.id);
      if (index === -1) {
        commit("addFavorite", product);
      } else {
        commit("removeFavorite", product);
      }
    },

    getFavoriteProducts({ commit }) {
      const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
      commit("setFavoriteProducts", favorites);
    },
  },
  namespaced: true,
};
