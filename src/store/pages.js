import { api } from 'boot/axios'

const state = () => ({
  richtungen_items:{},
  richtungen_item:{},
  table_items:{},
  table_item:{},
})

const mutations = {
  updateRichtungenItems(state,data){
    state.richtungen_items = data
  },
  updateRichtungenItem(state,data){
    state.richtungen_item = data
  },
  updateTableItems(state,data){
    state.table_items = data
  },
  updateTableItem(state,data){
    state.table_item = data
  },

}

const actions = {
  async fetchRichtungenItems({commit}){
      const response = await api.get('/api/get_richtunge_items')
    console.log(response)
    commit('updateRichtungenItems', response.data)

  },
  async fetchRichtungenItem({commit},data){
    console.log('rrr')
      const response = await api.get(`/api/get_richtunge_item?slug=${data}`)
    console.log(response)
    commit('updateRichtungenItem', response.data)
  },
  async fetchTableItems({commit}){
      const response = await api.get('/api/get_table_items')
    console.log(response)
    commit('updateTableItems', response.data)

  },
  async fetchTableItem({commit},data){
    console.log('rrr')
      const response = await api.get(`/api/get_table_item?slug=${data}`)
    console.log(response)
    commit('updateTableItem', response.data)
  },

}

export const getters = {
  richtungenItems: (state) => state.richtungen_items,
  richtungenItem: (state) => state.richtungen_item,
  tableItems: (state) => state.table_items,
  tableItem: (state) => state.table_item,

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
