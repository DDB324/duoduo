<template>
  <div>
    <router-link to="/statistics">明细</router-link>
    |
    <router-link to="/money">记账</router-link>
    |
    <router-link to="/chart">图表</router-link>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Nav extends Vue {

}
</script>

<style lang='scss' scoped>

</style>