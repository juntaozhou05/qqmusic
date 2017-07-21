<template>
  <div id="head">
    <header>
      <img src="../../static/img/logo.png" alt="" class="music_logo">
      <a href="javascript:;" class="btn_download">下载APP</a>
    </header>
    <nav class="mod_nav">
      <router-link :to="{name:'recom'}" :class="{ current: recomCurrent }">推荐</router-link>
      <router-link :to="{name:'toplist'}" :class="{ current: toplistCurrent }">排行榜</router-link>
      <router-link :to="{name:'search'}" :class="{ current: searchCurrent }">搜索</router-link>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data () {
    return {
      recomCurrent: true,
      toplistCurrent: false,
      searchCurrent: false
    }
  },
  mounted: function() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less">
  #head {
    header {
      height: 44px;
      background-color: #31c27c;
      position: relative;
      .music_logo {
        float:left;
        display: block;
        width: 90px;
        height: 25px;
        margin:9px 0 0 10px;
      }
      .btn_download {
        position: absolute;
        display: inline-block;
        right: 10px;
        top:8px;
        height: 28px;
        padding:0 12px;
        line-height: 28px;
        border-radius: 99px;
        font-size: 14px;
        background: #149c5a;
        color: #fff;
      }
    }
    .mod_nav {
      display: flex;
      background-color: #fff;
      justify-content:space-around;
      a {
        position: relative;
        display: block;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-align: center;
        font-size: 16px;
        width: 100%;
      }
      .current {
        color:#31c27c;
        border-bottom: 2px solid #31c27c;
      }
    }
  }
</style>















