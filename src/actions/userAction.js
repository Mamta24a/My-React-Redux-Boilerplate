import * as link from '../api/apiUrls';
import { fetchApi, fetchBodyApi } from '../api/apiHelper';

export const SHOW_ERROR = 'user:showError';
export const SHOW_RESPONSE = 'user:showResponse';

export function fetchUserListError(errorMessage) {
    return {
        type: SHOW_ERROR,
        payload: errorMessage
    }
}

export function fetchUserListSuccess(res) {
    return {
        type: SHOW_RESPONSE,
        payload: res
    }
}

export function fetchUserListApi(limit, offset) {
    return dispatch => {
        const apiUrl = link.getUserListLink(limit, offset);
        fetchApi(apiUrl, "GET")
            .then(([response, json]) => {
                response.status === 200 && dispatch(fetchUserListSuccess(json))
            })
            .catch(err => {
                dispatch(fetchUserListError(err));
            });
    }
}

export function postUserDetailsApi(body) {
    const apiUrl = link.postUserDetailsLink(body);
    return fetchBodyApi(apiUrl, "PUT", body);
}