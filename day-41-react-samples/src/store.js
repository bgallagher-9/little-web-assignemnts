import { createStore } from 'redux';

//actions
const IncrementAction = { type: 'INCREMENT' };
const DecrementAction = { type: 'DECREMENT' };
const ResetAction = { type: 'RESET' };

const NEXT = { type: 'NEXT' };
const PREV = { type: 'PREV' };

const affirmArr = [
  'I\'m good enough, I\'m smart enough, and, doggonit, people like me!',
  'You have fabulous hair.',
  'Your family loves you!',
  'Your yard looks amazing.',
  'Remember, coder brains are cooler.',
  'At least you\'re in Texas.',
  'A+ for dressig yourself today.',
  'Before you criticize someone, you should walk a mile in their shoes. That way, when you criticize them, you’re a mile away and you have their shoes.'
];

const affirmReducer = (state = { index: 0, affirmArr: affirmArr[0] }, action) => {
    switch (action.type) {
      case 'NEXT': if (state.index === affirmArr.length-1) {
        return { index: 0, affirmArr: affirmArr[0]}
      }
      else {
        return { index:  state.index + 1, affirmArr: affirmArr[state.index +1 ] };
      }
      case 'PREV': if (state.index < 1) {
        return { index: affirmArr.length-1, affirmArr:  affirmArr[affirmArr.length-1]}
        console.log('prev if?', state.index);
      }
        return { index: state.index - 1, affirmArr: affirmArr[state.index-1] };
        console.log('prev else?');
    }
    return state;
};

//reducer
const counterReducer = (state = { number: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1 };
    case 'DECREMENT':
      return { number: state.number - 1 };
    case 'RESET':
      return { number: 0 };
  }
  return state;
};

counterReducer({ number: 0 }, IncrementAction);
affirmReducer({ index: 0 }, NEXT);

//creating store
var store = createStore(counterReducer);
var store2 = createStore(affirmReducer);

module.exports = {
  store: store,
  store2: store2,
  IncrementAction: IncrementAction,
  DecrementAction: DecrementAction,
  ResetAction: ResetAction,
  NEXT: NEXT,
  PREV: PREV
};
