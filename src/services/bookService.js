import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/books";

export const getBooks = async () => {
    return await axios.get(REST_API_BASE_URL)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching books:', error);
            return [];
        });
}
