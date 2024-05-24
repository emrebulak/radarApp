import axios from "axios";

const api = axios.create({
    baseURL: "https://flight-radar1.p.rapidapi.com/flights",
    headers: {
        'X-RapidAPI-Key': 'f04f798a04msh45d71c385838610p171918jsnb3bf02b43607',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
});

export default api;