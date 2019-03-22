export default {
  addEntry({ commit }: any, entry: any) {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; // January is 0!
    const yyyy = today.getFullYear();

    const entryWithDate = { ...entry, date: `${dd}. ${mm}. ${yyyy}` };

    commit('ADD_ENTRY', entryWithDate);
  },
};
