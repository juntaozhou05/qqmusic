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
            <router-link :to="{name:'musicList'}">
              <div>
                <img :src="item.picUrl" alt="">
                <span class="icon_play"></span>
              </div>
              <div class="list_info">{{item.Ftitle}}</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mod_hotList">
        <h2>热门歌单</h2>
        <ul>
          <li v-for="item in songList">
            <router-link :to="{name:'recom'}">
              <div>
                <img :src="item.picUrl" alt="">
              </div>
              <div class="desc">{{item.songListDesc}}</div>
              <div class="author">{{item.songListAuthor}}</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="find">去客户端发现更多好音乐 ></div>
      <div class="pc">查看电脑版网页</div>
      <div class="footer_logo">
        <img src="../../static/img/logo_footer.png" alt="">
      </div>
      <footer class="footer">
        <p class="copy">
          Copyright © 1998 - 2016 Tencent. All Rights Reserved.
        </p>
        <p>
           联系电话：0755-86013388 QQ群：55209235
        </p>
      </footer>
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
      radioList:[],
      songList: []
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
        this.songList = res.body.data.songList;
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
        position: relative;
        img {
          width: 100%;
        }
        .icon_play {
          background-image: url(../../static/img/list_sprite.png);
          background-repeat: no-repeat;
          background-size: 24px 60px;
          position: absolute;
          z-index: 10;
          height: 24px;
          bottom: 48px;
          right: 15px;
          width: 24px;
          background-position: 0 0;
        }
        a {
          background-color: white;
          display: block;
          padding-bottom: 10px;
        }
        .list_info {
          padding:3px 5px;
          font-size: 14px;
        }
      }
    }
    .mod_hotList {
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
          padding-bottom: 5px;
        }
        .desc {
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          font-size: 14px;
          padding:0 3px;
        }
        .author {
          padding:0 3px;
        }
      }
    }
    .find {
      font-size: 14px;
      text-align: center;
      color:gray;
      margin-top: 10px;
    }
    .pc {
      text-align: center;
      font-size: 14px;
      margin-top: 20px;
    }
    .footer_logo {
      text-align: center;
      margin-top: 17px;
      img {
        width: 82px;
      }
    }
    .footer {
      text-align: center;
      color:gray;
      padding-bottom: 30px;
      margin-top: 5px;
    }
  }
</style>















