import { User } from '@/types/vuex/users';

export default {
  ADD_ENTRY(state: any, entry: User) {
    state.info.unshift(entry);
  },
};
