<template>
  <div class="base-input">
    <input class="base-input__input" :placeholder="placeholder"/>
  </div>
</template>

<script>
export default {
  name: 'BaseTextField',
  props: {
    placeholder: {
      type: String,
      default: "sdfd"
    }
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
      text-align: center;
      font-size: 40px;
      //line-height: 50px;
      text-transform: uppercase;
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