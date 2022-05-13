import {configureStore} from '@reduxjs/toolkit';
import dummyReducer from './dummyReducer';

const store = configureStore({
    reducer : {dummyReducer} ,
})

export default store;

