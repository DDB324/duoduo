<template>
  <div class="wrapper">
    <Tabs  :data-source="recordTypeList"/>
    <div class="content">
      <Tags/>
    </div>
    <NumberPad/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypesList from '@/contents/recordTypesList';
import Tags from '@/components/Tags.vue';
import NumberPad from '@/components/NumberPad.vue';

@Component({
  components: {NumberPad, Tabs, Tags}
})
export default class Money extends Vue {
  recordTypeList = recordTypesList;
}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex-grow: 1;
    overflow: auto;
  }
}

</style>