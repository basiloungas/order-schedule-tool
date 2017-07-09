import data from './calendar.json';

export default class Api {
  fetchSchedule() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 600);
    })
  }
}
