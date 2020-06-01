export function fetchApi(apiUrl, method) {
    const header = {
        method: method,
    };
    return fetch(apiUrl, header)
        .then(response => {
            return Promise.all([response, response.json()])
        })
        .catch(err => {
            console.error("Syntax Error: ", err);
        })
}

export function fetchBodyApi(apiUrl, method, reqstBody) {
    const putBody = JSON.stringify(reqstBody)
    const header = {
        method: method,
        body: putBody
    };
    return fetch(apiUrl, header)
        .then(response => {
            return Promise.all([response, response.json()])
        })
        .catch(err => {
            console.error("Syntax Error: ", err);
        })
}