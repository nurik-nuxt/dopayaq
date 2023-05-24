<template>
  <div class="request-card">
    <div class="request-card__info">
      <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49 94C73.8528 94 94 73.8528 94 49C94 24.1472 73.8528 4 49 4C24.1472 4 4 24.1472 4 49C4 73.8528 24.1472 94 49 94Z" stroke="black" stroke-width="8" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M79 82C79 65.431 65.569 52 49 52C32.431 52 19 65.431 19 82" stroke="black" stroke-width="8" stroke-miterlimit="10" stroke-linejoin="round"/>
        <path d="M49 52C58.9411 52 67 43.9411 67 34C67 24.0589 58.9411 16 49 16C39.0589 16 31 24.0589 31 34C31 43.9411 39.0589 52 49 52Z" stroke="black" stroke-width="8" stroke-miterlimit="10" stroke-linejoin="round"/>
      </svg>
      <p style="margin-left: 10px">{{ name }}</p>
    </div>
    <div style="display: flex; flex-direction: column">
      <svg @click="confirmRequest(id,1)" style="cursor: pointer" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" fill="#219D16"/>
        <path d="M53.0772 6.98546C50.998 5.31077 48.0896 5.82318 46.5753 8.12276L24.9543 41.0167L13.0441 27.6067C11.2894 25.5321 8.34492 25.4321 6.47006 27.3817C4.5952 29.3189 4.49906 32.5808 6.26575 34.6429C6.26575 34.6429 20.7358 51.3398 22.815 53.0145C24.8942 54.6892 27.8026 54.1768 29.3169 51.8772L54.1108 14.1716C55.6251 11.8596 55.1564 8.64766 53.0772 6.98546Z" fill="white"/>
      </svg>
      <svg @click="confirmRequest(id,0)" style="cursor: pointer" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" fill="#E70E0E"/>
        <path d="M6 54L54 6" stroke="white" stroke-width="5"/>
        <path d="M6 6L54 54" stroke="white" stroke-width="5"/>
      </svg>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: "John Doe"
    }
  },
  computed: {
    eventId() {
      return this.$route.params.id
    },
  },
  methods: {
    async confirmRequest(id,status) {
      console.log("Confirm",id)
      try {
        return await axios.put(process.env.VUE_APP_BASE_API + `/v1/event/${this.eventId}/confirm/${id}`,{
          status_id: status,
        },{
          headers: {
            Authorization: `Bearer ${this.$cookies.get('jwt')}`,
          }
        }).then(() => {
          this.$router.push('/events')
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.request-card {
  background: #FFFFFF;
  max-width: 268px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__info {
    padding: 10px 0 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
