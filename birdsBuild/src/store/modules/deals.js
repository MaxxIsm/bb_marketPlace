import axios from "axios";

export const dealsModule = {
  state: () => ({
    deals: [],
    selectedType: "Все типы",
    searchQuery: "",
    isInDeal: false,
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
      state.deals.push(product);
      localStorage.setItem("deals", JSON.stringify(state.deals));
    },
    removeFromDeals(state, product) {
      state.deals = state.deals.filter((p) => p.id !== product.id);
    },

    setDealProducts(state, products) {
      state.deals = products;
      localStorage.setItem("deals", JSON.stringify(state.deals));
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
      const isInDeal = state.deals.some((p) => p.id === product.id);
      if (!isInDeal) {
        commit("addToDeals", product);
        commit("setIsInDeal", true);
      } else {
        commit("setIsInDeal", true);
      }
    },
    getDealProducts({ commit }) {
      const deals = JSON.parse(localStorage.getItem("deals")) || [];
      commit("setDealProducts", deals);
    },
  },

  namespaced: true,
};
