import axios from 'axios'

export const getAllMovies = async () => {
    try {
        const res = await axios.get("/movie")
        if (res.status !== 200) {
            console.log("No data in database");
        }
        const data = await res.data
        return data

    } catch (error) {
        console.log("api error==> ", error);
    }
}