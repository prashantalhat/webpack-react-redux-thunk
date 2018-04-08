import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = {
    posts: null,
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_REQUEST:
            return state;
        case types.FETCH_SUCCESS:
            return {...state, posts: action.payload};
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    posts,
    routing
});

export default rootReducer;
