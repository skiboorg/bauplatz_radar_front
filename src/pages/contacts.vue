<template>
  <q-page >
    <div class="contacts-top pt-100">

      <div class="container pt-100 ">
        <div data-text="Kontakte" class="section-title ">
          <p>Kontakte</p>
        </div>
        <div class="container-wrapper">
          <div class="row q-mb-lg-none q-mb-md-none q-mb-sm-md q-mb-xs-md" >
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-none q-pr-xs-none q-mb-md">
              <q-card>
                <q-card-section>
                  <div class="flex items-center justify-start q-mb-md">
                    <q-icon name="email" size="18px" color="accent" class="q-mr-sm"/>
                    <p class="no-margin text-accent text-weight-bolder">Email</p>
                  </div>
                  <ul class="contacts-list">
                    <li><a href="mailto:info@bauplatz-radar.de">info@bauplatz-radar.de</a></li>
                    <li><a href="mailto:info@bauplatz-radar.de">info@bauplatz-radar.de</a></li>
                    <li><a href="mailto:info@bauplatz-radar.de">info@bauplatz-radar.de</a></li>
                    <li><a href="mailto:info@bauplatz-radar.de">info@bauplatz-radar.de</a></li>

                  </ul>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pl-lg-sm q-pl-md-sm q-pl-sm-none q-pl-xs-none">
              <q-card style="min-height:167px">
                <q-card-section>
                  <div class="flex items-center justify-start q-mb-md">
                    <q-icon name="location_on" size="18px" color="accent" class="q-mr-sm"/>
                    <p class="no-margin text-accent text-weight-bolder">Silverfoxx Realestate Pte. LTD</p>
                  </div>
                  <ul class="contacts-list">
                    <li><a href="#">150 Beach Road # 35-00</a></li>
                    <li><a href="#">Geteway West</a></li>
                    <li><a href="#">Singapore</a></li>


                  </ul>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="row q-mb-md ">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div style="width: 100%"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="row q-mb-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="flex items-center justify-start q-mb-md">
                    <q-icon name="edit" size="18px" color="accent" class="q-mr-sm"/>
                    <p class="no-margin text-accent text-weight-bolder">Schreib uns</p>
                  </div>
                  <q-input
                    class="q-mb-md"
                    v-model="text"
                    outlined
                    bg-color="white"
                    type="textarea"

                  />
                   <q-btn :class="[!$q.screen.gt.xs ? 'full-width':'']" label="senden" color="primary" class="q-px-lg text-weight-bold"/>
                </q-card-section>
              </q-card>
            </div>
          </div>
              <div class="row ">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="flex items-center justify-start q-mb-md">
                    <q-icon name="call" size="18px" color="accent" class="q-mr-sm"/>
                    <p class="no-margin text-accent text-weight-bolder">Haben Sie noch Fragen? </p>
                  </div>
                  <p class="text-grey-8 text-weight-light">Hinterlassen Sie Ihre Nummer und wir rufen Sie zurück</p>
                  <div class="flex items-center justify-start">
                    <q-input
                    class="q-mr-lg-md q-mr-md-md q-mr-sm-md q-mr-xs-none q-mb-lg-none q-mb-md-none q-mb-sm-none q-mb-xs-md"
                    style="width: 300px"
                    prefix="+49"
                    :class="[!$q.screen.gt.xs ? 'full-width':'']"
                    v-model="text"
                    outlined
                    bg-color="white"
                    dense


                  />
                   <q-btn @click="openWidget" :class="[!$q.screen.gt.xs ? 'full-width':'']" label="Ruf mich zurück" color="primary" class="q-px-lg"/>
                  </div>

                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>

  </q-page>

</template>
<script>
export default {
   data () {
     return {
       simplyBookWidget:false,
      }
   },
  mounted() {
  },
  methods:{
    openWidget(){
      let sb_div = document.getElementById('simpleBook')
      sb_div.classList.add('simpleBookActive')
    }
  }
}
</script>
<style lang="sass">
.contacts
  &-top
    background: url(../assets/contacts-bg.png) no-repeat top
    background-size: cover

  &-list
    color: $primary
    padding-left: 16px
    li
      color: $primary
      a
        color: $primary
        text-decoration: none
        font-weight: 500
@media (max-width: 768px)
  .contacts
    &-top
      background-size: contain !important
      background-position-y: top
      padding-bottom: 90px

</style>
