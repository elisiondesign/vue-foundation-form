import { User, UserDate } from '@/types/vuex/users';

function buildUserDate(dateObject: Date): string {
  const date: UserDate = {
    year: '',
    month: '',
    day: '',
  };

  date.year = dateObject.getUTCFullYear().toString();
  const month = dateObject.getUTCMonth() + 1;
  date.month = month > 9 ? month.toString() : `0${month}`;
  const day = dateObject.getUTCDate();
  date.day = day > 9 ? day.toString() : `0${day}`;

  return `${date.day}.${date.month}.${date.year}`;
}

export default {
  addEntry({ commit }: any, entry: User): void {
    const date: string = buildUserDate(new Date());
    const entryWithDate: User = { ...entry, date };

    commit('ADD_ENTRY', entryWithDate);
  },

  addEntriesFromJSON({ commit }: any, entries: User[]) {
    entries.forEach((entry) => {
      const gender: string = entry.gender === 'male' ? 'Muž' : 'Žena';
      const date: string = buildUserDate(new Date(entry.date));

      const adjustedEntry: User = { ...entry, gender, date };

      commit('ADD_ENTRY', adjustedEntry);
    });
  },
};
