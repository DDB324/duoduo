<template>
  <div>
    <label>
      <Icon name="remarks"/>
      <span>备注:</span>
      <input type="text"
             placeholder="在这里写备注..."
      >
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {

}
</script>

<style lang='scss' scoped>
label {
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background: transparent;
    border: none;
    padding-left: 12px;
  }

  ::v-deep.icon {
    font-size: 24px;
  }
}
</style>