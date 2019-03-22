import { User } from '@/types/vuex/users';

export default {
  addEntry({ commit }: any, entry: User) {
    const date = new Date().toLocaleDateString('cs');
    const entryWithDate: User = { ...entry, date };

    commit('ADD_ENTRY', entryWithDate);
  },

  addEntriesFromJSON({ commit }: any, entries: User[]) {
    entries.forEach((entry) => {
      const date = new Date(entry.date).toLocaleDateString('cs');
      const entryWithDate: User = { ...entry, date };

      commit('ADD_ENTRY', entryWithDate);
    });
  },
};
