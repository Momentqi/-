<template>
<div>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
    <!-- <van-swipe :autoplay="2000" >
  <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
          <img :src="item.image"  @load="imageLoad"/>
      </a>
  </van-swipe-item> 
 </van-swipe> -->
 </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return{
            isLoad:false
          }
        }
      }
    },

    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    },
  }
</script>

<style scoped>

</style>
