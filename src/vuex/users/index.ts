import mutations from './mutations';
import actions from './actions';

const state = {
  info: [],
};

const namespaced: boolean = true;

export default {
  namespaced,
  state,
  mutations,
  actions,
};
