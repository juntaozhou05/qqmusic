<template>
  <div id="musicOne">
    <div class="back" @click="back">返回</div>
    <div class="top">
      <img :src="topImg" alt="" width="100%">
      <div class="title">{{title}}</div>
    </div>
    <div class="list">
      <router-link :to="{name:'musicDetail',query: {id:item.id, type:type, listId:listId}}" class="item" v-for="item,index in list">
        <div class="left">{{index+1}}</div>
        <div class="right">
          <div class="top">{{item.name}}</div>
          <div class="singer">{{item.singer}} · {{item.type}}</div>
        </div>
      </router-link>
    </div>
    <footer class="footer">
      <div class="bottom">
        <img src="http://y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg" alt="" width="24" height="24" class="music_logo"><span class="load">下载榜单歌曲</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import Vue from 'vue';
export default {
  data () {
    return {
      topImg: '',
      title: '一人一招牌歌',
      type:1,
      listId:1,
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
      let jsonAdre = '';
      let listId = this.$route.query.listId;
      this.listId = this.$route.query.listId;
      if(listId == -1) {
        jsonAdre = '../../musicOne.json';
      }else if(listId == 0) {
        jsonAdre = '../../music0.json';
      }else if(listId == 1) {
        this.title = "经典歌曲";
        jsonAdre = '../../music1.json';
      }else if(listId == 2) {
        jsonAdre = '../../musicOne.json';
      }else if(listId == 3) {
        jsonAdre = '../../musicOne.json';
      }else if(listId == 4) {
        this.title = "动漫金曲";
        jsonAdre = '../../anime.json';
        this.type = 4;
      }else if(listId == 5) {
        jsonAdre = '../../musicOne.json';
      }
      this.$http.get(jsonAdre, {
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
      padding-bottom: 55px;
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
    .footer {
      position: fixed;
      bottom: 0;
      left:0;
      text-align: center;
      width: 100%;
      background-color: #7d2425;
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















