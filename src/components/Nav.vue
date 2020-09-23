<template>
  <nav>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      明细
    </router-link>

    <router-link to="/money" class="item-add" active-class="selected">
      <Icon name="add"/>
      记账
    </router-link>

    <router-link to="/chart" class="item" active-class="selected">
      <Icon name="chart"/>
      图表
    </router-link>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {

}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
%item{
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
nav {
  display: flex;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 50% 50% 0 0;
  flex-direction: row;

  .item {
    @extend %item;
    width: 35%;

    ::v-deep.icon {
      width: 40px;
      height: 40px;
    }
  }

  .item-add {
    @extend %item;
    padding-top: 5px;
    width: 30%;

    ::v-deep.icon {
      width: 70px;
      height: 70px;
      fill: $color-height;
    }
  }

  .item.selected {
    ::v-deep.icon {
      background: $color-height;
    }
  }
}
</style>