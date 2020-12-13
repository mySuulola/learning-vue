const ModeModule = {
  namespaced: true,

  state: {
    darkMode: false,
  },

  mutations: {
    SET_MODE(state, mode) {
      state.darkMode = mode;
    },
  },

  actions: {
    setMode({ commit }, mode) {
      commit('SET_MODE', mode);
    },
  },
};

export default ModeModule;
