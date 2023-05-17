<template>
  <div class="event-card">
    <h1 class="event-card--title">{{ eventTitle }}</h1>
    <div class="event-card__detail">
      <span class="event-card__item">
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_112_212)">
            <path d="M15 3C10.1687 3 6.25 6.91875 6.25 11.75C6.25 18.3125 15 28 15 28C15 28 23.75 18.3125 23.75 11.75C23.75 6.91875 19.8313 3 15 3ZM15 14.875C13.275 14.875 11.875 13.475 11.875 11.75C11.875 10.025 13.275 8.625 15 8.625C16.725 8.625 18.125 10.025 18.125 11.75C18.125 13.475 16.725 14.875 15 14.875Z" fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0_112_212">
              <rect width="30" height="30" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
          </defs>
        </svg>
        <p class="event-card__item--text">{{ location }}</p>
      </span>
      <span class="event-card__item">
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.3027 4.25H24.375V6.63477C24.375 7.95312 23.0156 8.9375 21.6094 8.9375C20.2031 8.9375 18.75 7.95312 18.75 6.63477V4.25H11.25V6.63477C11.25 7.95312 9.84375 8.9375 8.4375 8.9375C7.03125 8.9375 5.625 7.95312 5.625 6.63477V4.25H3.69727C2.68945 4.25 1.875 5.0293 1.875 5.97266V26.9199C1.875 27.8633 2.68945 28.625 3.69727 28.625H26.3027C27.3105 28.625 28.125 27.8633 28.125 26.9141V5.97266C28.125 5.0293 27.3105 4.25 26.3027 4.25ZM25.3125 25.1035C25.3125 25.4902 24.9727 25.8066 24.5625 25.8066L5.43164 25.8125C5.02148 25.7949 4.6875 25.4844 4.6875 25.0977V11.5332C4.6875 11.1289 5.0332 10.8125 5.4668 10.8125H24.5391C24.9668 10.8125 25.3125 11.123 25.3125 11.5215V25.1035Z" fill="black"/>
        <path d="M10.3125 6.125C10.3125 7.16211 9.47461 8 8.4375 8C7.40039 8 6.5625 7.16211 6.5625 6.125V4.25C6.5625 3.21289 7.40039 2.375 8.4375 2.375C9.47461 2.375 10.3125 3.21289 10.3125 4.25V6.125Z" fill="black"/>
        <path d="M23.4375 6.125C23.4375 7.16211 22.5996 8 21.5625 8C20.5254 8 19.6875 7.16211 19.6875 6.125V4.25C19.6875 3.21289 20.5254 2.375 21.5625 2.375C22.5996 2.375 23.4375 3.21289 23.4375 4.25V6.125Z" fill="black"/>
        </svg>
        <p class="event-card__item--text">{{ date }}</p>
      </span>
      <span class="event-card__item">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.25 26.25C26.25 26.25 26.25 24.7031 26.1211 23.8945C26.0156 23.2559 25.1309 22.4121 21.3691 21.0293C17.666 19.6699 17.8945 20.332 17.8945 17.8301C17.8945 16.207 18.7207 17.1504 19.248 14.0684C19.4531 12.8555 19.6172 13.6641 20.0625 11.7188C20.2969 10.6992 19.9043 10.623 19.9512 10.1367C19.998 9.65039 20.0449 9.2168 20.1328 8.2207C20.2383 6.99023 19.0957 3.75 15 3.75C10.9043 3.75 9.76172 6.99023 9.87305 8.22656C9.96094 9.2168 10.0078 9.65625 10.0547 10.1426C10.1016 10.6289 9.70898 10.7051 9.94336 11.7246C10.3887 13.6641 10.5527 12.8555 10.7578 14.0742C11.2852 17.1562 12.1113 16.2129 12.1113 17.8359C12.1113 20.3438 12.3398 19.6816 8.63672 21.0352C4.875 22.4121 3.98438 23.2617 3.88477 23.9004C3.75 24.7031 3.75 26.25 3.75 26.25H15H26.25Z" fill="black"/>
        </svg>
        <p class="event-card__item--text">{{ organizer }}</p>
      </span>
    </div>
    <div style="margin: auto">
      <button class="event-card--btn" @click="goToEvent">Open</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    eventTitle: {
      type: String,
      default: 'Event Name'
    },
    location: {
      type: String,
      default: 'Location street'
    },
    date: {
      type: String,
      default: '12/12/2023'
    },
    organizer: {
      type: String,
      default: 'IT Departure'
    },
    id: {
      type: Number,
      default: 1
    }
  },
  methods: {
    goToEvent() {
      this.$router.push(`/event/${this.id}`)
    }
  }
}
</script>

<style scoped lang="scss">
.event-card {
  padding: 8px 37px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  max-width: 315px;
  &--title{
    text-align: center;
    font-family: 'Saira Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    margin: 0;
  }
  &__detail {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &__item {
    display: flex;
    align-items: center;
    margin-top: 10px;
    &--text {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 170%;
      color: #000000;
      margin: 0 0 0 10px;
      text-align: center;
    }
  }
  &--btn {
    padding: 10px;
    background: #4E4BF2;
    border:none;
    font-family: 'Saira Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
  }
}
</style>
