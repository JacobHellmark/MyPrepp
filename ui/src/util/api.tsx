

const postToApi = async (url: string, body: Object) => {
    const apiUrl: string = localStorage.getItem("apiUrl") as string;

    console.log("body", body);
    const resp: Response = await Promise.resolve(fetch(apiUrl + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:8080/"
        },
        body: JSON.stringify(body),
    }).then(resp => resp.json()));
    return resp;
};


export { postToApi };