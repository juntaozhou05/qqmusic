<template>
  <div class="musicDetail">
    <div class="back" @click="back">返回</div>
    <div class="cover">
      <img :src="img_url" alt="" class="background">
      <div class="imgCover">
        <div class="name">{{name}}</div>
        <div class="singer">{{singer}}</div>
        <div class="img">
          <img src="../../static/img/cd-mine.png" alt="" width="250">
          <img :src="img_url" alt="" class="img_url cir" :class="{paused: !play, running: play}" width="165" ref="imgUrl">
        </div> 
      </div>
      <div class="lyric">暂无相关歌词</div>
      <audio :src="url" ref="audio"></audio>
      <div class="playControl">
        <div class="pre"></div>
        <div class="play" v-if="!play" @click="playFn"></div>
        <div class="pause" v-if="play" @click="pauseFn"></div>
        <div class="next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Indicator } from 'mint-ui';
export default {
  data () {
    return {
      id: this.$route.query.id,
      list: [],
      img_url: '',
      name: '',
      singer: '',
      url: '',
      play: false
    }
  },
  mounted: function() {
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
        for(let i=0;i<this.list.length;i++) {
          if(this.id == this.list[i].id) {
            this.img_url = this.list[i].img_url;
            this.name = this.list[i].name;
            this.singer = this.list[i].singer;
            this.url = this.list[i].url;
          }
        }
      });
    },
    back: ()=>{
      window.history.go(-1);
      Indicator.open();
    },
    //播放
    playFn: function() {
      this.$refs.audio.play();
      this.play = true
    },
    //暂停
    pauseFn: function() {
      this.$refs.audio.pause();
      this.play = false;
    }

  }
}
</script>

<style lang="less">
  .musicDetail {
    width: 100%;
    height: 100%;
    .back {
      position: absolute;
      top:0;
      left:0;
      color: white;
      font-size: 16px;
      z-index: 15;
      width: 100%;
      background-color: rgba(0,0,0,0.5);
      padding:10px;
    }
    .cover {
      width: 100%;
      height: 100%;
      .imgCover {
        position: fixed;
        top:0;
        left:0;
        z-index: 11;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        color:white;
        font-size: 20px;
        text-align: center;
        padding-top: 50px;
        .name {
          font-size: 24px;
          font-weight: bold;
        }
        .img {
          margin-top: 20px;
          .img_url {
            border-radius: 50%;
            position: absolute;
            top:179px;
            left:78px;
          }
        }
        .cir {
          animation:circle 20s infinite linear;
          position: relative;
        }
        .paused {
          animation-play-state: paused;
        }
        .running {
          animation-play-state: running;
        }
        @keyframes circle{
          0%{ transform:rotate(0deg); }
          100%{ transform:rotate(-360deg); }
        }
      }
      .background {
        height: 100%;
        filter: blur(19px);
      }
      .lyric {
        font-size: 18px;
        color:#4ec37e;
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: 130px;
        left: 0;
        z-index: 12;
      }
      .playControl {
        position: absolute;
        bottom: 0;
        left:0;
        height: 80px;
        border-top: 1px solid #eaeaea;
        width: 100%;
        display: flex;
        padding:20px;
        box-sizing: border-box;
        justify-content: space-around;
        z-index: 50;
        .pre {
          background-image: url(../../static/img/player.png);
          top: 4px;
          left: 0;
          width: 19px;
          height: 20px;
          background-position: 0 -30px;
        }
        .play {
          background-image: url(../../static/img/player.png);
          top: 5px;
          left: 76px;
          width: 21px;
          height: 29px;
          background-position: 0 0;
          margin-top: -4px;
        }
        .pause {
          background-image: url(../../static/img/player.png);
          top: 0;
          left: 76px;
          width: 21px;
          height: 29px;
          background-position: -30px 0;
          margin-top: -4px;
        }
        .next {
          background-image: url(../../static/img/player.png);
          top: 4px;
          left: 148px;
          width: 19px;
          height: 20px;
          background-position: 0 -52px;
        }
      }
    }
    
  }
</style>