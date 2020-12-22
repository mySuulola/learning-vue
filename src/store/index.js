import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import ModeModule from './Mode';
import UserModule from './User';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: UserModule,
    Mode: ModeModule,
  },
  plugins: [createPersistedState()],
});
