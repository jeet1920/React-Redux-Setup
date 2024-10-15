// Store configuration sutup
import { createStore } from 'redux';

import "regenerator-runtime/runtime";
import rootReducer from '../reducers/index';


export const store = createStore(
    rootReducer,
   
);


