<template>
  <q-page class="rect-bg q-px-sm">
     <div class="info-page__banner" :style="{'background': 'url('+ item.image+') no-repeat center'}"></div>
  <div :data-text="item.name" class="section-title">
      <p>{{item.name}}</p>
    </div>

    <div class="q-px-sm info-page__text" v-html="item.text">

    </div>
       <div data-text="Richtungen" class="section-title">
      <p>Richtungen</p>
    </div>
   <Richtungen/>
  </q-page>

</template>
<script>
import { mapGetters} from 'vuex'
import {api} from "boot/axios";
import Richtungen from "components/Richtungen";

export default {
  components:{
    Richtungen
  },
  data () {
    return {
      item:{}
    }
  },

  async mounted() {
    const response = await api.get(`/api/get_richtunge_item?slug=${this.$route.params.slug}`)
    this.item = response.data
  }


}
</script>
<style lang="sass">
.rect-bg
  background: url(../assets/bg-rect.svg) no-repeat bottom right

.info-page
  &__banner
    height: 450px
    margin-bottom: 120px
    background-size: cover !important
  &__text
    color: #575757
    margin-bottom: 120px
    ul
      list-style: none
      li
        position: relative
        margin-bottom: 16px
        font-weight: 700
        &:last-child
          margin-bottom: 0
        &:before
          position: absolute
          content: ''
          background: $primary
          width: 24px
          height: 24px
          border-radius: 50%
          left: -40px
          top: -2px
@media (max-width: 768px)
  .info-page
    &__banner

      height: 290px
      background-size: cover !important
      margin-bottom: 90px
</style>
