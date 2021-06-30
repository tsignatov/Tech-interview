
import { createStore } from 'redux';
import { reducer, initialState } from './reducer';
import { install } from 'redux-loop';

export const store = createStore(reducer, initialState, install());