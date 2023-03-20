import axios from "axios";

export const dealsModule = {
  state: () => ({
    deals: [],
    selectedType: "Все типы",
    searchQuery: "",
  }),

  // GETTERS

  getters: {
    filteredDealsProducts(state) {
      let filteredDealsProducts = state.deals;
      if (state.selectedType !== "Все типы") {
        filteredDealsProducts = filteredDealsProducts.filter(
          (product) => product.sale_type === state.selectedType
        );
      }

      if (state.searchQuery !== "") {
        filteredDealsProducts = filteredDealsProducts.filter((product) =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
      return filteredDealsProducts;
    },

    getIsInDeal(state) {
      return state.isInDeal;
    },
  },

  // MUTATIONS

  mutations: {
    addToDeals(state, product) {
      if (!state.deals.includes(product)) {
        state.deals.push(product);
        sessionStorage.setItem("deals", JSON.stringify(state.deals));
      } else {
        return;
      }
    },
    removeFromDeals(state, product) {
      state.deals = state.deals.filter((p) => p.id !== product.id);
    },

    setDealProducts(state, products) {
      state.deals = products;
      sessionStorage.setItem("deals", JSON.stringify(state.deals));
    },

    setIsInDeal(state, isInDeal) {
      state.isInDeal = isInDeal;
    },

    setSelectedDealType(state, type) {
      state.selectedType = type;
    },
    setFavoriteDealQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },

  // ACTIONS

  actions: {
    addToDeal({ commit, state }, product) {
      const index = state.favorites.findIndex((p) => p.id === product.id);
      const isInDeal = state.deals.some((p) => p.id === product.id);
      if (index === -1) {
        commit("addToDeals", product);
      }
    },
    getDealProducts({ commit }) {
      const deals = JSON.parse(sessionStorage.getItem("deals")) || [];
      commit("setDealProducts", deals);
    },
  },

  namespaced: true,
};
