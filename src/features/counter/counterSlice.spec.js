import counterReducer, {
  counterSlice as counter,
} from './counterSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 0,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, counter.actions.increment());
    expect(actual.value).toEqual(1);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, counter.actions.decrement());
    expect(actual.value).toEqual(-1);
  });
});
