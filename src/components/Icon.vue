<template>
  <div>
    <svg class="icon">
      <use :xlink:href="'#'+name"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
@Component
export default class Icon extends Vue {
  @Prop(String) readonly name!: string;
}
</script>

<style lang='scss' scoped>
.icon {
  border-radius: 40%;
  padding: 2px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>