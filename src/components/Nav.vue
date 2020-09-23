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
nav {
  display: flex;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 50% 50% 0 0;
  flex-direction: row;

  .item {
    padding-bottom: 5px;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    ::v-deep.icon {
      width: 40px;
      height: 40px;
    }
  }

  .item-add {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    ::v-deep.icon {
      width: 70px;
      height: 70px;
      fill: #ffdb2d;
    }
  }

  .item.selected {
    ::v-deep.icon {
      background: #ffdb2d;
    }
  }
}
</style>