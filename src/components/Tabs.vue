<template>
  <ul class="tabs">
    <li></li>
    <li :class="type === '-' && 'selected'"
        @click="selectType('-')">支出
    </li>
    <li :class="type === '+' && 'selected'"
        @click="selectType('+')">收入
    </li>
    <li class="cancel">取消</li>
  </ul>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DateSourceItem = {
  value: '-' | '+';
  text: '-' | '+';
}
@Component
export default class Tabs extends Vue {
  @Prop() readonly dataSource!: DateSourceItem[];
  @Prop(String) readonly classPrefix?: string;
  type = '-';

  selectType(value: string) {
    this.type = value;
  }
}

</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

.tabs {
  display: flex;
  background: $color-height;
  font-size: 24px;

  li {
    display: flex;
    width: 25%;
    height: 80px;
    justify-content: center;
    align-items: flex-end;
    padding: 8px;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 70%;
      height: 3px;
      background: #333;
      left: 15%;
    }

    &.cancel {
      font-size: 16px;
    }
  }

}
</style>