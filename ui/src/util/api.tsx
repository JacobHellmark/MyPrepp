import internal from "stream";

interface customResp {
    status: number,
    data: Object;

}

const postToApi = async (url: string, body: Object) => {
    const apiUrl: string = localStorage.getItem("apiUrl") as string;

    console.log("body", body);
    const resp: customResp = await Promise.resolve(fetch(apiUrl + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:8080"
        },
        body: JSON.stringify(body),
    }).then(async resp => {
        const jsonData: Object = await resp.json();
        const status: number = resp.status;

        return { status: status, data: jsonData };
    }));
    return resp;
};


export { postToApi };