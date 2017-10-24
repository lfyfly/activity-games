<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.test-container {
  text-align: center;
  width: 100%;
  position: absolute;
  top: 60px;
  bottom: 0;
  overflow: auto;
  .test-inner {
    position: absolute;
    overflow: hidden;

    left: 50%;
    transform: translateX(-50%);
    max-width: 500px;
    min-width: 320px;
    margin: 0 auto;
  }

  .btn {
    position: absolute;
    top: 10px;
    line-height: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0 10px;

    &.rule-btn {
      left: 10px;
    }
    &.prize-btn {
      right: 10px;
    }
  }
  .prize-tip {
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    top: 40px;
    left: 10px;
    right: 10px;
    height: 200px;
    background: rgba(0, 0, 0, .8);
    color: #ccc;
    z-index: 11;
    h3 {
      line-height: 2;
      font-size: 25px;
    }
    p {
      line-height: 1.6;
      font-size: 20px;
    }
  }
  .prize-content {
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, .8);
    color: #ccc;
    z-index: 10;
    font-size: 16px;
    line-height: 1.8;
    padding: 20px;
    box-sizing: border-box;
    top: 0;
    bottom: 0;
    overflow: auto;
  }
  .rule-content {
    box-sizing: border-box;
    padding: 20px;
    position: absolute;
    background: rgba(0, 0, 0, .8);
    color: #ccc;
    left: 20px;
    right: 20px;
    z-index: 9;
    bottom: 100px;
    line-height: 2;
  }
  .close {
    position: absolute;
    right: 10px;
    font-size: 40px;
    top: 0;
    line-height: 1;
  }
  .title {
    line-height: 5;
  }
  font-size: 14px;
  .test {
    display: inline-block;
    padding: 10px;
    width: 100px;
    box-sizing: border-box;
    height: 100px;
    background: rgba(0, 0, 0, .2);
    vertical-align: top;
  } // test-1 需要配合interval定时器
  .test-1 {
    transition: transform .8s;
    &.rotate45 {
      transform: rotate(-45deg);
    }
  } // test-2
  @keyframes test2 {
    50% {
      transform: rotate(-45deg)
    }
  }
  .test-2 {
    animation: test2 1s infinite;
    animation-direction: alternate;
  } // test-3
  @keyframes test3 {
    50% {
      transform: translateY(-20px)
    }
  }
  .test-3 {
    animation: test3 1s infinite;
    animation-direction: alternate;
  } // test-3
  @keyframes test4 {
    50% {
      left: 0;
      transform: translate(0, -50%);
      top: 50%;
    }
    100% {
      left: 100%;
      transform: translate(-100%, -100%);
      top: 100%;
    }
  }
  .test-4 {
    position: absolute;
    top: 0;
    left: 100%;
    transform: translateX(-100%);
    padding: 0;
    line-height: 30px;
    height: 30px;
    animation: test4 4s forwards;
  }

  @keyframes shake {
    25% {
      transform: rotate(-5deg)
    }
    50% {
      transform: rotate(0deg)
    }
    75% {
      transform: rotate(5deg)
    }
  }
  .test-5 {
    overflow: hidden;
    background: #fff;
    position: relative;
    z-index: -1;
  }
  .egg {
    display: inline-block;
    width: 25%;
    transform-origin: bottom center;
    vertical-align: bottom;
    img.egg-img {
      width: 100%;
      display: block;
    }
    &.animation {
      animation: shake 1s forwards linear infinite;
    }
    &.break-animation {
      animation: shake .2s forwards linear infinite;
    }
  } // 底下滑上来
  .slide-top-enter-active,
  .slide-top-leave-active {
    transition: transform 1s
  }
  .slide-top-enter,
  .slide-top-leave-to/* .fade-leave-active in below version 2.1.8 */
  {
    transform: translateY(200%);
  }


  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 1s
  }
  .slide-left-enter,
  .slide-left-leave-to/* .fade-leave-active in below version 2.1.8 */
  {
    transform: translateX(100%);
  }

  .slide-bottom-enter-active,
  .slide-bottom-leave-active {
    transition: transform .5s
  }
  .slide-bottom-enter,
  .slide-bottom-leave-to/* .fade-leave-active in below version 2.1.8 */
  {
    transform: translateY(-200%);
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.test-container(:class="{'is-pc':!isMobile}")
  .test-inner(:class="{'is-pc':!isMobile}")
    transition(name="slide-bottom")
      .prize-tip(v-if="currPrizeIndex!==false")
        .close(@click="currPrizeIndex=false") ×
        h3 恭喜你获得
        p {{prizes[currPrizeIndex]}}
    a.btn.rule-btn(@click="showRules=true") 游戏规则
    a.btn.prize-btn(@click="showPrizes=true") 获得的奖品
    transition(name="slide-left")
      ul.prize-content(v-if="showPrizes")
        .close.close-prizes(@click="showPrizes=false") ×
        li(v-if="yourPrizes.length===0")
          p 你还有有中奖
          p 请你先去砸金蛋
        template(v-else)
          li(v-for="prize in yourPrizes") {{prize}}


    transition(name="slide-top")
      .rule-content(v-if="showRules")
        .close.close-rules(@click="showRules=false") ×
        p(v-for="n in 10") 游戏规则

    h3.title 一些测试
    .test.test-1(ref="test1",:class="{rotate45:rotate}")
      p test-1
      p transition实现的循环动画

    .test.test-2
      p test-2
      p animation实现的循环动画

    .test.test-3
      p test-3
      p 上下浮动

    .test.test-4(@click="eggStates=[]")
      p 重置蛋蛋
    .test-5
      .egg(v-for="n in eggCount", :class="{animation:!eggStates[n-1],'break-animation':eggStates[n-1]==='breaking'}", @click="breakEggFn")
        img.egg-img(:data-index="n-1",:src="`/static/test/${eggStates[n-1]===true?'break-egg':'egg'}.png`")




</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'test',
  data() {
    return {
      msg: 'this is from test.vue',
      isMobile: navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),
      rotate: true,// test-1是否正处理旋转
      showRules: false, // 显示规则弹窗
      showPrizes: false, // 显示你获得的奖品弹窗
      eggStates: [], // 所有蛋壳的状态，如果不存在，那么就是位破壳，'breadking' 破壳动画执行中， true 破壳完成
      eggCount: 8,
      currPrizeIndex: false,


      prizes: [
        '1毛钱',
        '2毛钱',
        '3毛钱',
        '4毛钱',
        '5毛钱',
        '6毛钱',
        '7毛钱',
        '1毛都不给你',
      ],
      yourPrizes: []
    }
  },
  computed: {
    hasEggBreaking() {
      return this.eggStates.some((state) => {
        console.log(state)
        return state === 'breaking'
      })
    }
  },
  methods: {
    breakEggFn(e) {
      console.log(this.hasEggBreaking, e.target.className)
      if (this.hasEggBreaking) {
        alert('有蛋正在破壳，稍后再试')
        return
      }

      if (e.target.className === 'egg-img') {
        this.currPrizeIndex = false

        const index = e.target.getAttribute('data-index')
        console.log(index)
        if (this.eggStates[index]) {
          alert('该蛋已经被砸过')
          return
        }
        this.$set(this.eggStates, index, 'breaking')
        setTimeout(() => {
          this.$set(this.eggStates, index, true)
          this.currPrizeIndex = Math.floor(this.eggStates.length * Math.random())
          var crrPrize = this.prizes[this.currPrizeIndex]
          if(crrPrize==='1毛都不给你') return
          this.yourPrizes.push(crrPrize)
          localStorage.yourPrizes = JSON.stringify(this.yourPrizes)
        }, 2000)
      }
    }
  },
  created() {
    if(localStorage.yourPrizes) this.yourPrizes = JSON.parse(localStorage.yourPrizes)
  },
  mounted() {
    setInterval(() => {
      this.rotate = !this.rotate
    }, 500)
  }
}
</script>
