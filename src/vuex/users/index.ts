import mutations from './mutations';
import actions from './actions';

const state = {
  info: [
    {
      date: '20. 3. 2018',
      gender: 'Zena',
      fullName: 'Jmeno',
      lastName: 'Prijmeni',
    },
    {
      date: '20. 3. 2018',
      gender: 'Zena',
      fullName: 'Jmeno',
      lastName: 'Prijmeni',
    },
    {
      date: '20. 3. 2018',
      gender: 'Zena',
      fullName: 'Jmeno',
      lastName: 'Prijmeni',
    },
  ],
};

const namespaced: boolean = true;

export default {
  namespaced,
  state,
  mutations,
  actions,
};
