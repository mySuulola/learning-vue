import { createStore } from 'vuex';
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
});
