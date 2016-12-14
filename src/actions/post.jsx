import {LOAD_POST_DETAIL} from '../constants/ActionTypes';

const FetchPostAction = {
    type: LOAD_POST_DETAIL
}

export function fetchPost() {
    return dispatch => {
        setTimeout(() => dispatch(FetchPostAction), 1000)
    }
}