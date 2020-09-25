<template>
  <div class="input-wrapper">
    <label>
      <template v-if="type">
        <span>{{ fieldName }}</span>
        <input :type="type"
               :placeholder='placeHolder'
        >
      </template>
      <template v-else>
        <span>{{ fieldName }}</span>
        <input type="text"
               :placeholder='placeHolder'
        >
      </template>
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop() readonly fieldName?: string;
  @Prop() readonly placeHolder?: string;
  @Prop() readonly type?: string;
}
</script>

<style lang='scss' scoped>
label {
  display: flex;
  justify-content: right;
  align-items: center;
  flex-direction: row;
  white-space: nowrap;

  span {
    flex-shrink: 0;
  }

  input {
    background: transparent;
    border: none;
    flex-grow: 1;
    width: 0;
  }
}
</style>