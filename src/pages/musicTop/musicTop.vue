<template>
  <div class="musicTop">
    <div class="back" @click="back">返回</div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import top from '../../components/top/top.vue';
import { Swipe, SwipeItem } from 'mint-ui';
import { Indicator } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data () {
    return {
      list: '',
      topImg: ''
    }
  },
  mounted: function() {
    Indicator.open();
    this.load();
  },
  methods: {
    load: function() {
      this.$http.get('../../musicTop.json', {
        }, 
        {emulateJSON: true}
        )
      .then((res) => {
        Indicator.close();
        console.log(res.body.music);
        this.list = res.body.music.list;
      });
    },
    back: ()=>{
      window.history.go(-1);
      Indicator.open();
    },
  }
}

</script>

<style lang="less">
  .musicTop {
    .back {
      position: absolute;
      top:0;
      left:0;
      color: white;
      font-size: 16px;
      z-index: 11;
      width: 100%;
      padding:10px;
      box-sizing: border-box;
    }
    
  }
</style>