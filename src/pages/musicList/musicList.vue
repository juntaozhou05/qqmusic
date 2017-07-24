<template>
  <div class="musicList">
    <div class="back" @click="back">返回</div>
    <div class="top">
      <img :src="topImg" alt="" >
      <div class="detail">
        <div class="title">好听的个人专辑</div>
        <div>2010-7-24 更新</div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in list">
        <div class="left">
          <img class="img_url" :src="item.img_url" alt="" width="60" height="60">
        </div>
        <div class="right">
          <div class="name">{{item.name}}</div>
          <div class="singer">{{item.singer}} / {{item.type}}</div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="bottom">
        <img src="http://y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg" alt="" width="24" height="24" class="music_logo"><span class="load">下载榜单歌曲</span>
      </div>
    </footer>
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
    if(this.userId == 0) {
      this.$router.push('/login');
      return;
    }
    Indicator.open();
    this.load();
  },
  methods: {
    load: function() {
      this.$http.get('../../musiclist.json', {
        }, 
        {emulateJSON: true}
        )
      .then((res) => {
        Indicator.close();
        console.log(res.body.music);
        this.list = res.body.music.list;
        this.topImg = this.list[0].img_url;
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
  .musicList {
    .back {
      position: absolute;
      top:0;
      left:0;
      color: white;
      font-size: 16px;
      z-index: 11;
      width: 100%;
      background-color: rgba(0,0,0,0.5);
      padding:10px;
    }
    .top {
      height: 300px;
      overflow: hidden;
      position: relative;
      .detail {
        position: absolute;
        bottom: 0;
        left:0;
        color:white;
        font-size: 15px;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        padding:10px 20px 10px;
        .title {
          font-size: 22px;
        }
      }
    }
    .list {
      background-color: rgb(160, 128, 96);
      padding-bottom: 60px;
      .item {
        display: flex;
        padding:5px;
        color:white;
        .right {
          margin-left: 10px;
          .name {
            font-size: 16px;
            padding:5px 0;
          }
          .singer {
            font-size: 13px;
          }
        }
      }
    }
    .footer {
      position: fixed;
      bottom: 0;
      left:0;
      text-align: center;
      width: 100%;
      background-color: rgb(160, 128, 96);
      padding:10px 0;
      .bottom {
        display: inline-block;
        width: 94%;
        text-align: center;
        border:1px solid white;
        padding:8px 0;
        color:white;
        font-size: 16px;
        border-radius: 3px;
        img {
          vertical-align: bottom;
          margin-right: 10px;
        }
      }
    }
  }
</style>