<template>
  <div>
    <div class="output">
      <Notes/>
      <span class="number">0.00</span>
    </div>
    <div class="buttons">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="date">
        <Icon name="date"/>
      </button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button class="clear">
        <Icon name="clear"/>
      </button>
      <button class="ok">完成</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Notes from '@/components/Notes.vue';

@Component({
  components: {Notes}
})
export default class NumberPad extends Vue {

}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

.output {
  border: 1px solid #dedede;
  height: 45px;
  background: #f3f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;

  .number {
    font-size: 24px;
  }
}

.buttons {
  font-family: Consolas, monospace;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  button {
    width: 25%;
    height: 50px;
    border: 1px solid #dedede;
    background: #f3f3f3;
    font-size: 20px;

  }

  .date {
    font-size: 24px;
  }

  .clear {
    display: flex;
    justify-content: center;
    align-items: center;

    ::v-deep.icon {
      font-size: 30px;
    }
  }

  .ok {
    background: $color-height;
  }
}

</style>