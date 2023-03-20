<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isFavorite: false,
    };
  },

  methods: {
    ...mapActions({
      addFavorite: "favorite/addFavorite",
    }),
    addToFavorite() {
      this.addFavorite(this.product);
      this.isFavorite = !this.isFavorite;
    },
    ...mapMutations({
      addToDeals: "deals/addToDeals",
    }),
    addDeals() {
      this.addToDeals(this.product);
    },
  },

  computed: {
    ...mapGetters({
      getIsInDeal: "deals/getIsInDeal",
    }),
  },
};
</script>

<template>
  <div class="container">
    <div class="left">
      <div class="left_img">
        <img :src="product.img" alt="" />
      </div>
      <div class="description">
        <div class="product_type">{{ product.sale_type }}</div>
        <div class="product_name">{{ product.name }}</div>
        <div class="location">
          <div class="location_img"></div>
          <div>{{ product.location }}</div>
        </div>
        <div class="item_seller">
          <div class="item_seller_name">Продавец</div>
          <div class="item_seller_type">{{ product.seller }}</div>
        </div>
        <div class="item_type">
          <div class="item_type_color">Вид товара</div>
          <div class="product_item_color">{{ product.item_type }}</div>
        </div>
        <div class="text">
          {{ product.text }}
        </div>
      </div>
    </div>
    <div class="price">
      <div class="item_price">{{ product.price }} Р</div>
      <div class="item_amount">
        <div>Количество</div>
        <div style="color: #2d3b87">{{ product.item_amount }} шт</div>
      </div>
      <div class="price_per_item">
        <div>Стоимость за штуку</div>
        <div style="color: #2d3b87">{{ product.price_per_item }} Р</div>
      </div>
      <div class="price__btns">
        <button @click="addDeals" class="deal_btn" :disabled="getIsInDeal">
          {{ getIsInDeal ? "Оплатить" : "Добавить в сделки" }}
        </button>
        <button
          @click="addToFavorite"
          class="like_btn"
          :class="{ active: isFavorite }"
        >
          <div class="like_btn_img"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  border: 1px solid #e0e3ee;
  background-color: #ffff;
  margin-bottom: 40px;
  border-radius: 20px;
  margin-top: 40px;
}
.description {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
img {
  margin-right: 10px;
  width: 256px;
  height: 256px;
}

.location {
  color: #616ca5;
}
.left {
  display: flex;
  padding-left: 20px;
  padding-top: 20px;
  width: 852px;
}
.price {
  width: 314px;
  padding: 20px;
  height: 366px;
  display: flex;
  flex-direction: column;
  border-left: #e0e3ee 1px solid;
}

img {
  border-radius: 20px;
}
.item_price {
  font-size: 20px;
  color: #2d3b87;
}
.item_amount {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.price_per_item {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.price__btns {
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
}
.like_btn {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f5f9;
  border: none;
  border-radius: 10px;
}
.like_btn_img {
  width: 16px;
  height: 14px;
  background: url("../assets/button/like_btn.svg");
}
.deal_btn {
  height: 50px;
  width: 212px;
  background: #f4f5f9;
  border: none;
  color: #2d3b87;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
}
.text {
  font-size: 13px;
}
.product_name {
  font-size: 15px;
  color: #2d3b87;
}
.description {
  font-size: 13px;
}
.item_seller {
  display: flex;
  gap: 4px;
}
.item_seller_name {
  color: #969dc3;
}
.item_seller_type {
  color: #2d3b87;
}
.item_type {
  background: #f4f5f9;
  width: 124px;
  padding: 8px;
}
.item_type_color {
  color: #969dc3;
}
.product_item_color {
  color: #616ca5;
}
.text {
  color: #2d3b87;
}
.product_type {
  color: #969dc3;
  margin-bottom: 15.5px;
}
.product_name {
  margin-bottom: 25px;
  font-size: 15px;
  font-weight: 500;
}
.location {
  display: flex;
}
.location_img {
  width: 10px;
  height: 14px;
  background-image: url("../assets/button/location_btn.svg");
  background-repeat: no-repeat;
  margin-right: 4px;
}

.active {
  background: #2d3b87;
}
</style>
