import axios from 'axios';
// const BASE_URL ='https://youtube-v31.p.rapidapi.com';
// const options = {
//     method: 'GET',
//     url: BASE_URL,
//     params: {
//         maxResults: '50'
//       },
//       headers: {
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//       }
//     };
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }

// export const fetchFromAPI = async (url) => {
//     const {data} =await axios.get(`${BASE_URL}/${url}` , options);
//     return data;
// }


const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (endPoint, params) => {
    const options = {
        method: "GET",
        params: params,
        headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
    };
    const { data } = await axios.get(`${BASE_URL}/${endPoint}`, options);
    return data;
};

