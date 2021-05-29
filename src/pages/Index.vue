<template>
  <q-page class="flex items-center justify-center">

    <video class="bg"  autoplay loop muted>

      <source type="video/mp4" src="bg.mp4">
    </video>

    <q-form
      style="width: 300px"
      @submit="userLoginAction"
      class="q-gutter-sm"
    >
      <p class="text-white  text-h5 cursor-pointer">Eingang</p>
      <q-input
        dense
        outlined
        bg-color="white"
        v-model="userLogin.email"
        label="Anmeldung *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        dense
        outlined
        bg-color="white"
        v-model="userLogin.password"
        label="Passwort *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <p class="text-white text-right no-margin no-padding cursor-pointer">Passwort vergessen?</p>



      <div>
        <q-btn  class="full-width text-weight-bold"  label="Betreten" type="submit" color="primary"/>

      </div>
    </q-form>

  </q-page>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      userLogin:{
        email:'1@1.11',
        password:'123',
      }

    }
  },
  methods: {
    ... mapActions('auth',['loginUser','logoutUser']),
    userLoginAction() {
      this.loginUser(this.userLogin)
    }

  }
}
</script>
<style lang="sass">
.bg
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  width: 100%
  object-fit: cover
  height: 100%


</style>
