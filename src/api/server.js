import axios from "axios";

export default class Server {
    axios(method, url, params) {
        return new Promise((resolve, reject) => {
            if (typeof params !== "object") {
                params = {};
            }
            let option = params;
            option = {
                method,
                url,
                timeout: 30000,
                headers: null,
                validDateStatus: (status) => {
                    return status >= 200 && status < 300;
                },
                ...params,
            }
            axios.request(option).then(res => {
                resolve(typeof res.data === "object" ? { data: res.data, status: res.status } : JSON.parse(res.data));
            }, error => {
                if (error.response) {
                    reject(error.response.data);
                } else {
                    reject(error);
                }
            });
        })
    };
}