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
      <div class="times">
        <span class="current">{{current}}</span>
        <div class="totalTime" ref="totalTime">
          <div class="currentLine" ref="currentLine"></div>
        </div>
        <span class="max">{{max}}</span>
      </div>
      <div class="playControl">
        <div class="pre"></div>
        <div class="play" v-if="!play" @click="playFn('play')"></div>
        <div class="pause" v-if="play" @click="pauseFn()"></div>
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
      play: false,
      max: '0:00',
      current: '0:00',
      settime: 1,
      currentsec: 0,
      currentmin: 0,
      type: '',
      timer: '',
      jsonAdre: ''
    }
  },
  mounted: function() {
    Indicator.open();
    this.type = this.$route.query.type;
    if(this.type == 1) {
      this.jsonAdre = '../../musicOne.json';
    }else if(this.type == 4){
      this.jsonAdre = '../../anime.json';
    }else {
      this.jsonAdre = '../../musicList.json'
    };
    this.load();
  },
  methods: {
    load: function() {
      this.$http.get(this.jsonAdre, {
        }, 
        {emulateJSON: true}
        )
      .then((res) => {
        Indicator.close();
        console.log(res.body.music);
        this.list = res.body.music.list;
        this.img_url = this.list[this.id - 1].img_url;

        this.name = this.list[this.id - 1].name;
        this.singer = this.list[this.id - 1].singer;
        this.url = this.list[this.id - 1].url;
      });
    },
    back: function() {
      this.$refs.audio.pause();
      this.play = false;
      clearInterval(this.timer);
      window.history.go(-1);
      Indicator.open();
    },
    //播放
    playFn: function(val) {
      if(val == 'play') {
        this.$refs.audio.play();
        this.play = true;
        let maxTime = Math.floor(this.$refs.audio.duration);
        let min = Math.floor(maxTime/60);
        let sec = maxTime%60;
        if(sec < 10) {
          this.max = min + ":0" + sec;
        }else {
          this.max = min + ":" + sec;
        }
        this.timer = setInterval(()=>{
          this.settime++ ;
          this.currentsec++;
          if(this.currentsec < 10) {
            this.current = this.currentmin + ":0" + this.currentsec;
          }
          if(this.currentsec >= 10) {
            this.current = this.currentmin + ":" + this.currentsec;
          }
          if(this.currentsec == 60) {
            this.currentmin++;
            this.currentsec = 0;
            this.current = this.currentmin + ":00";
          }
          if(this.settime < maxTime) {
            this.$refs.currentLine.style.width =( this.settime + 1) +"px";
          }
        },1000);
      }
    },
    //暂停
    pauseFn: function() {
      this.$refs.audio.pause();
      this.play = false;
      clearInterval(this.timer);
    }
  },
  computed: {
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
      padding:10px;
      box-sizing: border-box;
    }
    .cover {
      width: 100%;
      height: 98%;
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
        width: 100%;
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
      .times {
        position: absolute;
        bottom: 90px;
        width: 100%;
        z-index: 55;
        text-align: center;
        .max,.current {
          color:white;
          opacity: 0.6;
        }
        .totalTime {
          width: 70%;
          height: 2px;
          background: #eaeaea;
          display: inline-block;
          vertical-align: middle;
          margin:0 5px;
          opacity: 0.6;
          .currentLine {
            width: 0;
            background:#31c27c;
            height: 2px;
          }
        }
      } 
    }
  }
</style>