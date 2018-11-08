import { combineReducers } from 'redux';

const INITIAL_STATE = {
  projetos: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
};

export default function reducer(state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};