<template>
    <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题</div>
        <router-link to="/city">
          <div class="header-right">{{city}}
            <span class="iconfont arrow-icon">&#xe6aa;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .36rem
        font-weight: bold
    .header-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      height: .64rem
      background: #fff
      border-radius: .05rem
      color: #ccc
      line-height: .64rem
    .header-right
      float: right
      padding: 0 .2rem
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.06rem
</style>
