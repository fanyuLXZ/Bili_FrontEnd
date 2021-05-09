<template>
  <div :class="{
    'be-input': type === 'input',
    'be-textarea': type === 'textarea',
    'is-diabled': disabled,
    'be-input--append': $slots.append || maxlength
    }">
    <input v-if="type === 'input'"
           v-bind="$props"
           :value="currentValue"
           class="be-input_inner"
           @blur="handleBlur"
           @focus="handleFocus"
           @input="handleInput"/>
    <textarea v-if="type === 'textarea'"
              v-bind="$props"
              :rows="rows"
              :value="currentValue"
              class="be-textarea_inner"
              @blur="handleBlur"
              @focus="handleFocus"
              @input="handleInput"></textarea>
    <div v-if="maxlength"
         class="be-input-word-counter">{{ currentValue.length }}/{{ maxlength }}
    </div>
    <slot v-if="$slots.append"
          name="append"></slot>
  </div>
</template>
<script>
export default {
  name: 'be-input',
  data() {
    return {
      currentValue: this.value,
    }
  },
  props: {
    // 初始值
    value: {
      type: [String, Number],
      default: '',
    },
    // input textarea
    type: {
      type: String,
      default: 'input',
    },
    // 只对textarea生效，控制有多少行
    rows: {
      type: Number,
      default: 4,
    },
    // 是否失效
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    maxlength: undefined,
    required: Boolean,
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
  },
  methods: {
    handleInput(e) {
      this.currentValue = e.target.value
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    handleFocus() {
      this.$emit('focus', this.currentValue)
    },
    handleBlur() {
      this.$emit('blur', this.currentValue)
    },
  },
}
</script>
<style lang="less">
.be-input {
  position: relative;
  color: #222;
  font-size: 14px;
  border-radius: 4px;

  &--append {
    .be-input_inner {
      padding: 0 60px 0 5px;
    }
  }

  &_inner {
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 50px 0 5px;
    border-radius: 4px;
    border: 1px solid #ccd0d7;
    outline: none;
    box-sizing: border-box;
    transition: all .3s ease;

    &:focus {
      border-color: #00a1d6;
    }
  }

  &.is-diabled {
    .be-input_inner {
      background-color: darken(#fff, 10%);
      border-color: darken(#ccd0d7, 10%);
      color: lighten(#222, 10%);
      cursor: not-allowed;
    }
  }
}

.be-textarea {
  position: relative;
  color: #222;
  font-size: 14px;
  border-radius: 4px;

  &.is-diabled {
    .be-textarea_inner {
      background-color: darken(#fff, 10%);
      border-color: darken(#ccd0d7, 10%);
      color: lighten(#222, 10%);
      cursor: not-allowed;
    }
  }

  &--append {
    .be-textarea_inner {
      display: table-cell;
    }
  }

  &_inner {
    display: block;
    width: 100%;
    line-height: 20px;
    height: 118px;
    padding: 0 5px 0 5px;
    border: 1px solid #ccd0d7;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    resize: none;
    transition: all .3s ease;

    &:hover,
    &:focus {
      border-color: #00a1d6;

      & ~ .be-input-word-counter {
        opacity: 1;
      }
    }
  }

  .be-input-word-counter {
    opacity: 0;
    transition: .2s ease opacity;
  }
}

.be-input-word-counter {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 30px;
  min-width: 40px;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #99a2aa;
  border-radius: 4px;
}

</style>
