import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function fetchPostsRequest() {
    return {
        type: types.FETCH_REQUEST
    };
}

export function fetchPostsSuccess(payload) {
    return {
        type: types.FETCH_SUCCESS,
        payload
    };
}

export function fetchPostsError() {
    return {
        type: types.FETCH_ERROR
    };
}
