const axios = require("axios");

const api = `${process.env.API_HOST}/api`;

export const authAPI = {
    authKakao: async (url) => {
        url = api + url;

        const response = await axios.get(url);
        console.log(response.data);
    },
};
