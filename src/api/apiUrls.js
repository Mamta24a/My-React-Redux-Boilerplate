let apiHost = "http://localhost:3000"

export function getUserListLink() {
    return `${apiHost}/users`;
}

export function postUserDetailsLink() {
    return `${apiHost}/user`;
}