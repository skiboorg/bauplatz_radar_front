<template>
  <q-page v-if="item.table.length>1" class="mb-100 q-px-lg-sm">
    <div :data-text="item.name" class="section-title mt-100">
      <p>{{item.name}}</p>
    </div>

    <div class="mb-120 table-wrapper">
       <table  class="table">
        <tr>
          <th style="width:200px" v-for="(head_item,index) in item.table[0].row" :key="index"><p class="no-margin ellipsis">{{head_item}}</p></th>
        </tr>
        <tr v-if="index>0" class="table-row" v-for="(row,index) in item.table" :key="index">
          <td style="width:200px"  v-for="(row_item,row_index) in row.row" :key="row_index"><p class="no-margin ellipsis">{{row_item}}</p></td>
        </tr>
      </table>


    </div>

    <div data-text="Hilfreiche Tabellen" class="section-title">
      <p>Hilfreiche Tabellen</p>
    </div>
    <Tables/>
  </q-page>
  <q-page v-else class="flex flex-center items-center">
     <q-spinner-clock
          color="primary"
          size="2em"
        />
  </q-page>

</template>
<script>
import { mapGetters} from 'vuex'
import {api} from "boot/axios";
import Tables from "components/Tables";
export default {
  components:{

    Tables
  },
  data () {
    return{
      visible: true,
      item:{
        table:[
          {row:{}}
        ]

      }
    }
  },
  async mounted() {
    console.log('mmm')
    const response = await api.get(`/api/get_table_item?slug=${this.$route.params.slug}`)
    this.item = response.data
  },


}
</script>
<style lang="sass">
.table

  border-collapse: collapse
  font-weight: 700
  &-wrapper
      overflow-x: auto
  th
    background: $primary
    color: #ffffff
    line-height: 60px
    text-align: center
  &-row
    line-height: 40px
    &:nth-child(even)
      background: #ffffff
      color: $primary
    &:nth-child(odd)
      background: #D5A94F
      color: #ffffff
    td
      text-align: center
@media (max-width: 1023px)
  .table
    width: 1920px
    &-wrapper
      overflow-x: auto
</style>
