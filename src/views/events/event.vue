<template>
  <div style="background: #F5F5F5;">
    <EventHeader/>
    <div class="events-wrapper">
      <h1 class="events-wrapper--title">{{ event.name }}</h1>
      <div class="events-wrapper__event">
        <div class="events-wrapper__event__info">
          <div class="events-wrapper__event__item">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.75 43.75C43.75 43.75 43.75 41.1719 43.5352 39.8242C43.3594 38.7598 41.8848 37.3535 35.6152 35.0488C29.4434 32.7832 29.8242 33.8867 29.8242 29.7168C29.8242 27.0117 31.2012 28.584 32.0801 23.4473C32.4219 21.4258 32.6953 22.7734 33.4375 19.5312C33.8281 17.832 33.1738 17.7051 33.252 16.8945C33.3301 16.084 33.4082 15.3613 33.5547 13.7012C33.7305 11.6504 31.8262 6.25 25 6.25C18.1738 6.25 16.2695 11.6504 16.4551 13.7109C16.6016 15.3613 16.6797 16.0938 16.7578 16.9043C16.8359 17.7148 16.1816 17.8418 16.5723 19.541C17.3145 22.7734 17.5879 21.4258 17.9297 23.457C18.8086 28.5938 20.1855 27.0215 20.1855 29.7266C20.1855 33.9062 20.5664 32.8027 14.3945 35.0586C8.125 37.3535 6.64063 38.7695 6.47461 39.834C6.25 41.1719 6.25 43.75 6.25 43.75H25H43.75Z" fill="black"/>
            </svg>
            <span style="color: #4E4BF2">{{ event.name }}</span>
          </div>
          <div class="events-wrapper__event__item">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_135_144)">
                <path d="M25 4.1665C16.9479 4.1665 10.4167 10.6978 10.4167 18.7498C10.4167 29.6873 25 45.8332 25 45.8332C25 45.8332 39.5834 29.6873 39.5834 18.7498C39.5834 10.6978 33.0521 4.1665 25 4.1665ZM25 23.9582C22.125 23.9582 19.7917 21.6248 19.7917 18.7498C19.7917 15.8748 22.125 13.5415 25 13.5415C27.875 13.5415 30.2084 15.8748 30.2084 18.7498C30.2084 21.6248 27.875 23.9582 25 23.9582Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_135_144">
                  <rect width="50" height="50" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>{{ event.location }}</span>
          </div>
          <div class="events-wrapper__event__item">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.8379 6.25H40.625V10.2246C40.625 12.4219 38.3594 14.0625 36.0156 14.0625C33.6719 14.0625 31.25 12.4219 31.25 10.2246V6.25H18.75V10.2246C18.75 12.4219 16.4062 14.0625 14.0625 14.0625C11.7188 14.0625 9.375 12.4219 9.375 10.2246V6.25H6.16211C4.48242 6.25 3.125 7.54883 3.125 9.12109V44.0332C3.125 45.6055 4.48242 46.875 6.16211 46.875H43.8379C45.5176 46.875 46.875 45.6055 46.875 44.0234V9.12109C46.875 7.54883 45.5176 6.25 43.8379 6.25ZM42.1875 41.0059C42.1875 41.6504 41.6211 42.1777 40.9375 42.1777L9.05273 42.1875C8.36914 42.1582 7.8125 41.6406 7.8125 40.9961V18.3887C7.8125 17.7148 8.38867 17.1875 9.11133 17.1875H40.8984C41.6113 17.1875 42.1875 17.7051 42.1875 18.3691V41.0059Z" fill="black"/>
              <path d="M17.1875 9.375C17.1875 11.1035 15.791 12.5 14.0625 12.5C12.334 12.5 10.9375 11.1035 10.9375 9.375V6.25C10.9375 4.52148 12.334 3.125 14.0625 3.125C15.791 3.125 17.1875 4.52148 17.1875 6.25V9.375Z" fill="black"/>
              <path d="M39.0625 9.375C39.0625 11.1035 37.666 12.5 35.9375 12.5C34.209 12.5 32.8125 11.1035 32.8125 9.375V6.25C32.8125 4.52148 34.209 3.125 35.9375 3.125C37.666 3.125 39.0625 4.52148 39.0625 6.25V9.375Z" fill="black"/>
            </svg>
            <span>{{ event.start_date }}</span>
          </div>
          <div class="events-wrapper__event__item">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_135_162)">
                <path d="M37 44.502C37 46.985 34.985 49 32.499 49C30.015 49 28 46.985 28 44.502C28 42.015 30.015 40 32.499 40C34.985 40 37 42.015 37 44.502Z" stroke="black" stroke-width="2.1081" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35 5.501C35 7.986 32.985 10 30.5 10C28.015 10 26 7.986 26 5.501C26 3.014 28.015 1 30.5 1C32.985 1 35 3.014 35 5.501Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31.324 19.1368C31.324 19.1368 20.215 45.7848 19.767 46.8468C19.319 47.9088 18.608 49.2458 16.697 48.6618C15.257 48.2218 14.959 46.9028 15.406 45.3928C15.853 43.8828 22.507 26.9948 21.97 26.9178C21.599 26.8648 17.42 33.9768 16.519 35.3558C15.894 36.3108 14.947 37.4558 13.341 36.7518C12.026 36.1778 11.742 34.6968 12.273 33.5468C14.396 28.9438 21 14.9998 21 14.9998C21 14.9998 9.73502 14.9598 7.00002 14.9998C4.12402 15.0418 3.79402 12.5518 7.00002 11.9998C10.717 11.3618 21.877 9.99976 21.877 9.99976C21.877 9.99976 23.691 9.82276 25.119 10.5548C26.464 11.2448 30.607 13.4858 32.513 14.5828C34.069 15.4798 38.385 18.5778 38.385 18.5778L44.438 13.9518C44.438 13.9518 45.761 13.0048 46.556 13.7728C47.47 14.6578 46.707 15.7298 45.695 16.7518C44.68 17.7778 40.346 20.7998 39.618 21.4448C39.294 21.7318 38.515 22.3028 37.122 21.7478C35.727 21.1908 31.324 19.1368 31.324 19.1368Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_135_162">
                  <rect width="50" height="50" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>{{ event.format }}x{{ event.format }}</span>
          </div>
          <div class="events-wrapper__event__item">
            <div
                v-for="n in event.format"
                :key="n"
                class="person-icon"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_135_171)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.635 12.8648C39.7514 12.9809 39.8438 13.1188 39.9068 13.2707C39.9698 13.4226 40.0022 13.5854 40.0022 13.7498C40.0022 13.9142 39.9698 14.077 39.9068 14.2289C39.8438 14.3807 39.7514 14.5187 39.635 14.6348L32.135 22.1348C32.0189 22.2512 31.8809 22.3436 31.7291 22.4066C31.5772 22.4696 31.4144 22.502 31.25 22.502C31.0856 22.502 30.9228 22.4696 30.7709 22.4066C30.619 22.3436 30.4811 22.2512 30.365 22.1348L26.615 18.3848C26.3803 18.1501 26.2484 17.8317 26.2484 17.4998C26.2484 17.1679 26.3803 16.8495 26.615 16.6148C26.8497 16.3801 27.1681 16.2482 27.5 16.2482C27.8319 16.2482 28.1503 16.3801 28.385 16.6148L31.25 19.4823L37.865 12.8648C37.9811 12.7484 38.119 12.656 38.2709 12.593C38.4228 12.53 38.5856 12.4976 38.75 12.4976C38.9144 12.4976 39.0772 12.53 39.2291 12.593C39.3809 12.656 39.5189 12.7484 39.635 12.8648Z" fill="#219D16"/>
                  <path d="M2.5 35C2.5 35 0 35 0 32.5C0 30 2.5 22.5 15 22.5C27.5 22.5 30 30 30 32.5C30 35 27.5 35 27.5 35H2.5ZM15 20C16.9891 20 18.8968 19.2098 20.3033 17.8033C21.7098 16.3968 22.5 14.4891 22.5 12.5C22.5 10.5109 21.7098 8.60322 20.3033 7.1967C18.8968 5.79018 16.9891 5 15 5C13.0109 5 11.1032 5.79018 9.6967 7.1967C8.29018 8.60322 7.5 10.5109 7.5 12.5C7.5 14.4891 8.29018 16.3968 9.6967 17.8033C11.1032 19.2098 13.0109 20 15 20Z" fill="#219D16"/>
                </g>
                <defs>
                  <clipPath id="clip0_135_171">
                    <rect width="40" height="40" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="person-icon"
                v-for="n in (10 - event.format )"
                :key="n"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0373 23.332C18.9588 25.016 18.3335 27.0182 18.3335 29.1665C18.3335 31.8837 19.3338 34.3672 20.9865 36.269C19.6605 36.5358 18.219 36.6682 16.6668 36.6682C10.9652 36.6682 6.76032 34.8813 4.19005 31.274C3.63678 30.4975 3.33943 29.5678 3.33943 28.6143V27.0812C3.33943 25.011 5.01753 23.333 7.08757 23.333L20.0373 23.332ZM29.1668 19.9998C34.2295 19.9998 38.3335 24.1038 38.3335 29.1665C38.3335 34.229 34.2295 38.3332 29.1668 38.3332C24.1043 38.3332 20.0002 34.229 20.0002 29.1665C20.0002 24.1038 24.1043 19.9998 29.1668 19.9998ZM29.1668 32.918C28.592 32.918 28.126 33.384 28.126 33.959C28.126 34.5338 28.592 34.9998 29.1668 34.9998C29.7417 34.9998 30.2077 34.5338 30.2077 33.959C30.2077 33.384 29.7417 32.918 29.1668 32.918ZM29.167 23.1232C27.4203 23.1232 26.0598 24.4855 26.078 26.3803C26.0823 26.8407 26.459 27.2102 26.9193 27.2057C27.3795 27.2013 27.749 26.8247 27.7445 26.3643C27.7353 25.3993 28.344 24.7898 29.167 24.7898C29.9542 24.7898 30.5893 25.443 30.5893 26.3723C30.5893 26.6928 30.4972 26.9428 30.216 27.3082L30.0593 27.5013L29.8943 27.6902L29.452 28.1737L29.2247 28.4355C28.5858 29.1968 28.3337 29.7563 28.3337 30.619C28.3337 31.0793 28.7067 31.4523 29.167 31.4523C29.6272 31.4523 30.0003 31.0793 30.0003 30.619C30.0003 30.2803 30.0978 30.0208 30.3983 29.6353L30.5398 29.4618L30.7082 29.2693L31.151 28.7852L31.3753 28.5268C32.0058 27.7753 32.256 27.2213 32.256 26.3723C32.256 24.5328 30.8853 23.1232 29.167 23.1232ZM16.6668 3.34082C21.2692 3.34082 25.0002 7.07179 25.0002 11.6742C25.0002 16.2765 21.2692 20.0075 16.6668 20.0075C12.0645 20.0075 8.33353 16.2765 8.33353 11.6742C8.33353 7.07179 12.0645 3.34082 16.6668 3.34082Z" fill="#B91616"/>
              </svg>
            </div>
          </div>
          <div class="events-wrapper__event__description">
            <span>Description:</span>
            <p>{{ event.description }}</p>
          </div>
        </div>
        <div class="events-wrapper__image">
          <img src="../../assets/map.jpeg">
        </div>
      </div>
      <div style="display: flex; justify-content: center">
        <button v-show="idUser.ID !== event.usr.ID" class="btn" @click="inviteEvent(event.id)">Invite</button>
        <button v-show="idUser.ID === event.usr.ID" class="btn-cancel" @click="deleteEvent(event.id)">Cancel Event</button>
      </div>
      <h1 v-if="idUser.ID === event.usr.ID">Requests</h1>
      <div v-if="idUser.ID === event.usr.ID" class="request-list">
        <RequestCard
            v-for="(request, index) in event.not_confirmed_players"
            :key="index"
            :name="request.FirstName"
            :id="request.ID"
        />
      </div>
    </div>
    <EventFooter/>
  </div>
</template>

<script>
import EventHeader from "@/components/common/Events/EventHeader";
import EventFooter from "@/components/common/Events/EventFooter";
import axios from "axios";
import InviteCard from "@/components/common/InviteCard";
import RequestCard from "@/components/common/RequestCard";
export default {
  name: 'Event',
  data() {
    return {
      event: {}
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    idUser() {
      return this.$cookies.get('user')
    }
  },
  components: {RequestCard, InviteCard, EventFooter, EventHeader},
  methods: {
    async fetchEventById(id) {
      try {
        const event = await axios.get(process.env.VUE_APP_BASE_API + `/v1/event/${id}`,{
          headers: {
            Authorization: `Bearer ${this.$cookies.get('jwt')}`,
          }
        })
        this.event = event.data
        console.log(event)
      } catch (e) {
        console.log(e)
      }
    },
    async inviteEvent(id) {
      try {
        return await axios.post(process.env.VUE_APP_BASE_API + `/v1/event/respond/${id}`,{},{
          headers: {
            Authorization: `Bearer ${this.$cookies.get('jwt')}`,
          }
        }).then(() => {
          this.$router.push('/events')
        })
      } catch (e) {
        console.log(e)
      }
    },
    async deleteEvent(id) {
      try {
        return await axios.delete(process.env.VUE_APP_BASE_API + `/v1/event/${id}`,{
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
  },
  mounted() {
    this.fetchEventById(this.id)
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Saira+Condensed:wght@700&display=swap');
.events-wrapper {
  padding: 35px 160px 50px;
  &--title {
    font-family: 'Saira Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 110%;
    text-transform: uppercase;
    color: #000000;
    text-align: center;
  }
  &__filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    &__input{
      max-width: 199px;
      background: #FFFFFF;
      border-radius: 25px;
      padding: 7px 0 7px 40px;
      margin: 0 40px;
      input {
        border: none;
        outline: none;
        &::placeholder {
          //font-family: 'Saira Condensed';
          font-style: normal;
          //font-weight: 500;
          font-size: 18px;
          line-height: 110%;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.75);
        }
      }
    }
    &__filter {
      padding: 7px 26px;
      background: #FFFFFF;
      font-family: 'Saira Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 110%;
      text-transform: uppercase;
      color: #000000;
      height: 40px;
    }
  }
  &__event {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__info {
      display: flex;
      flex-direction: column;
      margin-right: 28px;
    }
    &__item {
      display: flex;
      align-items: center;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 170%;
      color: #000000;
      margin-bottom: 16px;
      span {
        margin-left: 15px;
      }

    }
    &__description {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      color: #000000;
      span {
        font-size: 32px;
        line-height: 170%;
      }
      p {
        font-size: 24px;
        line-height: 170%;
        margin: 15px 0 0;
      }
    }
  }
  &__footer {
    background: #000000;
    border-radius: 2px;
    padding: 20px 160px;
    display: flex;
    flex-direction: column;
    h1{
      color:#FFFFFF ;
      font-family: 'Saira Condensed';
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 110%;
      margin: 0;
      text-transform: uppercase;
    }
    &__bottom {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      color: #FFFFFF;
      p{
        margin: 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 170%;
        color: #FFFFFF;
      }
    }
  }
  &--btn  {
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
  &__image {
    max-width: 100%;
    height: auto;
    img {
      width: 400px;
      min-height: 400px;
      max-height: auto;
    }
  }
}
.person-icon {
  &:not(:first-child) {
    margin-left: 15px;
  }
}
.btn {
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
.btn-cancel {
  padding: 10px;
  background: #E70E0E;
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
  margin-left: 75px;
}
.request-list{
  margin-top: 38px;
  display: grid;grid-template-columns: 1fr 1fr 1fr;
  //grid-gap: 10px;
  column-gap: 87px;
  row-gap: 35px;
}
</style>
