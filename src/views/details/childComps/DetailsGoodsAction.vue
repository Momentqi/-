<template>
  <div>
     <van-goods-action class="DetailGoodsAction">
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
  </div>
</template>

<script>
export default {
    name:"DetailSGoodsAction",
    methods: {
        addToCart() {
            this.$emit('addCart')
        }
    },
}
</script>

<style scoped>
.DetailGoodsAction{
    z-index: 9;
}
</style>