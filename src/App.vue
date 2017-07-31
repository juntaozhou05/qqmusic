<template>
  <div class="mainCover">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      header: '头条'
    }
  }
}
</script>

<style lang="less">
* {
  margin:0;
  padding:0;
}
html {
  width: 100%;
  height: 100%;
}
body {
  background: #f4f4f4;
  font: 12px/1.5 "hiragino sans gb",arial;
  color: black;
  width: 100%;
  height: 100%;
}
a {
  color:black;
  text-decoration: none;
  font-weight: normal;
}
textarea {
  resize:none;
}
input, textarea {
  outline: none;
  border-radius: 2px;
}
.mainCover {
  width: 100%;
  height: 100%;
}
.icon {
  border-radius: 50%;
  border:2px solid gray;
}
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
header {
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background: red;
    color:white;
    font-weight: bold;
    font-size: 20px;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
  }
.backImg {
    position: fixed;
    top:12px;
    left:5px;
    z-index: 10;
  }
</style>
