<template>
  <div style="background: #F5F5F5;">
    <EventHeader/>
    <div class="profile-wrapper">
      <h1>Profile Page</h1>
      <div class="profile">
        <div class="profile__user">
          <svg width="311" height="310" viewBox="0 0 311 310" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M155.5 305C238.343 305 305.5 237.843 305.5 155C305.5 72.1573 238.343 5 155.5 5C72.6573 5 5.5 72.1573 5.5 155C5.5 237.843 72.6573 305 155.5 305Z" stroke="black" stroke-width="10" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M255.5 265C255.5 209.77 210.73 165 155.5 165C100.27 165 55.5 209.77 55.5 265" stroke="black" stroke-width="10" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M155.5 165C188.637 165 215.5 138.137 215.5 105C215.5 71.8629 188.637 45 155.5 45C122.363 45 95.5 71.8629 95.5 105C95.5 138.137 122.363 165 155.5 165Z" stroke="black" stroke-width="10" stroke-miterlimit="10" stroke-linejoin="round"/>
          </svg>
          <div class="profile__fields">
            <BaseTextField class="disable" :label="'Email'" v-model="form.email" style="width: 100%"/>
            <div style="display: flex;">
              <BaseTextField class="disable" :label="'Phone Number'" v-model="phone_number" style="width: 100%"/>
              <BaseTextField :label="'City'" v-model="form.city" style="margin-left: 35px"/>
            </div>
            <div style="display: flex;">
              <BaseTextField :label="'Favourite Position'" v-model="form.fav_position" style="width: 100%"/>
              <BaseTextField :label="'Age'" v-model="form.age" style="margin-left: 35px"/>
            </div>
            <div style="display: flex;">
              <BaseTextField :label="'Height'" v-model="form.height" style="width: 100%"/>
              <BaseTextField :label="'Weight'" v-model="form.weight" style="margin-left: 35px"/>
            </div>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: center">
        <button class="btn" @click="updateProfile">SAVE CHANGES</button>
      </div>
    </div>
    <EventFooter/>
  </div>
</template>

<script>
import EventHeader from "@/components/common/Events/EventHeader";
import EventFooter from "@/components/common/Events/EventFooter";
import BaseTextField from "@/components/base/BaseTextField";
import axios from "axios";
export default {
  components: {
    BaseTextField,
    EventHeader,
    EventFooter
  },
  data() {
    return {
      phone_number: '+7-777-123-45-67',
      form: {
        age: 0,
        city:'Almaty',
        fav_position: 'Forward',
        first_name: 'Aiki',
        height: 0,
        weight: 0,
        last_name: 'Aiki',
        email:'john.doe@email.com'
      }
    }
  },
  methods: {
    async fetchProfile() {
      try {
        return await axios.get(process.env.VUE_APP_BASE_API + '/v1/profile',{
          headers: {
            Authorization: `Bearer ${this.$cookies.get('jwt')}`,
          }
        }).then((res) => {
          this.form.first_name = res.data.FirstName
          this.form.age = res.data.Age
          this.form.city = res.data.City
          this.form.email = res.data.Email
          this.form.fav_position = res.data.FavPosition
          this.form.height = res.data.Height
          this.form.weight = res.data.Weight
          console.log(res)
        })
      } catch (e) {
        console.log(e)
      }
    },

    async updateProfile() {
      try {
        return await axios.put(process.env.VUE_APP_BASE_API + '/v1/profile',this.form,{
          headers: {
            Authorization: `Bearer ${this.$cookies.get('jwt')}`,
          }
        }).then(() => {
          this.fetchProfile()
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.fetchProfile()
  }
}
</script>

<style scoped lang="scss">
.profile-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 115px;
  h1{
    font-family: 'Saira Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 110%;
    text-transform: uppercase;
    color: #000000;
    text-align: center;
  }
}
.profile {
  display: flex;
  flex-direction: column;
  &__user {
    display: flex;
    flex-direction: row;
    //justify-content: space-between;
  }
  &__fields{
    margin-left: 51px;
  }
}
.disable {
  opacity: .5;
  pointer-events: none;
  cursor: not-allowed;
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
  width: 200px;
  align-items: center;
  margin-bottom: 20px;
}
</style>
