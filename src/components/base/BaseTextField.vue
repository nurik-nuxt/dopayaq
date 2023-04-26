<template>
  <div class="base-input">
    <input class="base-input__input" :type="type" autocomplete="off" :value="value" :placeholder="placeholder" @input="handleInput"/>
  </div>
</template>

<script>
export default {
  // props:['value'],
  name: 'BaseTextField',
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  },
  props: {
    placeholder: {
      type: String,
      default: "sdfd"
    },
    value:{
      type:String
    },
    type: String,
    default: 'text'
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Saira+Condensed:wght@700&display=swap');
.base-input {
  //margin: 0 auto;
  margin: 0 auto 35px auto;
  &__input {
    padding: 9px 0;
    text-align: center;
    border:none;
    height: 62px;
    width: 343px;
    &::placeholder {
      font-family: 'Saira Condensed';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 110%;
      text-align: center;
      text-transform: capitalize;
      color: #3E3838;
    }
  }
}

@media only screen and (max-width: 600px) {
  .base-input {
    &__input {
      width: 200px;
      padding: 5px 0;
      &::placeholder {
        text-align: center;
        font-size: 20px;
        //line-height: 50px;
        text-transform: uppercase;
        color: #3E3838;
      }
    }
  }
}
</style>
