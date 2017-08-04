<template>
  <div id="musicOne">
    <div class="back" @click="back">返回</div>
    <div class="top">
      <img :src="topImg" alt="" width="100%">
      <div class="title">一人一招牌歌</div>
    </div>
    <div class="list">
      <router-link :to="{name:'musicDetail',query: {id:item.id, type:1}}" class="item" v-for="item,index in list">
        <div class="left">{{index+1}}</div>
        <div class="right">
          <div class="top">{{item.name}}</div>
          <div class="singer">{{item.singer}} · {{item.type}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import Vue from 'vue';
export default {
  data () {
    return {
      topImg: '',
      list: []
    }
  },
  mounted: function() {
    Indicator.open();
    this.load();
  },
  methods: {
    back: ()=>{
      window.history.go(-1);
      Indicator.open();
    },
    load: function() {
      this.$http.get('../../musicOne.json', {
        }, 
        {emulateJSON: true}
        )
      .then((res) => {
        Indicator.close();
        console.log(res.body.music);
        this.topImg = res.body.music.topImg;
        this.list = res.body.music.list;
      });
    }
  }
}
</script>

<style lang="less">
  #musicOne {
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
    .top {
      position: relative;
      .title {
        position: absolute;
        bottom: 0px;
        left:0px;
        font-size: 25px;
        width: 100%;
        height: 180px;
        line-height: 280px;
        color:white;
        background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgba(0,0,0,0.0)), to(rgba(0, 0, 0, 1)));
        padding-left: 20px;
        box-sizing: border-box;
      }
    }
    .list {
      background: rgb(125, 36, 37);
      color:white;
      font-size: 15px;
      .item {
        display: flex;
        padding:5px;
        color:white;
        .left {
          width: 15%;
          text-align: center;
          line-height: 45px;
        }
        .right {
          width: 85%;
          padding:5px 0;
          border-bottom:1px solid rgba(255,255,255,.15);
          .top {
            font-size: 17px;
          }
          .singer {
            color:rgba(255,255,255,.6);
          }
        }
      }
      
    }
  }
</style>















