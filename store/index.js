import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({

    state: () => ({
      isSidebarActive: false
    }),

    mutations: {
      toggleSidebarActive(state) {
        state.isSidebarActive = !state.isSidebarActive
      }
    },

    getters: {
      isSidebarActive(state) {
        return state.isSidebarActive
      }
    },
    
    actions: {
      toggleSidebarActive(vuexContext) {
        vuexContext.commit('toggleSidebarActive')
      }
    }

  })
}

export default createStore