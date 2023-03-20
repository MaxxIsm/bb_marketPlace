<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Item from "../components/Item.vue";

export default {
  components: {
    Item,
  },

  computed: {
    ...mapGetters({
      filteredDealsProducts: "deals/filteredDealsProducts",
      getIsInDeal: "/deals/getIsInDeal",
    }),
  },

  methods: {
    ...mapMutations({
      removeFromDeals: "deals/removeFromDeals",
    }),
    ...mapActions({
      getDealProducts: "deals/getDealProducts",
    }),
  },
  created() {
    this.getDealProducts();
  },
};
</script>

<template>
  <div>
    <h1>Сделки</h1>
    <Item
      v-for="product in filteredDealsProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped></style>
