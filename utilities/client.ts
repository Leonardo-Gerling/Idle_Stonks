import axios, { AxiosInstance } from "axios"

const Client: AxiosInstance = axios.create({
    baseURL: "https://api.tomorrow.io/v4/weather",
})

export default Client
