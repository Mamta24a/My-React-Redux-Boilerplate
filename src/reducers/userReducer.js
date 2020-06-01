import { SHOW_ERROR, SHOW_RESPONSE } from '../actions/userAction';
import userInitStates from './initialStates/userStates';

export default function userReducer(state = userInitStates, action = {}) {
    switch (action.type) {
        case SHOW_RESPONSE:
            return {
                userList: action.payload,
                loading: false
            };
        case SHOW_ERROR:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}