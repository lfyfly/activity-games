<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.rotary-table {
  .title {
    text-align: center;
    margin: 20px;
  }
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  img {
    display: block;
  }
  .table-container {
    position: relative;
    .table {
      width: 100%;
      position: relative;
      transition: transform 6s ease;
      transform-origin: center;
      overflow: hidden;


      img {
        width: 100%;
      }
      .prize {
        width: 50%; // background: rgba(0, 0, 0, .1);
        position: absolute;
        top: 0;
        bottom: 50%;
        left: 25%;
        transform-origin: bottom center;
        text-align: center;
        font-size: 20px;
        color: #fff;
        padding-top: 10%;
      }
    }
    .center-round {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 26%;
      .round {
        width: 100%;
      }
      .pointer {
        position: absolute;
        width: 20%;
        left: 50%;
        bottom: 97%;
        transform: translateX(-50%);
      }
    }
  }
  .result{
    text-align: center;
    line-height: 3;
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.rotary-table
  h3.title vue-实现轮盘抽奖
  div.table-container
    .table(:style="{transform:`rotate(${turns*360+allDeg}deg)`, 'transition-duration': `${duration/1000}s`}")
      img(src="/static/rotary-table/转盘.png")
      .prize(
        v-for="(prize,i) in prizes",
        :class="'prize-'+i",
        :style="{transform:`rotate(${i*360/prizes.length}deg)`}"
      ) {{prize}}


    .center-round(@click="run")
      img.round(src="/static/rotary-table/指针圆盘.png")
      img.pointer(src="/static/rotary-table/指针.png")
  .result
    span.color 抽检结果:&nbsp;
    span {{result?result:'未开奖'}}
</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'rotary-table',
  data() {
    return {
      msg: 'this is from rotary-table.vue',
      duration: 6000,// 持续时间
      result: '', // 抽奖结果
      prizes: [
        '谢谢参与',
        '二等奖',
        '欢迎再来',
        '优秀奖',
        '三等奖',
        '一等奖',
      ],

      turns: 0, // 圈速
      isRuning: false,
      randomDeg: 0,
      allDeg: 0,

    }
  },
  methods: {
    run() {
      if (this.isRuning) return
      this.result = '' // 每次开始转的时候，清空抽奖结果
      // this.randomDeg = Math.ceil(Math.random() * 360)
      this.randomDeg = 45
      this.allDeg += this.randomDeg
      this.turns += 10
      this.isRuning = true
      setTimeout(() => {
        this.isRuning = false
        let rotateDeg = this.allDeg % 360
        let onePrizeDeg = 360 / this.prizes.length // 一个奖项对应的角度范围
        console.log(onePrizeDeg,rotateDeg,((onePrizeDeg / 2 + rotateDeg)%360))

        let resultIndex = this.prizes.length - Math.floor(((onePrizeDeg / 2 + rotateDeg)%360) / onePrizeDeg)
        // console.log(resultIndex)
        this.result = this.prizes[resultIndex]
      }, this.duration)
    }
  },
}
</script>
