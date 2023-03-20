<script>
import { mapGetters, mapActions } from "vuex";
import Item from "../components/Item.vue";
export default {
  components: {
    Item,
  },

  computed: {
    ...mapGetters({
      filteredFavoriteProducts: "favorite/filteredFavoriteProducts",
    }),
  },
  methods: {
    ...mapActions({
      getFavoriteProducts: "favorite/getFavoriteProducts",
    }),
  },
  created() {
    this.getFavoriteProducts();
  },
};
</script>

<template>
  <div>
    <h1>Избранное</h1>
    <Item
      v-for="product in filteredFavoriteProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped></style>
