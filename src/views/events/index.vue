<template>
  <div style="background: #F5F5F5;">
    <EventHeader/>
    <div class="events-wrapper">
      <h1 class="events-wrapper--title">Find events</h1>
      <div class="events-wrapper__filters">
        <div>
          <span class="events-wrapper__filters__filter">Filter By</span>
        </div>
        <div class="events-wrapper__filters__input">
          <input
              placeholder="Search"
          >
        </div>
        <button class="events-wrapper--btn" @click="createEvent">Create</button>
      </div>
      <div class="events-wrapper__eventList">
        <EventCard
            v-for="(event, index) in events"
            :key="index"
            :id="event.id"
            :event-title="event.name"
            :location="event.location"
            :date="event.started_at"
            :organizer="event.name"
        />
      </div>
    </div>
    <EventFooter/>
  </div>
</template>

<script>
import EventHeader from "@/components/common/Events/EventHeader";
import EventCard from "@/components/common/Events/EventCard";
import EventFooter from "@/components/common/Events/EventFooter";
import BaseTextField from "@/components/base/BaseTextField";
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Events',
  data() {
    return {
      events: []
    }
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {BaseTextField, EventFooter, EventCard, EventHeader},
  methods: {
    createEvent() {
      this.$router.push('/events/create')
    },
    async fetchEvents() {
      console.log("Fetch Events")
      try {
        const events = await axios.get(process.env.VUE_APP_BASE_API + '/v1/event')
        this.events = events.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.fetchEvents()
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
  &__eventList {
    margin-top: 38px;
    display: grid;grid-template-columns: 1fr 1fr 1fr;
    //grid-gap: 10px;
    column-gap: 87px;
    row-gap: 35px;
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
}
</style>
