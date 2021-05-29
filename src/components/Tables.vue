<template>
    <div class="grid grid-3 grid-gap-15  mb-120">

      <q-card
        flat
        class="bg-primary cursor-pointer"
        @click="$router.push({name:'table',params:{slug:item.name_slug}})"
        v-for="item in tableItems"
        :key="item.id"
        >
        <q-card-section class="flex column items-center justify-center q-pa-lg-xl q-pa-md-xl q-pa-sm-xl q-pa-xs-sm card-body">

          <p class="no-margin text-white text-h5 text-weight-600">{{item.name}}</p>
        </q-card-section>
      </q-card>


    </div>
</template>
<script>

import { mapGetters } from 'vuex'
export default {
  data () {
      return{

      }
  },
  computed:{
    ...mapGetters('pages',['tableItems'])
  },
}
</script>
