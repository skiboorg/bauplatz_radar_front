<template>
  <q-page>
    <div class="search-top flex column items-center justify-start q-px-sm pt-100">
      <div class="search-form q-px-sm">
        <div data-text="Bauplatz Suche" class="section-title mt-100 no-1920">
          <p>Bauplatz Suche</p>
        </div>
        <div class="search-form__inner">
          <div class="row q-mb-lg-sm q-mb-md-sm q-mb-sm-sm q-mb-xs-none">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-none q-pr-xs-none">
              <p class="text-primary q-mb-xs text-weight-600">Bauplatz Suche</p>
             <q-input clearable dense outlined bg-color="white" v-model="text" label="Bauplatz Suche" />
            </div>
           <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pl-lg-sm q-pl-md-sm q-pl-sm-none q-pl-xs-none">
              <p class="text-primary q-mb-xs text-weight-600">Stadt</p>
            <q-select outlined dense bg-color="white" v-model="model" :options="options" label="Wähle eine Stadt" />
            </div>

          </div>
          <div class="row q-mb-lg-sm q-mb-md-sm q-mb-sm-sm q-mb-xs-md">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pr-lg-sm q-pr-md-sm q-pr-sm-none q-pr-xs-none">
              <p class="text-primary q-mb-xs text-weight-600">Radius</p>
             <q-select dense outlined bg-color="white" v-model="model" :options="options" label="Wähle eine Stadt" />
            </div>
           <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pl-lg-sm q-pl-md-sm q-pl-sm-none q-pl-xs-none">
              <p class="text-primary q-mb-xs text-weight-600">Typ</p>
            <q-select dense outlined bg-color="white" v-model="model" :options="options" label="Wähle eine Stadt" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pl-lg-sm q-pl-md-sm q-pl-sm-none q-pl-xs-none relative-position ">
              <p class="text-primary q-mb-xs text-weight-600">Preis</p>
            <q-range dense v-model="range" :min="4000" :max="500000" color="accent"/>
              <div class="flex items-end justify-evenly search-form__range q-mb-lg-sm q-mb-md-sm q-mb-sm-md q-mb-lg-lg">
                <p class="no-margin text-caption text-primary text-weight-600">von <span class="text-accent text-weight-bolder text-body1">{{range.min}}</span> €</p>
                <p class="no-margin text-caption text-primary text-weight-600">vor <span class="text-accent text-weight-bolder text-body1">{{range.max}}</span> €</p>
              </div>
            </div>

          </div>
          <div class="text-right">
            <q-btn :class="[$q.screen.lt.md ? 'full-width':'']" label="Finden" color="primary" class="q-px-lg text-weight-bold"/>
          </div>
        </div>
      </div>

    </div>
      <div data-text="Suchergebnis" class="section-title">
      <p>Suchergebnis</p>
    </div>
    <div class="grid grid-2 grid-gap-15 q-px-sm mb-100">
      <q-card @click="$router.push('/search_page')" class="cursor-pointer">
      <q-card-section :horizontal="!$q.screen.lt.sm">
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section  class="full-width">
          <div class=" flex items-center justify-between">
             <p class="text-weight-600 text-primary"><q-icon name="location_on" color="accent" size="20px"/> 31249 Hohenhalmen</p>
         <p class="text-weight-600 text-primary"><q-icon name="watch_later" color="accent" size="20px"/> Heute, 17:05</p>
          </div>
          <q-separator color="accent" class="q-mb-lg"/>
          <p class="text-primary text-weight-bold q-mb-md">Unsere Kunden haben es satt, sich durch den Dschungel</p>
          <p class="text-weight-light text-grey-8">Wir unterstützen Sie bei der Finanzierung Ihrer Immobilie und begleiten Sie auch danach professionell, wenn Sie es wünschen.</p>
          <q-card-actions  class="justify-between items-center">
           <p class="text-accent text-caption text-weight-600 rounded-borders bg-grey-2 q-py-xs q-px-sm q-mb-none">2600 m2</p>
            <p class="text-accent text-h6 q-mb-none text-weight-bold">18.550 €</p>


        </q-card-actions>
        </q-card-section>

      </q-card-section>


    </q-card>
         <q-card @click="$router.push('/search_page')" class="cursor-pointer">
      <q-card-section :horizontal="!$q.screen.lt.sm">
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section  class="full-width">
          <div class=" flex items-center justify-between">
             <p class="text-weight-600 text-primary"><q-icon name="location_on" color="accent" size="20px"/> 31249 Hohenhalmen</p>
         <p class="text-weight-600 text-primary"><q-icon name="watch_later" color="accent" size="20px"/> Heute, 17:05</p>
          </div>
          <q-separator color="accent" class="q-mb-lg"/>
          <p class="text-primary text-weight-bold q-mb-md">Unsere Kunden haben es satt, sich durch den Dschungel</p>
          <p class="text-weight-light text-grey-8">Wir unterstützen Sie bei der Finanzierung Ihrer Immobilie und begleiten Sie auch danach professionell, wenn Sie es wünschen.</p>
          <q-card-actions  class="justify-between items-center">
           <p class="text-accent text-caption text-weight-600 rounded-borders bg-grey-2 q-py-xs q-px-sm q-mb-none">2600 m2</p>
            <p class="text-accent text-h6 q-mb-none text-weight-bold">18.550 €</p>


        </q-card-actions>
        </q-card-section>

      </q-card-section>


    </q-card>
         <q-card @click="$router.push('/search_page')" class="cursor-pointer">
      <q-card-section :horizontal="!$q.screen.lt.sm">
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section  class="full-width">
          <div class=" flex items-center justify-between">
             <p class="text-weight-600 text-primary"><q-icon name="location_on" color="accent" size="20px"/> 31249 Hohenhalmen</p>
         <p class="text-weight-600 text-primary"><q-icon name="watch_later" color="accent" size="20px"/> Heute, 17:05</p>
          </div>
          <q-separator color="accent" class="q-mb-lg"/>
          <p class="text-primary text-weight-bold q-mb-md">Unsere Kunden haben es satt, sich durch den Dschungel</p>
          <p class="text-weight-light text-grey-8">Wir unterstützen Sie bei der Finanzierung Ihrer Immobilie und begleiten Sie auch danach professionell, wenn Sie es wünschen.</p>
          <q-card-actions  class="justify-between items-center">
           <p class="text-accent text-caption text-weight-600 rounded-borders bg-grey-2 q-py-xs q-px-sm q-mb-none">2600 m2</p>
            <p class="text-accent text-h6 q-mb-none text-weight-bold">18.550 €</p>


        </q-card-actions>
        </q-card-section>

      </q-card-section>


    </q-card>
         <q-card @click="$router.push('/search_page')" class="cursor-pointer">
      <q-card-section :horizontal="!$q.screen.lt.sm">
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section  class="full-width">
          <div class=" flex items-center justify-between">
             <p class="text-weight-600 text-primary"><q-icon name="location_on" color="accent" size="20px"/> 31249 Hohenhalmen</p>
         <p class="text-weight-600 text-primary"><q-icon name="watch_later" color="accent" size="20px"/> Heute, 17:05</p>
          </div>
          <q-separator color="accent" class="q-mb-lg"/>
          <p class="text-primary text-weight-bold q-mb-md">Unsere Kunden haben es satt, sich durch den Dschungel</p>
          <p class="text-weight-light text-grey-8">Wir unterstützen Sie bei der Finanzierung Ihrer Immobilie und begleiten Sie auch danach professionell, wenn Sie es wünschen.</p>
          <q-card-actions  class="justify-between items-center">
           <p class="text-accent text-caption text-weight-600 rounded-borders bg-grey-2 q-py-xs q-px-sm q-mb-none">2600 m2</p>
            <p class="text-accent text-h6 q-mb-none text-weight-bold">18.550 €</p>


        </q-card-actions>
        </q-card-section>

      </q-card-section>


    </q-card>
         <q-card @click="$router.push('/search_page')" class="cursor-pointer">
      <q-card-section :horizontal="!$q.screen.lt.sm">
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section  class="full-width">
          <div class=" flex items-center justify-between">
             <p class="text-weight-600 text-primary"><q-icon name="location_on" color="accent" size="20px"/> 31249 Hohenhalmen</p>
         <p class="text-weight-600 text-primary"><q-icon name="watch_later" color="accent" size="20px"/> Heute, 17:05</p>
          </div>
          <q-separator color="accent" class="q-mb-lg"/>
          <p class="text-primary text-weight-bold q-mb-md">Unsere Kunden haben es satt, sich durch den Dschungel</p>
          <p class="text-weight-light text-grey-8">Wir unterstützen Sie bei der Finanzierung Ihrer Immobilie und begleiten Sie auch danach professionell, wenn Sie es wünschen.</p>
          <q-card-actions  class="justify-between items-center">
           <p class="text-accent text-caption text-weight-600 rounded-borders bg-grey-2 q-py-xs q-px-sm q-mb-none">2600 m2</p>
            <p class="text-accent text-h6 q-mb-none text-weight-bold">18.550 €</p>


        </q-card-actions>
        </q-card-section>

      </q-card-section>


    </q-card>
         <q-card @click="$router.push('/search_page')" class="cursor-pointer">
      <q-card-section :horizontal="!$q.screen.lt.sm">
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-card-section  class="full-width">
          <div class=" flex items-center justify-between">
             <p class="text-weight-600 text-primary"><q-icon name="location_on" color="accent" size="20px"/> 31249 Hohenhalmen</p>
         <p class="text-weight-600 text-primary"><q-icon name="watch_later" color="accent" size="20px"/> Heute, 17:05</p>
          </div>
          <q-separator color="accent" class="q-mb-lg"/>
          <p class="text-primary text-weight-bold q-mb-md">Unsere Kunden haben es satt, sich durch den Dschungel</p>
          <p class="text-weight-light text-grey-8">Wir unterstützen Sie bei der Finanzierung Ihrer Immobilie und begleiten Sie auch danach professionell, wenn Sie es wünschen.</p>
          <q-card-actions  class="justify-between items-center">
           <p class="text-accent text-caption text-weight-600 rounded-borders bg-grey-2 q-py-xs q-px-sm q-mb-none">2600 m2</p>
            <p class="text-accent text-h6 q-mb-none text-weight-bold">18.550 €</p>


        </q-card-actions>
        </q-card-section>

      </q-card-section>


    </q-card>





    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      model: null,
      range: {
        min: 15000,
        max: 500000
      },
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
</script>
<style lang="sass">
.search-top
  background: url(../assets/search-top-d.png) no-repeat center
  background-size: cover !important
  height: 100vh
.search-form
  background: rgba(230, 230, 230, 0.48)
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15)
  border-radius: 15px
  max-width: 1180px
  padding: 0 15px
  margin: 0 auto
  overflow: hidden
  &__inner
    padding: 0 100px 60px 100px
@media (max-width: 1023px)
 .search-form
   min-width: unset
   width: 100%
@media (max-width: 768px)
  .search-top
    background-size: contain !important
    background-position-y: top
    height: 920px
  .search-form
    &__inner
      padding: 0 10px 20px 10px

.q-slider__thumb
  border: 2px solid $primary
  border-radius: 100%
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  background: linear-gradient(180deg, #1F4365 0%, #003E79 100%)
.q-slider__track-container--h
  height: 3px
  border-radius: 10px
  background: #ffffff
</style>
