<template>
  <ul class="tags">
    <li>
      <Icon name="food"/>
      <span>餐饮</span>
    </li>
    <li>
      <Icon name="shopping"/>
      <span>购物</span>
    </li>
    <li>
      <Icon name="daily-use"/>
      <span>日用</span>
    </li>
    <li>
      <Icon name="traffic"/>
      <span>交通</span>
    </li>
  </ul>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {

}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
.tags {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;

  li {
    padding: 10px;
    width: 25%;

    ::v-deep.icon {
      font-size: 50px;
      background: $color-default;
    }
  }

}
</style>