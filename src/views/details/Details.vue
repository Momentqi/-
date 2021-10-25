<template>
  <div id="details">
<details-navbar  class="details-nav"/>
<Scroll class="center" ref="scroll">
<details-swiper :topImages="topImages"  @swiperImageLoad="swiperImageLoad" />
<details-good :goods="goods"/>
<details-info :detailsinfo="detailsinfo" @imageLoad="imageLoad" />
</Scroll>
<DetailsGoodsAction @addCart="addCarts"></DetailsGoodsAction>
  </div>
</template>

<script>
import DetailsNavbar from './childComps/DetailsNavbar'
import DetailsSwiper from './childComps/DetailsSwiper'
import DetailsGood from './childComps/DetailsGood.vue'
import DetailsInfo from './childComps/DetailsInfo.vue'
import DetailsGoodsAction from './childComps/DetailsGoodsAction.vue'
 
import {getDetails,Goods} from 'network/details'
import Scroll from "components/common/scroll/Scroll";
import {itemListenerMixin,backTopMixin} from 'common/mixin.js'
import {mapActions} from 'vuex'

export default {
 name:"Details",
 data(){
     return {
         goods_id:null,
         topImages:[],
         goods:{},
         detailsinfo:''
     }
 },
 mixins:[itemListenerMixin,backTopMixin],
 components:{
    DetailsNavbar,
    DetailsSwiper,
    DetailsGood,
    DetailsInfo,
    DetailsGoodsAction,
    Scroll,
 },
  activated(){
        this.$refs.scroll.refresh()
    },  
 created(){
     this.goods_id = this.$route.query.goods_id
     getDetails(this.goods_id).then(res => {
         const data = res.data.message
          this.topImages =  data.pics.map(item => item.pics_mid)
         // 2.2创建商品信息的对象
       this.goods = new Goods(data.goods_price,data.goods_name)
       //2.3商品的详情数据
        this.detailsinfo =data.goods_introduce;
     })
 },
 methods:{
      ...mapActions(['addCart']),
     addCarts(){
          const product = {}
    // console.log(this);
        product.image = this.topImages[0];
        product.title = this.goods.name;
        product.price = this.goods.price;
        product.goods_id = this.goods_id;//商品的唯一标识
  this.addCart(product).then(res => {
    this.$toast.show(res, 1500)
  })
     },
      swiperImageLoad() {
       this.$refs.scroll.refresh()
      },
      imageLoad() {
        this.$refs.scroll.refresh()
    },
 }
}
</script>

<style scoped>
    #details{
        position: relative;
        z-index: 7;
        background-color: #fff;
        height: 100vh;
    }
    .details-nav{
        position: relative;
        z-index: 8;
        background-color: #fff;
    }
    .center{
        height: calc(100% - 44px);
    }
</style>