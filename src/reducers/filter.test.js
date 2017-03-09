import filter from './filter';
import { switchFilter } from '../actions';
import deepFreeze from 'deep-freeze'; // used for immutability tests

describe('setting values', () => {
  test('sets the filter properly', () => {
    const stateBefore = 'finished';
    deepFreeze(stateBefore);

    const stateAfter = 'active';

    expect(filter(stateBefore, switchFilter('active'))).toBe(stateAfter);
  });
});

describe('ignore when invalid', () => {
  test("doesn't crash when no proper action type is specified", () => {
    const stateBefore = 'all';
    deepFreeze(stateBefore);

    const testAction = {
      type: Math.random().toString()
    };

    const stateAfter = 'all';

    expect(filter(stateBefore, testAction)).toBe(stateAfter);
  });
});
