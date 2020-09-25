<template>
  <div>
    <div class="time">
      <Notes type="date"
             field-name="日期："/>
    </div>
    <div class="output">
      <Notes field-name="备注："
             place-holder="在这里写备注..."/>
      <div class="number">{{ output }}</div>
    </div>
    <div class="buttons">
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="clear" @click="clear">清空</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button class="ok">完成</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove" class="remove">
        <Icon name="clear"/>
      </button>
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
  output = '0';

  inputContent(event: MouseEvent) {
    const input = (event.target as HTMLButtonElement).textContent;
    if (input) {
      if (this.output.length >= 12) {return;}
      if (this.output === '0' && '1234567890'.indexOf(input) >= 0) {
        this.output = input;
        return;
      } else if (this.output === '0' && input === '.') {
        this.output = '0.';
        return;
      } else if (this.output.indexOf('.') >= 0 && input === '.') {
        return;
      }
      this.output += input;
    }
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  clear() {
    this.output = '0';
  }

}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";

%foreItemStyle {
  height: 45px;
  padding: 0 12px;
}

%backgroundStyle {
  background: #f3f3f3;
  border: 1px solid #dedede;
}

.time {
  @extend %foreItemStyle;
  @extend %backgroundStyle;
  line-height: 45px;
}

.output {
  @extend %foreItemStyle;
  @extend %backgroundStyle;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ::v-deep.input-wrapper {
    flex-grow: 1;
  }

  .number {
    font-family: Consolas, monospace;
    font-size: 36px;
    flex-shrink: 0;
  }
}

.buttons {
  @extend %clearFix;

  button {
    width: 25%;
    height: 50px;
    @extend %backgroundStyle;
    font-size: 20px;

    &.clear {
      float: right;
      height: 100px;
    }

    &.remove {
      float: right;

      ::v-deep.icon {
        font-size: 30px;
      }
    }

    &.ok {
      background: $color-height;
      height: 100px;
      float: right;
    }
  }
}
</style>