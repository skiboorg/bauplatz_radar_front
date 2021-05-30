<template>
  <q-layout class="relative-position" view="lHh Lpr lFf">
    <q-header   class="bg-white " :class="[menuOpen ? '' : 'shadow-3']">
      <q-toolbar  style="height: 90px" >
        <q-space v-if="$q.screen.gt.sm"/>
        <video @click="$user.loggedIn ? $router.push('/menu') : null" class="logo-video"  autoplay loop muted>

          <source type="video/mp4" src="../assets/logo.mp4">
        </video>
        <!--        <img v-if="$q.screen.gt.sm" @click="$router.push('menu')" class="cursor-pointer" src="../assets/logo-b.svg" alt="">-->
        <!--        <img v-else src="../assets/logo-m.svg" @click="$router.push('menu')" class="cursor-pointer" alt="">-->
        <q-space/>
        <q-btn v-if="$user.loggedIn" class="absolute-right" flat @click="menuOpen=!menuOpen">
          <svg v-if="menuOpen" width="34" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5402 4.044C25.254 3.33017 25.254 2.17283 24.5402 1.459C23.8264 0.745176 22.669 0.745176 21.9552 1.459L16.5349 6.87931C14.5823 8.83193 11.4164 8.83193 9.46382 6.8793L4.04351 1.459C3.32969 0.745175 2.17234 0.745176 1.45852 1.459C0.744688 2.17283 0.744687 3.33018 1.45852 4.044L6.87882 9.46431C8.83144 11.4169 8.83144 14.5828 6.87882 16.5354L1.45851 21.9557C0.744686 22.6695 0.744688 23.8268 1.45852 24.5407C2.17234 25.2545 3.32969 25.2545 4.04352 24.5407L9.46382 19.1204C11.4164 17.1677 14.5823 17.1678 16.5349 19.1204L21.9552 24.5407C22.669 25.2545 23.8264 25.2545 24.5402 24.5407C25.254 23.8268 25.254 22.6695 24.5402 21.9557L19.1199 16.5354C17.1673 14.5827 17.1673 11.4169 19.1199 9.4643L24.5402 4.044Z" fill="#DD9706"/>
          </svg>

          <svg v-else width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2148 20.1667C17.2148 21.1792 16.394 22 15.3815 22H2.54818C1.53566 22 0.714844 21.1792 0.714844 20.1667C0.714844 19.1541 1.53565 18.3333 2.54818 18.3333H15.3815C16.394 18.3333 17.2148 19.1541 17.2148 20.1667ZM33.7148 11C33.7148 12.0125 32.894 12.8333 31.8815 12.8333H2.54818C1.53565 12.8333 0.714844 12.0125 0.714844 11C0.714844 9.98748 1.53566 9.16667 2.54818 9.16667H31.8815C32.894 9.16667 33.7148 9.98748 33.7148 11ZM33.7148 1.83333C33.7148 2.84586 32.894 3.66667 31.8815 3.66667H19.0482C18.0357 3.66667 17.2148 2.84586 17.2148 1.83333C17.2148 0.820812 18.0357 0 19.0482 0H31.8815C32.894 0 33.7148 0.820812 33.7148 1.83333Z" fill="#2E3A59"/>
          </svg>

        </q-btn>
      </q-toolbar>
    </q-header>
    <div class="menu shadow-3" :class="[menuOpen ? 'menu-active' : '']">
      <div class="row ">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-none q-pr-xs-none">
          <p class="q-mb-sm text-weight-600 text-primary text-h5 menu-title">Richtungen</p>
          <ul class="menu-list">
            <li
              v-for="item in richtungenItems"
              :key="item.id"
              @click="menuOpen=false"
            >
              <router-link class="text-primary text-h6 text-weight-600 cursor-pointer" :to="{name:'richtunge',params:{slug:item.name_slug}}">{{item.name}}</router-link>
            </li>
            <li @click="menuOpen=false"><router-link  class="text-primary text-h6 text-weight-600 " to="/contacts">Kontakte</router-link></li>
            <li @click="menuOpen=false"><router-link  class="text-primary text-h6 text-weight-600 " to="/search">Bauplatz Suche</router-link></li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-none q-pr-xs-none">
          <p class="q-mb-sm text-weight-600 text-primary text-h5 menu-title">Hilfreiche Tabellen</p>
          <ul class="menu-list">
            <li
              v-for="item in tableItems"
              :key="item.id"
              @click="menuOpen=false">
              <router-link class="text-primary text-h6 text-weight-600 cursor-pointer" :key="$route.fullPath" :to="{name:'table',params:{slug:item.name_slug}}">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
    <div v-if="!$cook.get('cookie_agree')" class="cookies" :class="{'hideCookie':hideCookie}">
      <p class="text-weight-600">Cookies zulassen</p>
      <p class="text-weight-light">Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Sie geben Einwilligung zu unseren Cookies, wenn Sie unsere Webseite weiterhin nutzen.</p>
      <div class="flex items-center justify-between" >
        <div class="flex justify-lg-start justify-md-start justify-sm-between justify-xs-between q-mb-lg-none q-mb-md-none q-mb-sm-none q-mb-xs-md" :class="[!$q.screen.gt.xs ? 'full-width':'']">
          <q-btn @click="cookie_agree" :dense="!$q.screen.gt.xs" color="grey-6"  :class="[$q.screen.gt.xs ? 'q-mr-sm q-py-none': 'q-px-md  text-caption cook-btn']" class=" text-weight-600" label="Nur Notwendige"/>
          <q-btn @click="cookie_agree" :dense="!$q.screen.gt.xs" color="accent" :class="[$q.screen.gt.xs ? 'q-py-none': 'q-px-md text-caption cook-btn']" class="text-weight-600" label="Alle akzeptieren"/>
        </div>
        <p class="q-mb-none text-weight-600 text-right text-caption cursor-pointer" :class="[!$q.screen.gt.xs ? 'full-width':'']" @click="visible=!visible">DETAILS
          <svg class="q-ml-sm" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill="white"/>
          </svg>
        </p>
      </div>
      <q-slide-transition>
        <div v-show="visible">
          <p class="q-pt-md q-mb-none text-weight-light">Cookies sind kleine Textdateien, die von Webseiten verwendet werden, um die Benutzererfahrung effizienter zu gestalten.<br>
            Laut Gesetz können wir Cookies auf Ihrem Gerät speichern, wenn diese für den Betrieb dieser Seite unbedingt notwendig sind. Für alle anderen Cookie-Typen benötigen wir Ihre Erlaubnis.<br>
            Diese Seite verwendet unterschiedliche Cookie-Typen. Einige Cookies werden von Drittparteien platziert, die auf unseren Seiten erscheinen.<br>
            Sie können Ihre Einwilligung jederzeit von der Cookie-Erklärung auf unserer Website ändern oder wiederrufen.<br>
            Erfahren Sie in unserer Datenschutzrichtlinie mehr darüber, wer wir sind, wie Sie uns kontaktieren können und wie wir personenbezogene Daten verarbeiten.
          </p>
        </div>
      </q-slide-transition>
    </div>
    <footer style="background: #062034">
      <div class="row q-px-sm q-py-xl text-white">
        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 q-mb-lg-none q-mb-md-none q-mb-sm-lg q-mb-xs-lg flex items-center text-weight-600">
          Copyright © 2021. All rights reserved.

        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 flex items-center justify-between">
          <p class="flex items-center justify-center inline-block q-mb-none">
            <router-link class="text-white q-mr-lg text-weight-600" to="/contacts">Kontakte</router-link>
            <router-link class="text-white q-mr-lg text-weight-600" to="/impressum">Impressum</router-link>
            <router-link class="text-white q-mr-lg text-weight-600" to="/datenschutz">Datenschutz</router-link>


          </p>
          <p class="flex items-center justify-center inline-block q-mb-none">
            <a class="text-white q-mr-md" href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 0H3C1.3455 0 0 1.3455 0 3V21C0 22.6545 1.3455 24 3 24H12V15.75H9V12H12V9C12 6.5145 14.0145 4.5 16.5 4.5H19.5V8.25H18C17.172 8.25 16.5 8.172 16.5 9V12H20.25L18.75 15.75H16.5V24H21C22.6545 24 24 22.6545 24 21V3C24 1.3455 22.6545 0 21 0Z" fill="#DD9706"/>
              </svg>
            </a>
            <a class="text-white" href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5034 0H6.49657C2.9143 0 0 2.9143 0 6.49657V17.5036C0 21.0857 2.9143 24 6.49657 24H17.5036C21.0857 24 24 21.0857 24 17.5036V6.49657C24 2.9143 21.0857 0 17.5034 0V0ZM12 18.5623C8.38145 18.5623 5.43767 15.6185 5.43767 12C5.43767 8.38145 8.38145 5.43767 12 5.43767C15.6185 5.43767 18.5623 8.38145 18.5623 12C18.5623 15.6185 15.6185 18.5623 12 18.5623ZM18.7192 6.98528C17.6499 6.98528 16.7801 6.11553 16.7801 5.04619C16.7801 3.97686 17.6499 3.10693 18.7192 3.10693C19.7885 3.10693 20.6585 3.97686 20.6585 5.04619C20.6585 6.11553 19.7885 6.98528 18.7192 6.98528Z" fill="#DD9706"/>
                <path d="M11.9991 6.84473C9.15655 6.84473 6.84375 9.15734 6.84375 12.0001C6.84375 14.8426 9.15655 17.1554 11.9991 17.1554C14.8418 17.1554 17.1544 14.8426 17.1544 12.0001C17.1544 9.15734 14.8418 6.84473 11.9991 6.84473Z" fill="#DD9706"/>
                <path d="M18.7196 4.51367C18.4263 4.51367 18.1875 4.75244 18.1875 5.04578C18.1875 5.33911 18.4263 5.57788 18.7196 5.57788C19.0131 5.57788 19.2519 5.33929 19.2519 5.04578C19.2519 4.75226 19.0131 4.51367 18.7196 4.51367Z" fill="#DD9706"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script>


import { mapGetters} from 'vuex'
export default {
  name: 'MainLayout',
  data () {
    return {
      visible:false,
      hideCookie:false,
      menuOpen:false,
      lang: 'En',
      langOptions: [
        'En'
      ]


    }
  },
  computed:{
    ...mapGetters('pages',['richtungenItems','tableItems'])
  },
  methods: {
          cookie_agree(){
            this.$cook.set('cookie_agree',true)
            this.hideCookie = true
          }
        },
}
</script>
<style lang="sass">
.hideCookie
  display: none
.logo-video
  cursor: pointer
  width: 270px
  height: 90px
  object-fit: contain
.cook-btn
  width: 170px
  height: 30px
.cookies
  background: $primary
  color: #ffffff
  padding: 30px
.menu

  position: fixed
  top: 80px
  background: #fff
  left: 0
  right: 0
  opacity: 0
  pointer-events: none
  transition: all .1s linear
  padding: 40px 15px 100px 15px

  &.menu-active
    top: 90px
    opacity: 1
    pointer-events: all
    z-index: 100
  &-title
    border-bottom: 2px solid $accent
    margin-bottom: 45px
  &-list
    columns: auto 2
    list-style: none
    padding-left: 15px
    li
      margin-bottom: 15px
      &:last-child
        margin-bottom: 0
      a
        text-decoration: none

@media (max-width: 768px)
  .logo-video
    width: 155px
    height: 90px
  .cookies
    padding: 15px
  .menu
    padding: 30px 15px 30px 15px
    overflow-y: auto
    height: 100vh
    &-title
      margin-bottom: 30px
    &-list
      columns: unset
      li
        margin-bottom: 15px
        &:last-child
          margin-bottom: 0
</style>
