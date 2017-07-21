<template>
  <div id="recom">
    <top></top>
    <div class="content_wrapper">
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for='item in slider'>
            <img :src="item.picUrl" alt="" width="100%" height="100%">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="mod_list">
        <h2>电台</h2>
        <ul>
          <li v-for="item in radioList">
            <router-link :to="{name:'recom'}">
              <div>
                <img :src="item.picUrl" alt="">
              </div>
              <div class="list_info">{{item.Ftitle}}</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="hot">
        
      </div>
    </div>
    
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
      slider: [],
      radioList:[]
    }
  },
  mounted: function() {
    if(this.userId == 0) {
      this.$router.push('/login');
      return;
    }
    Indicator.open();
    this.load();
  },
  methods: {
    load: function() {
      this.$http.get('../../recom.json', {

        }, 
        {emulateJSON: true}
        )
      .then((res) => {
        Indicator.close();
        console.log(res.body.data);
        this.slider = res.body.data.slider;
        this.radioList = res.body.data.radioList;
      });
    }
  },
  components: {
    top
  }
}
</script>

<style lang="less">
  #recom {
    .swipe {
      height: 130px;
    }
    .mod_list {
      margin-top: 10px;
      margin-left: 10px;
      h2 {
        font-weight: normal;
      }
      li {
        width: 50%;
        float:left;
        padding-right: 8px;
        margin-bottom: 10px;
        overflow: hidden;
        list-style: none;
        box-sizing: border-box;
        img {
          width: 100%;
        }
        a {
          background-color: white;
          display: block;
        }
        .list_info {
          padding:3px 5px;
          font-size: 14px;
        }
      }
    }
  }
</style>















