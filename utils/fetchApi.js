import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a1ae7aaf7amsha32de1b7c24d67cp1774c8jsn2ea0b86bce7f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          },
    });

    return data;
}