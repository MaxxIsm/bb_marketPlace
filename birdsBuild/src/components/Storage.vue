<script>
import { mapGetters, mapActions } from "vuex";
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
  computed: {
    ...mapGetters({
      filteredProducts: "filteredProducts",
    }),
    // selectedType() {
    //   return this.$store.state.selectedType;
    // },
  },
  methods: {
    ...mapActions({
      getProducts: "getProducts",
    }),
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<template>
  <div>
    <h1>Склад</h1>
    <Item
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped></style>
