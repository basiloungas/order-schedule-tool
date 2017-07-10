import API from './index';
import calendarData from './calendar.json';

jest.useFakeTimers();

describe('lib > API', () => {
  describe('#fetchSchedule()', () => {
    test('returns a Promise', () => {
      const instance = new API();
      const result = instance.fetchSchedule();

      expect(result).toBeInstanceOf(Promise);
    });

    test('resolves after 600ms with fake data', () => {
      const instance = new API();
      const result = instance.fetchSchedule();

      jest.runTimersToTime(600);

      return result.then((data) =>  {
        expect(data).toEqual(data);
      });
    });
  });

  describe('markAsDelivered', () => {
    test('returns a Promise', () => {
      const instance = new API();
      const result = instance.markAsDelivered();

      expect(result).toBeInstanceOf(Promise);
    });

    test('resolves after 600ms', () => {
      const instance = new API();
      const result = instance.markAsDelivered();

      jest.runTimersToTime(600);

      return result.then((data) =>  {
        expect(data).toEqual(true);
      });
    });
  });
});
