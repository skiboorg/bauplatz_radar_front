<template>
  <q-page class="q-px-sm">

    <h1 class="text-primary text-h3 text-center text-weight-600">Willkommen</h1>
    <p class="page-subtitle text-grey-7 text-body2 text-center">Endlich ist es soweit. Alle Voraussetzungen sind erfüllt, um möglichst bald Deinen persönlichen Wohntraum zu verwirklichen.
      Jetzt fehlt nur noch ein Grundstück. Mancherorts ist es gar nicht mehr so einfach, das passende Bauland zu finden. Hier in VIP Club helfen wir Dir bei der Bauplatzsuche und informieren dich worauf zu achten ist.</p>

    <div data-text="Richtungen" class="section-title">
      <p>Richtungen</p>
    </div>
  <Richtungen/>
    <div data-text="Hilfreiche Tabellen" class="section-title">
      <p>Hilfreiche Tabellen</p>
    </div>
  <Tables/>
  </q-page>
</template>
<script>
import Richtungen from "components/Richtungen";
import Tables from "components/Tables";
export default {
components:{
    Richtungen,
  Tables
  },
  data () {
      return{
      }
  }
}
</script>
<style lang="sass">
.page-subtitle
  max-width: 620px
  margin: 0 auto 100px
  line-height: 22px

</style>
