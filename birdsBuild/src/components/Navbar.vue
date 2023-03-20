<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  methods: {
    filterByType(type) {
      this.$store.commit("setSelectedType", type);
      this.setSelectedFavoriteType(type);
      this.setSelectedDealType(type);
    },
    ...mapMutations({
      setSearchQuery: "setSearchQuery",
      setSelectedFavoriteType: "favorite/setSelectedFavoriteType",
      setFavoriteSearchQuery: "favorite/setFavoriteSearchQuery",
      setSelectedDealType: "deals/setSelectedDealType",
      setFavoriteDealQuery: "deals/setFavoriteDealQuery",
    }),
    updateSearchValue() {
      // this.setSearchQuery(this.$store.state.searchQuery);
      // this.setFavoriteSearchQuery(this.$store.favorite.state.searchQuery);
    },
  },
};
</script>

<template>
  <div>
    <div class="navbar"></div>
    <div class="navbar__btns">
      <button
        @click="$router.push('/favorite')"
        :class="{ activePath: $route.path === '/favorite' }"
      >
        Избранное
      </button>
      <button
        @click="$router.push('/')"
        :class="{ activePath: $route.path === '/' }"
      >
        Склад
      </button>
      <button
        @click="$router.push('/deals')"
        :class="{ activePath: $route.path === '/deals' }"
      >
        Сделки
      </button>
    </div>
    <div class="all">
      <div class="navbar__filter_btns">
        <button
          @click="filterByType('Все типы')"
          :class="{ activeType: $store.state.selectedType === 'Все типы' }"
        >
          Все типы
        </button>
        <button
          @click="filterByType('Аукцион')"
          :class="{ activeType: $store.state.selectedType === 'Аукцион' }"
        >
          Аукцион
        </button>
        <button
          @click="filterByType('Разовая продажа')"
          :class="{
            activeType: $store.state.selectedType === 'Разовая продажа',
          }"
        >
          Разовая продажа
        </button>
      </div>
      <div class="navbar_search_button">
        <input
          type="text"
          v-model="$store.state.searchQuery"
          placeholder="Поиск..."
        />
        <div class="search_btn">
          <button @click.prevent="updateSearchValue" class="input_search_btn">
            <div class="search_btn_bg"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 50px;
  background-color: #e0e3ee;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 20px;
}
.navbar__btns {
  display: flex;
  justify-content: flex-end;
  gap: 7px;
}
.all {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 20px;
}
.activePath {
  background-color: #e0e3ee !important;
}
.navbar__btns > button:active {
  border: none;
}
.navbar__btns > button {
  width: 86px;
  height: 50px;
  border: none;
  cursor: pointer;
  background: none;
  border-radius: 10px;
  color: #2d3b87;
  font-weight: 500;
}

.navbar__filter_btns {
  display: flex;
  height: 40px;
  gap: 12px;
  border: 1px solid #e0e3ee;
  padding: 12px;
  border-radius: 10px;
}
.navbar__filter_btns > button {
  background: none;
  border: none;
  color: #969dc3;
}

.activeType {
  color: #2d3b87 !important;
  font-weight: 500;
}

input {
  width: 274px;
  border: none;
  font-size: 14px;
}

input:focus {
  outline: #2d3b87;
}
.navbar_search_button {
  border: 1px solid #e0e3ee;
  padding: 5px;
  border-radius: 10px;
  display: flex;
}
.search_btn > button {
  background: none;
  border: none;
}
.search_btn {
  background: #2d3b87;
}

.search_btn_bg {
  background: url("../assets/button/search_btn.svg");
  width: 15px;
  height: 15px;
}

.search_btn {
  display: flex;
  display: flex;
  background-repeat: no-repeat;
  justify-content: center;
  align-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
</style>
