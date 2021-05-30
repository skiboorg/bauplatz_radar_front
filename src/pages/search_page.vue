<template>
  <q-page>
    <div class="search-page  flex column items-center justify-start q-px-sm pt-100 ">


    </div>
    <div data-text="Suchergebnis" class="section-title">
      <p>Suchergebnis</p>
    </div>
    <div class="row q-px-sm mb-100">
      <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
        <q-carousel
          animated
          v-model="slide"
          arrows
          class="q-mb-lg"
          infinite
        >
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
        <q-card class="q-mb-md">
          <q-card-section >
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
        <q-card class="q-mb-md">
          <q-card-section >
            <q-card-section  class="full-width">
              <div class=" flex items-center justify-between">
                <p class="text-weight-600 text-primary">Details</p>

              </div>
              <q-separator color="accent" class="q-mb-lg"/>
              <p class="text-primary text-weight-bold q-mb-md">Unsere Kunden haben es satt, sich durch den Dschungel</p>
              <p class="text-weight-light text-grey-8">Wir unterstützen Sie bei der Finanzierung Ihrer Immobilie und begleiten Sie auch danach professionell, wenn Sie es wünschen.</p>

            </q-card-section>

          </q-card-section>


        </q-card>
         <q-card >
          <q-card-section >
            <q-card-section  class="full-width">
              <div class=" flex items-center justify-between">
                <p class="text-weight-600 text-primary">Beschreibung</p>

              </div>
              <q-separator color="accent" class="q-mb-lg"/>
              <p class="text-weight-light text-grey-8">
                Verkaufe meinen Dauercamping Stellplatz, mit einem Frankia 535 Wohnwagen + festinstalliertem Vorzelt + Festdach. Ca. 71m2<br><br>

5.800 Euro sind verhandelbar. Super geeignet für Grenzgänger/Wochenaufenthalter oder allgemein Personen die in der Schweiz arbeiten.<br><br>

Lebe seid knapp 1,5 Jahren fest in dem Wohnwagen, er ist sehr gepflegt und neben ruhigen Nachbarn gelegen.<br>
Weitere Bilder gibt es gerne auf Anfrage.<br>
Da ich beschlossen habe in ein Wohnmobil zu ziehen, ist der Stellplatz ab SOFORT abzugeben.<br><br>

Er ist komplett eingerichtet und sofort bezugsbereit:<br>
Komplette Küchenausstattung<br>
4 Schlafplätze (Couch klappbar)<br>
Bad neu modern eingerichtet -kein Wasser Anschluss<br>
Neue Dieselheizung installiert<br><br>

Winter sowie Sommer nutzbar.<br>
Die Sommersaison 1.April - 15.Oktober kostet für das Grundstück 1.038,30 Franken, dazu kann die Nutzung der Duschinnenanlage dazu gebucht werden. Das wären für eine Person 270 Franken, für die zweite nur noch 200 Franken.<br><br>

Die Wintersaison inkl. Nutzung Duschinnenanlage kostet pauschal für eine Person 1.200 Franken, für 2 Personen 2.000 Franken.<br><br>

Bitte Anfragen direkt per Telefonnummer:<br>
+41 78 234 51 94
              </p>

            </q-card-section>

          </q-card-section>


        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 q-pl-lg-md q-pl-md-md q-pl-sm-md q-pl-xs-none">
        <q-card >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-primary text-weight-bold ">E.T.</q-item-label>
          <q-item-label caption>Zufriedenheit: TOP</q-item-label>
          <q-item-label caption>Freundlich</q-item-label>
          <q-item-label caption>Privater Nutzer</q-item-label>
          <q-item-label caption>Aktiv seit 23.05.2018</q-item-label>
        </q-item-section>
      </q-item>

      <q-card-section>
        <q-separator color="accent" class="q-mb-md"/>
        <div class="flex items-center justify-start q-mb-md">
                    <q-icon name="call" size="18px" color="accent" class="q-mr-sm"/>
                    <p class="no-margin text-primary text-weight-bold">+47 000 00 00</p>
                  </div>
        <q-separator color="accent" class="q-mt-md q-mb-md"/>
         <q-btn :class="[!$q.screen.gt.xs ? 'full-width':'']" label="Nachricht schreiben" color="primary" class="q-px-lg q-mb-md full-width"/>
         <q-btn :class="[!$q.screen.gt.xs ? 'full-width':'']" outline label="Zur Merkliste hinzufügen" color="primary" class="q-px-lg full-width"/>
      </q-card-section>
    </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      slide:1,
      model: null,
      range: {
        min: 1200,
        max: 50000
      },
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
</script>
<style lang="sass">
.search-page
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
  .search-page
    background-size: cover !important
    background-position-y: top
    height: 300px
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
